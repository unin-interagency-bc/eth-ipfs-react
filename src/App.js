import {Table, Grid, Button, Form } from 'react-bootstrap';
import React, { Component } from 'react';
import './App.css';
import web3 from './web3.js';
import ipfs from './ipfs.js';
import storehashes from './storehashes.js';

class App extends Component {

    state = {
        ipfsHash:null,
        buffer:'',
        ethAddress:'',
        blockNumber:'',
        transactionHash:'',
        gasUsed:'',
        txReceipt: '',

        droneCorridorName: '', // Will store the name of the drone corridor being passed in
        ethCertificates: [], // Will store objects (country and string),
        certCount: ''
    };    
    componentWillMount = () => {
        this.getCertificatesFromBlockchain()
    }

    handleChange = event => {
        event.stopPropagation()
        event.preventDefault()
        console.log(event.target.value)
        this.setState({droneCorridorName: event.target.value});
    }

    captureFile = event => {
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader)    
    };

    convertToBuffer = async(reader) => {
        const buffer = await Buffer.from(reader.result);
        this.setState({buffer});
    };

    onClick = async () => {
        try{
            this.setState({blockNumber:"waiting.."});
            this.setState({gasUsed:"waiting..."});

            await web3.eth.getTransactionReceipt(this.state.transactionHash, (err, txReceipt)=>{
                console.log(err,txReceipt);
                this.setState({txReceipt});
            }); //await for getTransactionReceipt

            await this.setState({blockNumber: this.state.txReceipt.blockNumber});
            await this.setState({gasUsed: this.state.txReceipt.gasUsed});    
        } //try
        catch(error){
            console.log(error);
        } //catch
    } //onClick

    getCertificateTableRows = (country, hash) => {
        const ipfsLink = 'https://ipfs.io/ipfs/' + hash
        return(
            <tr>
                <td>{country}</td>
                <td><a href={ipfsLink}>File on IPFS</a></td>
                <td>{hash}</td>
            </tr>
        )
    }
    getCertificatesFromBlockchain = async () => {
        const accounts = await web3.eth.getAccounts();
        storehashes.methods._getOwnerCount().call({
                from: accounts[0]
            }, (error, response) => {
                console.log(response);
                this.setState({certCount: response})
                for(let i = 0; i < this.state.certCount; i++){
                    storehashes.methods._getCert(i).call()
                    .then(cert => {
                        this.setState({ ethCertificates: [...this.state.ethCertificates, cert] })

                    })
                }
            });
    }
    onSubmit = async (event) => {
        event.preventDefault();

        //bring in user's metamask account address
        const accounts = await web3.eth.getAccounts();
        console.log('Sending from Metamask account: ' + accounts[0]);
        const ethAddress= await storehashes.options.address;
        this.setState({ethAddress});
        await ipfs.add(this.state.buffer, (err, ipfsHash) => {
            console.log(err,ipfsHash);
            this.setState({ ipfsHash:ipfsHash[0].hash });
            storehashes.methods._createCert(this.state.droneCorridorName, this.state.ipfsHash).send({
                from: accounts[0]
            }, (error, transactionHash) => {
                console.log(transactionHash);
                this.setState({transactionHash});
            });
        }) //await ipfs.add 
    }; //onSubmit 

    generateLink = hash => {
        return 'https://etherscan.io/tx/' + hash
    }

render() {

  return (
    <div className="App">

        <Grid>
            <header className="App-header">
                <h1>Ethereum and InterPlanetary File System (IPFS)</h1>
            </header>
            <p>
                This application uploads a file to IPFS.  Once IPFS returns a hash the hash is stored as a string on the Ethereum blockchain.
            </p>
            <hr />

            <h3> Choose file to send to IPFS </h3>
            <Form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input 
                        type = "text"
                        className="form-control"
                        onChange={this.handleChange}
                        placeholder="Enter Drone Corridor Name"
                    />
                    <input 
                        type = "file"
                        className="form-control-file"
                        onChange = {this.captureFile}
                    />
                </div>
                <Button 
                    bsStyle="primary" 
                    type="submit"
                > 
                    Send it 
                </Button>
            </Form>
            <hr/>
            <Button 
                className="btn btn-success"
                onClick = {this.onClick}
            > 
                Get Transaction Receipt 
            </Button>
            <hr/>
            <Table bordered responsive>
    <thead>
    <tr>
    <th>Tx Receipt Category</th>
    <th>Values</th>
    </tr>
    </thead>

    <tbody>
    <tr>
    <td>IPFS Hash # stored on Eth Contract</td>
    <td>{this.state.ipfsHash}</td>
    </tr>
    <tr>
    <td>Ethereum Contract Address</td>
    <td>{this.state.ethAddress}</td>
    </tr>

    <tr>
    <td>Tx Hash # </td>
    <td>{this.state.transactionHash}</td>
    </tr>

    <tr>
    <td>Etherscan Link </td>
    {

    }
    <td><a href={this.generateLink(this.state.transactionHash)}>{this.state.transactionHash=='' ? '' : 'Link' }</a></td>
    </tr>
    
    <tr>
    <td>Block Number # </td>
    <td>{this.state.blockNumber}</td>
    </tr>

    <tr>
    <td>Gas Used</td>
    <td>{this.state.gasUsed}</td>
    </tr>                
    </tbody>
            </Table>
            <hr/>
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>Corridor</th>
                        <th>Certificate on Blockchain</th>
                        <th>Hash</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.ethCertificates.map(certificate => {
                            return this.getCertificateTableRows(certificate["0"],certificate["1"])     
                        }) 
                        
                    }
                </tbody>
            </Table>
        </Grid>
    </div>
    );
} //render
}

export default App;

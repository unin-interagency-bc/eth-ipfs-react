import React, { Component } from 'react';
import './App.css';
// import web3 from './utils/web3.js';
// import ipfs from './utils/ipfs.js';
// import storehashes from './utils/storehashes.js';

// Material UI Imports:
import ButtonAppBar from './components/ButtonAppBar';
// import Blog from './components/Blog';
import Layout from './components/Layout';

class App extends Component {

    // state = {
    //     ipfsHash:null,
    //     buffer:'',
    //     ethAddress:'',
    //     blockNumber:'',
    //     transactionHash:'',
    //     gasUsed:'',
    //     txReceipt: '',

    //     droneCorridorName: '', // Will store the name of the drone corridor being passed in
    //     date: '',
    //     companyName:'',
    //     ethCertificates: [], // Will store objects (country and string),
    //     certCount: ''
    // };
    // componentWillMount = () => {
    //     // this.getCertificatesFromBlockchain()
    // }

    // handleChangeCorridor = event => {
    //     event.stopPropagation()
    //     event.preventDefault()
    //     console.log(event.target.value)
    //     this.setState({droneCorridorName: event.target.value});
    // }
    // handleChangeDate = event => {
    //     event.stopPropagation()
    //     event.preventDefault()
    //     console.log(event.target.value)
    //     this.setState({date: event.target.value});
    // }
    // handleChangeCompany = event => {
    //     event.stopPropagation()
    //     event.preventDefault()
    //     console.log(event.target.value)
    //     this.setState({companyName: event.target.value});
    // }

    // captureFile = event => {
    //     event.stopPropagation()
    //     event.preventDefault()
    //     const file = event.target.files[0]
    //     let reader = new window.FileReader()
    //     reader.readAsArrayBuffer(file)
    //     reader.onloadend = () => this.convertToBuffer(reader)
    // };

    // convertToBuffer = async(reader) => {
    //     const buffer = await Buffer.from(reader.result);
    //     this.setState({buffer});
    // };

    // onClick = async () => {
    //     try{
    //         this.setState({blockNumber:"waiting.."});
    //         this.setState({gasUsed:"waiting..."});

    //         await web3.eth.getTransactionReceipt(this.state.transactionHash, (err, txReceipt)=>{
    //             console.log(err,txReceipt);
    //             this.setState({txReceipt});
    //         }); //await for getTransactionReceipt

    //         await this.setState({blockNumber: this.state.txReceipt.blockNumber});
    //         await this.setState({gasUsed: this.state.txReceipt.gasUsed});
    //     } //try
    //     catch(error){
    //         console.log(error);
    //     } //catch
    // } //onClick
    // onSubmit = async (event) => {
    //     event.preventDefault();

    //     //bring in user's metamask account address
    //     const accounts = await web3.eth.getAccounts();
    //     console.log('Sending from Metamask account: ' + accounts[0]);
    //     const ethAddress= await storehashes.options.address;
    //     this.setState({ethAddress});
    //     await ipfs.add(this.state.buffer, (err, ipfsHash) => {
    //         console.log(err,ipfsHash);
    //         this.setState({ ipfsHash:ipfsHash[0].hash });
    //         storehashes.methods._createCert(
    //             this.state.droneCorridorName,
    //             this.state.ipfsHash,
    //             this.state.companyName,
    //             this.state.date

    //             ).send({
    //             from: accounts[0]
    //         }, (error, transactionHash) => {
    //             console.log(transactionHash);
    //             this.setState({transactionHash});
    //         });
    //     }) //await ipfs.add
    // }; //onSubmit



render() {

  return (
    <div className="App">
        <ButtonAppBar />
        <Layout />
            {/* <Blog/> */}
            {/* <h3> Choose file to send to IPFS </h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input
                        type = "text"
                        className="form-control"
                        onChange={this.handleChangeCorridor}
                        placeholder="Enter Drone Corridor Name (country)"
                    />
                    <input
                        type = "date"
                        className="form-control"
                        onChange={this.handleChangeDate}
                        placeholder="Enter Date"
                    />
                    <input
                        type = "text"
                        className="form-control"
                        onChange={this.handleChangeCompany}
                        placeholder="Enter Company Name"
                    />
                    <input
                        type = "file"
                        className="form-control-file"
                        onChange = {this.captureFile}
                    />
                </div>
                <button
                    type="submit"
                >
                    Send it
                </button>
            </form>
            <hr/>
            <button
                className="btn btn-success"
                onClick = {this.onClick}
            >
                Get Transaction Receipt
            </button>
            <hr/>
            <table>
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
                        <td>Etherscan Link</td>
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
            </table> */}
            <hr/>
    </div>
        );
    } //render
}

export default App;

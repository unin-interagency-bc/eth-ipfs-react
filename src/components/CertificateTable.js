import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';

import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

// If we want blockchain to be used: 

// import {web3, contracts} from '../utils/web3.js';
// import decrypt from '../utils/decryptor.js';
// const contract = new web3.eth.Contract(contracts['StoreHashes']['abi'], contracts['StoreHashes']['address'])
// const contract = new web3.eth.Contract(contracts['StoreCertAndHash']['abi'], contracts['StoreCertAndHash']['address'])
// const getCerts = async () => {
//   let index = 0;
//   const certs = [];
//   while(index > -1){
//     try {
//       const cert = await contract.methods._getCert(index).call();
//       const cert_details = await decrypt(cert[1])
//       certs.push({ipfsHash: cert[0], details: cert_details});
//       index += 1;
//     } catch(e){
//       console.log(e)
//       index = -1;
//     }
//   }
//   return certs;
// }

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 300,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  tablecell: {
    fontSize: '10pt'
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  paperImg: {
    width: theme.spacing.unit * 41,
    // padding: theme.spacing.unit * 2,
  }
});

class CertificateTable extends React.Component {
  state = {
    page: 0,
    rowsPerPage: 5,
    // Needed for blockchain implementation:
    // ethCertificates: [],
    openYZ: false,
    openYW: false,
    openYTC: false,
    openYNC: false,
    openYH: false,
    openMW: false,
    openMS: false,
    openMR: false,
    openEX: false,
    openBAM: false,
    openAS: false,
    openAR: false,
    openAC: false,
  };
  handleYZOpen = () => { this.setState({openYZ: true})}
  handleYZClose = () => {  this.setState( {openYZ: false})}
  handleYWOpen = () => { this.setState({openYW: true})}
  handleYWClose = () => {  this.setState( {openYW: false})}
  handleYTCOpen = () => { this.setState({openYTC: true})}
  handleYTCClose = () => {  this.setState( {openYTC: false})}
  handleYNCOpen = () => { this.setState({openYNC: true})}
  handleYNCClose = () => {  this.setState( {openYNC: false})}
  handleYHOpen = () => { this.setState({openYH: true})}
  handleYHClose = () => {  this.setState( {openYH: false})}
  handleMWOpen = () => { this.setState({openMW: true})}
  handleMWClose = () => {  this.setState( {openMW: false})}
  handleMSOpen = () => { this.setState({openMS: true})}
  handleMSClose = () => {  this.setState( {openMS: false})}
  handleMROpen = () => { this.setState({openMR: true})}
  handleMRClose = () => {  this.setState( {openMR: false})}
  handleEXOpen = () => { this.setState({openEX: true})}
  handleEXClose = () => {  this.setState( {openEX: false})}
  handleBAMOpen = () => { this.setState({openBAM: true})}
  handleBAMClose = () => {  this.setState( {openBAM: false})}
  handleASOpen = () => { this.setState({openAS: true})}
  handleASClose = () => {  this.setState( {openAS: false})}
  handleAROpen = () => { this.setState({openAR: true})}
  handleARClose = () => {  this.setState( {openAR: false})}
  handleACOpen = () => { this.setState({openAC: true})}
  handleACClose = () => {  this.setState( {openAC: false})}
  componentDidMount() {
    // getCerts().then((_certs) => {
    //   this.setState({ethCertificates:_certs})
    // })
  }

  render() {
    const { classes } = this.props;
    // const { ethCertificates, rowsPerPage, page } = this.state;
    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, ethCertificates.length - page * rowsPerPage);
    return (
      <div>
      <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openYZ}
          onClose={this.handleYZClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Yalta Zhu
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              This is the certificate that was issued to Yalta Zhu
            </Typography>
            <img className={classes.paperImg} src="/images/nyu/certificate_YZ.jpg"></img>
          </div>
        </Modal>        

        <Modal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={this.state.openYW}
          onClose={this.handleYWClose}
          
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant='h6' id='modal-title'>
              YW
            </Typography>
            <Typography variant='subtitle1' id='simple-modal-description'>
              This is the certificate that was issued to YW
            </Typography>
            <img className={classes.paperImg} src='/images/nyu/certificate_YW.jpg'></img>
          </div>
        </Modal>
        <Modal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={this.state.openYTC}
          onClose={this.handleYTCClose}
          
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant='h6' id='modal-title'>
              YTC
            </Typography>
            <Typography variant='subtitle1' id='simple-modal-description'>
              This is the certificate that was issued to YTC
            </Typography>
            <img className={classes.paperImg} src='/images/nyu/certificate_YTC.jpg'></img>
          </div>
        </Modal>
        <Modal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={this.state.openYNC}
          onClose={this.handleYNCClose}
          
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant='h6' id='modal-title'>
              YNC
            </Typography>
            <Typography variant='subtitle1' id='simple-modal-description'>
              This is the certificate that was issued to YNC
            </Typography>
            <img className={classes.paperImg} src='/images/nyu/certificate_YNC.jpg'></img>
          </div>
        </Modal>
        <Modal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={this.state.openYH}
          onClose={this.handleYHClose}
          
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant='h6' id='modal-title'>
              YH
            </Typography>
            <Typography variant='subtitle1' id='simple-modal-description'>
              This is the certificate that was issued to YH
            </Typography>
            <img className={classes.paperImg} src='/images/nyu/certificate_YH.jpg'></img>
          </div>
        </Modal>
        <Modal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={this.state.openMW}
          onClose={this.handleMWClose}
          
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant='h6' id='modal-title'>
              MW
            </Typography>
            <Typography variant='subtitle1' id='simple-modal-description'>
              This is the certificate that was issued to MW
            </Typography>
            <img className={classes.paperImg} src='/images/nyu/certificate_MW.jpg'></img>
          </div>
        </Modal>
        <Modal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={this.state.openMS}
          onClose={this.handleMSClose}
          
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant='h6' id='modal-title'>
              MS
            </Typography>
            <Typography variant='subtitle1' id='simple-modal-description'>
              This is the certificate that was issued to MS
            </Typography>
            <img className={classes.paperImg} src='/images/nyu/certificate_MS.jpg'></img>
          </div>
        </Modal>
        <Modal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={this.state.openMR}
          onClose={this.handleMRClose}
          
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant='h6' id='modal-title'>
              MR
            </Typography>
            <Typography variant='subtitle1' id='simple-modal-description'>
              This is the certificate that was issued to MR
            </Typography>
            <img className={classes.paperImg} src='/images/nyu/certificate_MR.jpg'></img>
          </div>
        </Modal>
        <Modal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={this.state.openEX}
          onClose={this.handleEXClose}
          
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant='h6' id='modal-title'>
              EX
            </Typography>
            <Typography variant='subtitle1' id='simple-modal-description'>
              This is the certificate that was issued to EX
            </Typography>
            <img className={classes.paperImg} src='/images/nyu/certificate_EX.jpg'></img>
          </div>
        </Modal>
        <Modal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={this.state.openBAM}
          onClose={this.handleBAMClose}
          
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant='h6' id='modal-title'>
              BAM
            </Typography>
            <Typography variant='subtitle1' id='simple-modal-description'>
              This is the certificate that was issued to BAM
            </Typography>
            <img className={classes.paperImg} src='/images/nyu/certificate_BAM.jpg'></img>
          </div>
        </Modal>
        <Modal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={this.state.openAS}
          onClose={this.handleASClose}
          
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant='h6' id='modal-title'>
              AS
            </Typography>
            <Typography variant='subtitle1' id='simple-modal-description'>
              This is the certificate that was issued to AS
            </Typography>
            <img className={classes.paperImg} src='/images/nyu/certificate_AS.jpg'></img>
          </div>
        </Modal>
        <Modal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={this.state.openAR}
          onClose={this.handleARClose}
          
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant='h6' id='modal-title'>
              AR
            </Typography>
            <Typography variant='subtitle1' id='simple-modal-description'>
              This is the certificate that was issued to AR
            </Typography>
            <img className={classes.paperImg} src='/images/nyu/certificate_AR.jpg'></img>
          </div>
        </Modal>
        <Modal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={this.state.openAC  }
          onClose={this.handleACClose}
          
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant='h6' id='modal-title'>
              AC
            </Typography>
            <Typography variant='subtitle1' id='simple-modal-description'>
              This is the certificate that was issued to AC
            </Typography>
            <img className={classes.paperImg} src='/images/nyu/certificate_AC.jpg'></img>
          </div>
        </Modal>


        <Card className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
            <TableRow>
                <TableCell className ={classes.tablecell}>Certificate Preview</TableCell>
                <TableCell className ={classes.tablecell}>Participant Name</TableCell>
                <TableCell className ={classes.tablecell}>Date of Participation</TableCell>
                <TableCell className ={classes.tablecell}>Course Name</TableCell>
                <TableCell className ={classes.tablecell}>View certificate</TableCell>
                <TableCell className ={classes.tablecell}>Verify on Ethereum Blockchain</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>       
                <TableCell>
                  <img onClick={this.handleYZOpen} src="/images/nyu/certificate_YZ.jpg" alt="" border='1' height='100'></img>
                </TableCell>                                               
                  <TableCell>
                    Yalta Zhu
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    5/13/2019
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    UN-chained: Assessing emerging technologies for social good
                  </TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank"  href={'https://gateway.ipfs.io/ipfs/QmXYxGk64v8LdKQ51SMaBSC7JX6G4GxV3sTzaA2GPyqGSN'}>See certificate</Link></TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank" href={'https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F'}>Check here</Link></TableCell>
                </TableRow>

                <TableRow>
                <TableCell>
                  <img onClick={this.handleYWOpen} src="/images/nyu/certificate_YW.jpg" alt="" border='1' height='100'></img>
                </TableCell>                                               
                  <TableCell>
                    Yiping Wang	
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    5/13/2019
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    UN-chained: Assessing emerging technologies for social good
                  </TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank"  href={'https://gateway.ipfs.io/ipfs/QmXLS1qr6oNNa9qX8yfk2tbj6Kh5SeQxRhpv3VXG7EFAXm'}>See certificate</Link></TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank" href={'https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F'}>Check here</Link></TableCell>
                </TableRow>

                <TableRow>
                <TableCell>
                  <img onClick={this.handleYTCOpen} src="/images/nyu/certificate_YTC.jpg" alt="" border='1' height='100'></img>
                </TableCell>                                               
                  <TableCell>
                    Yi-Syuan (Tina) Chen
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    5/13/2019
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    UN-chained: Assessing emerging technologies for social good
                  </TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank"  href={'https://gateway.ipfs.io/ipfs/QmSnvprgmVTNC7AthZxHbeaiMLQk2YLmMQz6aBrvjPeHoP'}>See certificate</Link></TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank" href={'https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F'}>Check here</Link></TableCell>
                </TableRow>


                <TableRow>
                <TableCell>
                  <img onClick={this.handleYNCOpen} src="/images/nyu/certificate_YNC.jpg" alt="" border='1' height='100'></img>
                </TableCell>                                               
                  <TableCell>
                  Yi-Yuan (Nancy) Chiu
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    5/13/2019
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    UN-chained: Assessing emerging technologies for social good
                  </TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank"  href={'https://gateway.ipfs.io/ipfs/QmVtwFph6p5DUZLw8T7Ez2PstosZ6BqMX5an2Nhozoys1e'}>See certificate</Link></TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank" href={'https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F'}>Check here</Link></TableCell>
                </TableRow>
                
                <TableRow>
                <TableCell>
                  <img onClick={this.handleYHOpen} src="/images/nyu/certificate_YH.jpg" alt="" border='1' height='100'></img>
                </TableCell>                                               
                  <TableCell>
                  Yan Huang
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    5/13/2019
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    UN-chained: Assessing emerging technologies for social good
                  </TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank"  href={'https://gateway.ipfs.io/ipfs/QmPCkftCbpCXtQt3jhvNXq7vypByQk6hCwWnTAboeUfEJJ'}>See certificate</Link></TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank" href={'https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F'}>Check here</Link></TableCell>
                </TableRow>
                
                <TableRow>
                <TableCell>
                  <img onClick={this.handleMWOpen} src="/images/nyu/certificate_MW.jpg" alt="" border='1' height='100'></img>
                </TableCell>                             
                  <TableCell>
                  Man-Ping Wu
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    5/13/2019
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    UN-chained: Assessing emerging technologies for social good
                  </TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank"  href={'https://gateway.ipfs.io/ipfs/QmYZditUJSc4nCfLkMUbtT6tUJV9y2Ni6tB73Ns27PN5zb'}>See certificate</Link></TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank" href={'https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F'}>Check here</Link></TableCell>
                </TableRow>
                
                <TableRow>
                <TableCell>
                  <img onClick={this.handleMSOpen} src="/images/nyu/certificate_MS.jpg" alt="" border='1' height='100'></img>
                </TableCell>                                               
                  <TableCell>
                    Moeezo Saleem
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    5/13/2019
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    UN-chained: Assessing emerging technologies for social good
                  </TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank"  href={'https://gateway.ipfs.io/ipfs/QmWirUiZTrKis7N7VYnX2H5sKXdX4UiPAXD9VEa4A6SRLa'}>See certificate</Link></TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank" href={'https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F'}>Check here</Link></TableCell>
                </TableRow>
                
                <TableRow>
                <TableCell>
                  <img onClick={this.handleMROpen} src="/images/nyu/certificate_MR.jpg" alt="" border='1' height='100'></img>
                </TableCell>                             
                  <TableCell>
                  Maria Rojas
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    5/13/2019
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    UN-chained: Assessing emerging technologies for social good
                  </TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank"  href={'https://gateway.ipfs.io/ipfs/QmbfdLNZ5tDTRqkZrjhJQgX384pJzwLczoWSCMUFpw4eeF'}>See certificate</Link></TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank" href={'https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F'}>Check here</Link></TableCell>
                </TableRow>

                <TableRow>
                <TableCell>
                  <img onClick={this.handleEXOpen} src="/images/nyu/certificate_EX.jpg" alt="" border='1' height='100'></img>
                </TableCell>                             
                  <TableCell>
                    Evelyn Xu
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    5/13/2019
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    UN-chained: Assessing emerging technologies for social good
                  </TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank"  href={'https://gateway.ipfs.io/ipfs/QmbkB6T35eZPf4vUyyaPhve3UsjaDkutQrxHyykyztkfzR'}>See certificate</Link></TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank" href={'https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F'}>Check here</Link></TableCell>
                </TableRow>

                <TableRow>
                <TableCell>
                  <img onClick={this.handleBAMOpen} src="/images/nyu/certificate_BAM.jpg" alt="" border='1' height='100'></img>
                </TableCell>                                               
                  <TableCell>
                    Brittney Atkinson-McFarlane
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    5/13/2019
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    UN-chained: Assessing emerging technologies for social good
                  </TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank"  href={'https://gateway.ipfs.io/ipfs/QmfARQPW82suuRcuEdtDrEezXsA4A61zG5Z1DMtK8sXAbB'}>See certificate</Link></TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank" href={'https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F'}>Check here</Link></TableCell>
                </TableRow>

                <TableRow>
                <TableCell>
                  <img onClick={this.handleASOpen} src="/images/nyu/certificate_AS.jpg" alt="" border='1' height='100'></img>
                </TableCell>                             
                  <TableCell>
                    Alex Santarelli
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    5/13/2019
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    UN-chained: Assessing emerging technologies for social good
                  </TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank"  href={'https://gateway.ipfs.io/ipfs/QmURSXbZ6ijbswLbFoT2UVfYcnq4H4uPu7Pgn5P6zqpuNz'}>See certificate</Link></TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank" href={'https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F'}>Check here</Link></TableCell>
                </TableRow>     

                <TableRow>
                <TableCell>
                  <img onClick={this.handleAROpen} src="/images/nyu/certificate_AR.jpg" alt="" border='1' height='100'></img>
                </TableCell>                             
                  <TableCell>
                  Ahmed Razin
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    5/13/2019
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    UN-chained: Assessing emerging technologies for social good
                  </TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank"  href={'https://gateway.ipfs.io/ipfs/QmdGU8x4HgXjSRTWaBPGk5qxCYqG6hhbnmd5QYeJ8Hd7cH'}>See certificate</Link></TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank" href={'https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F'}>Check here</Link></TableCell>
                </TableRow>   

                <TableRow>
                <TableCell>
                  <img onClick={this.handleACOpen} src="/images/nyu/certificate_AC.jpg" alt="" border='1' height='100'></img>
                </TableCell>                             
                  <TableCell>
                  Abhiroop CVK
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    5/13/2019
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    UN-chained: Assessing emerging technologies for social good
                  </TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank"  href={'https://gateway.ipfs.io/ipfs/QmSt9KpHBsw8PWTWuofP7GkUYXsuv9rLpH7SJHM37gsPnc'}>See certificate</Link></TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank" href={'https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F'}>Check here</Link></TableCell>
                </TableRow>                                                                                              

            </TableBody>
            <TableFooter>
              <TableRow></TableRow>
            </TableFooter>
          </Table>
        </div>
      </Card>
      </div>
    );
  }
}

CertificateTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CertificateTable);

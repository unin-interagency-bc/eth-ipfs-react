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
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import {web3, contracts} from '../utils/web3.js';
import decrypt from '../utils/decryptor.js';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const contract = new web3.eth.Contract(contracts['StoreHashes']['abi'], contracts['StoreHashes']['address'])
console.log(contract)
const getCerts = async () => {
  let index = 0;
  const certs = [];
  while(index > -1){
    try {
      const cert = await contract.methods._getCert(index).call();
      const cert_details = await decrypt(cert[1])
      console.log(cert_details)
      certs.push({ipfsHash: cert[0], details: cert_details});
      index += 1;
    } catch(e){
      console.log(e)
      index = -1;
    }
  }
  return certs;
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
});


class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  };



  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
  TablePaginationActions,
);

let counter = 0;

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
    ethCertificates: [],
    openAltF4: false,
    openKAZUAV: false,
    openUAVG: false,
    openUAVSG: false
  };
  // ALTF4
  handleALTF4Open = () => {
    this.setState({ openAltF4: true });
  };
  handleALTF4Close = () => {
    this.setState({ openAltF4: false });
  };
  // KAZUAV
  handleKAZUAVOpen = () => {
    this.setState({ openKAZUAV: true });
  };
  handleKAZUAVClose = () => {
    this.setState({ openKAZUAV: false });
  };
  // UAVG
  handleUAVGOpen = () => {
    this.setState({ openUAVG: true });
  };
  handleUAVGClose = () => {
    this.setState({ openUAVG: false });
  };
  // UAVSG
  handleUAVSGOpen = () => {
    this.setState({ openUAVSG: true });
  };
  handleUAVSGClose = () => {
    this.setState({ openUAVSG: false });
  };

  componentDidMount() {
    getCerts().then((_certs) => {
      this.setState({ethCertificates:_certs})
    })
  }

  render() {
    const { classes } = this.props;
    const { ethCertificates, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, ethCertificates.length - page * rowsPerPage);
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openAltF4}
          onClose={this.handleALTF4Close}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              AltF4
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              This is the certificate that was issued to AltF4
            </Typography>
            <img className={classes.paperImg} src="/images/certificates/AltF4.png"></img>
          </div>
        </Modal>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openKAZUAV}
          onClose={this.handleKAZUAVClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              KazUAV
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              This is the certificate that was issued to KazUAV
            </Typography>
            <img className={classes.paperImg} src="/images/certificates/KAZUAV.png"></img>
          </div>
        </Modal>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openUAVG}
          onClose={this.handleUAVGClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              UAV Group
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              This is the certificate that was issued to UAV Group
            </Typography>
            <img className={classes.paperImg} src="/images/certificates/UAVG.png"></img>
          </div>
        </Modal>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openUAVSG}
          onClose={this.handleUAVSGClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              UAV Service Group
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              This is the certificate that was issued to UAV Service Group
            </Typography>
            <img className={classes.paperImg} src="/images/certificates/UAVSG.png"></img>
          </div>
        </Modal>
        <Card className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
            <TableRow>
                <TableCell className ={classes.tablecell}>Participant Name</TableCell>
                <TableCell className ={classes.tablecell}>Participant Organisation</TableCell>
                <TableCell className ={classes.tablecell}>Date of Participation</TableCell>
                <TableCell className ={classes.tablecell}>Acceleration Programme Name</TableCell>
                <TableCell className ={classes.tablecell}>View certificate</TableCell>
                <TableCell className ={classes.tablecell}>Verify on Ethereum Blockchain</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
              { ethCertificates.map((cert)=>{
                return <TableRow>
                  <TableCell>
                    {cert.details.participantName}
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    {cert.details.participantOrganisation}
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    {new Date(cert.details.participationDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    {cert.details.programmeName}
                  </TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank"  href={'https://ipfs.io/ipfs/'+cert.ipfsHash}>See certificate</Link></TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank" href={'https://ropsten.etherscan.io/address/'+contracts.StoreHashes.address}>Check here</Link></TableCell>
                </TableRow>
              })}

              {emptyRows > 0 && (
                <TableRow style={{ height: 30 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>

              </TableRow>
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

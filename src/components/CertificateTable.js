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


import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TablePagination from '@material-ui/core/TablePagination';

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
  }
});

// Pagination for the long table: 
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
function createData(handleOpenFn, handleCloseFn, imgSrc, name, date, courseName, ipfsLink, etherScanLink, modalState) {
  console.log(handleCloseFn)
  counter += 1;
  return { 
    id: counter, 
    handleOpenFn,
    handleCloseFn,
    imgSrc,
    name,
    date,
    courseName,
    ipfsLink,
    etherScanLink,
    modalState
  };
}

class CertificateTable extends React.Component {
  state = {
    page: 0,
    rowsPerPage: 5,
    rows: [
      createData(
        () => { this.setState({openYZ: true})}, 
        () => { this.setState({openYZ: false})}, 
        "/images/nyu/certificate_YZ.jpg", 
        "Yalta Zhu", 
        "5/13/2019", 
        "UN-chained: Assessing emerging technologies for social good",
        "https://gateway.ipfs.io/ipfs/QmXYxGk64v8LdKQ51SMaBSC7JX6G4GxV3sTzaA2GPyqGSN",
        "https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F",
        () => {return this.state.openYZ }
      ),
      createData(
        () => { this.setState({openYW: true})}, 
        () => { this.setState({openYW: false})}, 
        "/images/nyu/certificate_YW.jpg", 
        "Yiping Wang", 
        "5/13/2019", 
        "UN-chained: Assessing emerging technologies for social good",
        "https://gateway.ipfs.io/ipfs/QmXLS1qr6oNNa9qX8yfk2tbj6Kh5SeQxRhpv3VXG7EFAXm",
        "https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F",
        () => {return this.state.openYW }
      ),
      createData(
        () => { this.setState({openYTC: true})}, 
        () => { this.setState({openYTC: false})}, 
        "/images/nyu/certificate_YTC.jpg", 
        "Yi-Syuan (Tina) Chen", 
        "5/13/2019", 
        "UN-chained: Assessing emerging technologies for social good",
        "https://gateway.ipfs.io/ipfs/QmSnvprgmVTNC7AthZxHbeaiMLQk2YLmMQz6aBrvjPeHoP",
        "https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F",
        () => {return this.state.openYTC }
      ),
      createData(
        () => { this.setState({openYNC: true})}, 
        () => { this.setState({openYNC: false})}, 
        "/images/nyu/certificate_YNC.jpg", 
        "Yi-Yuan (Nancy) Chiu", 
        "5/13/2019", 
        "UN-chained: Assessing emerging technologies for social good",
        "https://gateway.ipfs.io/ipfs/QmVtwFph6p5DUZLw8T7Ez2PstosZ6BqMX5an2Nhozoys1e",
        "https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F",
        () => {return this.state.openYNC }
      ),
      createData(
        () => { this.setState({openYH: true})}, 
        () => { this.setState({openYH: false})}, 
        "/images/nyu/certificate_YH.jpg", 
        "Yan Huang", 
        "5/13/2019", 
        "UN-chained: Assessing emerging technologies for social good",
        "https://gateway.ipfs.io/ipfs/QmPCkftCbpCXtQt3jhvNXq7vypByQk6hCwWnTAboeUfEJJ",
        "https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F",
        () => {return this.state.openYH }
      ),
      createData(
        () => { this.setState({openMW: true})}, 
        () => { this.setState({openMW: false})}, 
        "/images/nyu/certificate_MW.jpg", 
        "Man-Ping Wu", 
        "5/13/2019", 
        "UN-chained: Assessing emerging technologies for social good",
        "https://gateway.ipfs.io/ipfs/QmYZditUJSc4nCfLkMUbtT6tUJV9y2Ni6tB73Ns27PN5zb",
        "https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F",
        () => {return this.state.openMW }
      ),
      createData(
        () => { this.setState({openMS: true})}, 
        () => { this.setState({openMS: false})}, 
        "/images/nyu/certificate_MS.jpg", 
        "Moeezo Saleem", 
        "5/13/2019", 
        "UN-chained: Assessing emerging technologies for social good",
        "https://gateway.ipfs.io/ipfs/QmWirUiZTrKis7N7VYnX2H5sKXdX4UiPAXD9VEa4A6SRLa",
        "https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F",
        () => {return this.state.openMS }
      ),
      createData(
        () => { this.setState({openMR: true})}, 
        () => { this.setState({openMR: false})}, 
        "/images/nyu/certificate_MR.jpg", 
        "Maria Rojas", 
        "5/13/2019", 
        "UN-chained: Assessing emerging technologies for social good",
        "https://gateway.ipfs.io/ipfs/QmbfdLNZ5tDTRqkZrjhJQgX384pJzwLczoWSCMUFpw4eeF",
        "https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F",
        () => {return this.state.openMR }
      ),
      createData(
        () => { this.setState({openEX: true})}, 
        () => { this.setState({openEX: false})}, 
        "/images/nyu/certificate_EX.jpg", 
        "Evelyn Xu", 
        "5/13/2019", 
        "UN-chained: Assessing emerging technologies for social good",
        "https://gateway.ipfs.io/ipfs/QmbkB6T35eZPf4vUyyaPhve3UsjaDkutQrxHyykyztkfzR",
        "https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F",
        () => {return this.state.openEX }
      ),
      createData(
        () => { this.setState({openBAM: true})}, 
        () => { this.setState({openBAM: false})}, 
        "/images/nyu/certificate_BAM.jpg", 
        "Brittney Atkinson-McFarlane", 
        "5/13/2019", 
        "UN-chained: Assessing emerging technologies for social good",
        "https://gateway.ipfs.io/ipfs/QmfARQPW82suuRcuEdtDrEezXsA4A61zG5Z1DMtK8sXAbB",
        "https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F",
        () => {return this.state.openBAM }
      ),
      createData(
        () => { this.setState({openAS: true})}, 
        () => { this.setState({openAS: false})}, 
        "/images/nyu/certificate_AS.jpg", 
        "Alex Santarelli", 
        "5/13/2019", 
        "UN-chained: Assessing emerging technologies for social good",
        "https://gateway.ipfs.io/ipfs/QmURSXbZ6ijbswLbFoT2UVfYcnq4H4uPu7Pgn5P6zqpuNz",
        "https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F",
        () => {return this.state.openAS }
      ),
      createData(
        () => { this.setState({openAR: true})}, 
        () => { this.setState({openAR: false})}, 
        "/images/nyu/certificate_AR.jpg", 
        "Ahmed Razin", 
        "5/13/2019", 
        "UN-chained: Assessing emerging technologies for social good",
        "https://gateway.ipfs.io/ipfs/QmdGU8x4HgXjSRTWaBPGk5qxCYqG6hhbnmd5QYeJ8Hd7cH",
        "https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F",
        () => {return this.state.openAR }
      ),
      createData(
        () => { this.setState({openAC: true})},
        () => { this.setState({openAC: false})},  
        "/images/nyu/certificate_AC.jpg", 
        "Abhiroop CVK", 
        "5/13/2019", 
        "UN-chained: Assessing emerging technologies for social good",
        "https://gateway.ipfs.io/ipfs/QmSt9KpHBsw8PWTWuofP7GkUYXsuv9rLpH7SJHM37gsPnc",
        "https://etherscan.io/address/0x0824dc3B4ec8c1220763425729fCb42EBdd84c8F",
        () => {return this.state.openAC }
      ),
    ],
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
  handleChangePage = (event, page) => {
    this.setState({ page });
  };
   handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };


  createModals = (rows) => {
    const { classes } = this.props;
    const allModals = [];
    rows.map(row => {
      console.log(row.modalState)
      allModals.push(
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={row.modalState? row.modalState() : null}
        onClose={row.handleCloseFn}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            {row.name}
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
            This is the certificate that was issued to {row.name}
          </Typography>
          <img className={classes.paperImg} src={row.imgSrc}></img>
        </div>
      </Modal>)              
    })
    return allModals
  }

  render() {
    const { classes } = this.props;
    const { rows, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    return (
      <div>
        { this.createModals(rows) }

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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                <TableRow key={row.id}>
                <TableCell>
                  <img onClick={row.handleOpenFn} src={row.imgSrc} alt="" border='1' height='100'></img>
                </TableCell>                                               
                  <TableCell>
                    {row.name}
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    {row.courseName}
                  </TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank"  href={row.ipfsLink}>See certificate</Link></TableCell>
                  <TableCell className={classes.tablecell} ><Link target="_blank" href={row.etherScanLink}>Check here</Link></TableCell>
                </TableRow>
              ))}
                {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}                                                                                                          
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    native: true,
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                />
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

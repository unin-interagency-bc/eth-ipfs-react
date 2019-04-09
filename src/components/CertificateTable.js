import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import web3 from '../utils/web3.js';
import storehashes from '../utils/storehashes.js';


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
  }
});

class CertificateTable extends React.Component {
  state = {
    page: 0,
    rowsPerPage: 5,
    ethCertificates: [],
  };
  componentWillMount = () => {
    this.getCertificatesFromBlockchain()
  }
  getCertificatesFromBlockchain = async () => {
    // const accounts = await web3.eth.getAccounts();
    storehashes.methods._getOwnerCount().call({
            // from: accounts[0]
            // from: process.env.BLOCKCHAIN_CONTRACT_SENDER // Will have to hard code (or from process.env) get the address that we used to deploy certificates
            from: "0x49880bae91e8bc7129a08cfdef089888d6eeb006"
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
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { ethCertificates, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, ethCertificates.length - page * rowsPerPage);

    return (
      <Card className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
            <TableRow>
                <TableCell className ={classes.tablecell}>Company Name</TableCell>
                <TableCell className ={classes.tablecell}>Country</TableCell>
                <TableCell className ={classes.tablecell}>Date of Participation</TableCell>
                <TableCell className ={classes.tablecell}>Certificate on IPFS *</TableCell>
                <TableCell className ={classes.tablecell}>Verify on Ethereum Blockchain</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell  className={classes.tablecell} component="th" scope="row">
                  <Link href={'https://altf4.kz/en'}>AltF4</Link>
                </TableCell>
                <TableCell  className={classes.tablecell} component="th" scope="row">
                  Kazakhstan
                </TableCell>
                <TableCell  className={classes.tablecell} component="th" scope="row">
                  2019-02-28
                </TableCell>
                <TableCell className={classes.tablecell} ><Link href={'https://ipfs.io/ipfs/QmUZ9CvDT7MFNMv62uN21dCyE5gP17iAoAtNC9DH9suuvM'}>See certificate</Link></TableCell>
                <TableCell className={classes.tablecell} ><Link href={'https://etherscan.io/tx/0x237e6df16d365c5f7daafa42a5eb01a811d6d5b569e6b6ee1da8b07685606c70'}>Check here</Link></TableCell>
                </TableRow>              
                <TableRow>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    <Link href={'http://www.kazuav.kz/'}>KazUAV</Link>
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    Kazakhstan
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    2019-02-28
                  </TableCell>
                  <TableCell className={classes.tablecell} ><Link href={'https://ipfs.io/ipfs/QmZ4Yydxq1WP5esBkkfuHj1tQCJLUcYP4Pixu9GQ1eo2K8'}>See certificate</Link></TableCell>
                  <TableCell className={classes.tablecell} ><Link href={'https://etherscan.io/tx/0x9ac08c54aca2ed3fe81535d59148e350dd64fcaeef1e295098ec1a01e7d33d2d'}>Check here</Link></TableCell>
                </TableRow>                
                <TableRow>
                <TableCell  className={classes.tablecell} component="th" scope="row">
                  {/* <Link href={'http://www.flyworx.kz/'}>UAV Group</Link> */}
                  UAV Group
                </TableCell>
                <TableCell  className={classes.tablecell} component="th" scope="row">
                  Kazakhstan
                </TableCell>
                <TableCell  className={classes.tablecell} component="th" scope="row">
                  2019-02-28
                </TableCell>
                <TableCell className={classes.tablecell} ><Link href={'https://ipfs.io/ipfs/QmZ48Gn1a4pd3zNs5xnRyFpMgFM3JunaCc4MxSrJr7ap5t'}>See certificate</Link></TableCell>
                <TableCell className={classes.tablecell} ><Link href={'https://etherscan.io/tx/0xa940969d6fb5f599f14be07c74e18afb3e847936166cc247a90864d6d419309e'}>Check here</Link></TableCell>
              </TableRow>
              
              <TableRow>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    <Link href={'http://uavsg.kz/'}>UAV Service Group</Link>
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    Kazakhstan
                  </TableCell>
                  <TableCell  className={classes.tablecell} component="th" scope="row">
                    2019-02-28
                  </TableCell>
                  <TableCell className={classes.tablecell} ><Link href={'https://ipfs.io/ipfs/QmR1k6TB1HAC73C4BdUWvPbE34z5K6e35X83XYjyj7sgds'}>See certificate</Link></TableCell>
                  <TableCell className={classes.tablecell} ><Link href={'https://etherscan.io/tx/0x7cb786eb02e55fb3026e73326900b8088f764d463a024773435f7be838b5e9cd'}>Check here</Link></TableCell>
                </TableRow>

              {emptyRows > 0 && (
                <TableRow style={{ height: 30 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                {/* <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={ethCertificates.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    native: true,
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                /> */}
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Card>
    );
  }
}

CertificateTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CertificateTable);
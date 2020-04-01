// This file has the table for the UNIN Blockchain Course that took place in October 2019
import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';


import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TablePagination from '@material-ui/core/TablePagination';

import { ModalsForTables } from './ModalsForTables'

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

const styles = theme => ({
    root: {
      width: '100%',
    },
    table: {
      minWidth: "300",
    },
    tableWrapper: {
      overflowX: 'auto',
    },
    tablecell: {
      fontSize: '10pt'
    },
    paper: {
      position: 'absolute',
      outline: 'none',
      width:'50%',
      backgroundColor: 'white',
      boxShadow:'black'
    },
    paperImg: {
      width:'50%',
    }
  })

export const UNINCourseTable = () => {
    const classes = styles
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    let [open1, setOpen1] = React.useState(false)
    const [open2, setOpen2] = React.useState(false)
    const [open3, setOpen3] = React.useState(false)
    const [open4, setOpen4] = React.useState(false)
    const [open5, setOpen5] = React.useState(false)
    const [open6, setOpen6] = React.useState(false)
    const [open7, setOpen7] = React.useState(false)
    const [open8, setOpen8] = React.useState(false)
    const [open9, setOpen9] = React.useState(false)
    const [open10, setOpen10] = React.useState(false)
    const [open11, setOpen11] = React.useState(false)
    const [open12, setOpen12] = React.useState(false)
    const [modals, setModals] = React.useState([])
    const [rows] = React.useState(
        [
            createData(
              () => setOpen1(true),
              () => { setOpen1(false)}, 
              "/images/unin-10-2019/Antonia-1.png", 
              "Antonia Charlemagne-Marshall", 
              "11/19/2019", 
              "UN Innovation Network's Blockchain Learning Course",
              "https://gateway.ipfs.io/ipfs/QmfSbnBFsHUihCeQpE3nRUM7iTYBWAf9okCKFsAFcqx1Kz",
              "",
              open1
            ),
            createData(
              () => setOpen2(true), 
              () => setOpen2(false), 
              "/images/unin-10-2019/Anu-1.png", 
              "Anu Girija Senan", 
              "11/19/2019", 
              "UN Innovation Network's Blockchain Learning Course",
              "https://gateway.ipfs.io/ipfs/QmVWo92YooZgE9UEShSA3Wz2ydKnkVuwyBf1APQMB1F3nE",
              "",
              open2 
            ),
            createData(
                () => setOpen3(true), 
                () => setOpen3(false), 
              "/images/unin-10-2019/Elena-1.png", 
              "Elena Flocos", 
              "11/19/2019", 
              "UN Innovation Network's Blockchain Learning Course",
              "https://gateway.ipfs.io/ipfs/QmTeDX7mY7y7t14JR4XYGsMLa4pcu1Yfhc3Ze7Hxi7YHDA",
              "",
              open3
            ),
            createData(
                () => setOpen4(true), 
                () => setOpen4(false), 
              "/images/unin-10-2019/Eric-1.png", 
              "Eric Rodriguez", 
              "11/19/2019", 
              "UN Innovation Network's Blockchain Learning Course",
              "https://gateway.ipfs.io/ipfs/QmSKuXzsjquRzN2TAra89id8YquBCygYu126doveRe8F7e",
              "",
              open4
            ),
            createData(
                () => setOpen5(true), 
                () => setOpen5(false), 
              "/images/unin-10-2019/Erica-1.png", 
              "Erica Choi", 
              "11/19/2019", 
              "UN Innovation Network's Blockchain Learning Course",
              "https://gateway.ipfs.io/ipfs/QmXjbP9aKp4qHqU3MRh7nNXRXAuskQquCJWrFkpSmWxyzu",
              "",
              open5
            ),
            createData(
                () => setOpen6(true), 
                () => setOpen6(false), 
              "/images/unin-10-2019/Juan-1.png", 
              "Juan Manuel Merlos Tevar", 
              "11/19/2019", 
              "UN Innovation Network's Blockchain Learning Course",
              "https://gateway.ipfs.io/ipfs/QmY8HjFoVstoJcEk1MLefSvAaM1f17aGRYXHntLoGnwj9o",
              "",
              open6
            ),
            createData(
                () => setOpen7(true), 
                () => setOpen7(false), 
              "/images/unin-10-2019/Manish-1.png", 
              "Manish Swar", 
              "11/19/2019", 
              "UN Innovation Network's Blockchain Learning Course",
              "https://gateway.ipfs.io/ipfs/QmRnfjwo1mUNFRnvCmb575UjpHyhemdHnQASMwjtpuT12S",
              "",
              open7
            ),
            createData(
                () => setOpen8(true), 
                () => setOpen8(false), 
              "/images/unin-10-2019/Marcin-1.png", 
              "Marcin Pawlowski", 
              "11/19/2019", 
              "UN Innovation Network's Blockchain Learning Course",
              "https://gateway.ipfs.io/ipfs/QmRBUVyBWGRkrjZ2RYnJUjkrkEWYyL9uh9d44srbhrh6Nc",
              "",
              open8
            ),
            createData(
                () => setOpen9(true), 
                () => setOpen9(false), 
              "/images/unin-10-2019/Prashant-1.png", 
              "Prashant Menon", 
              "11/19/2019", 
              "UN Innovation Network's Blockchain Learning Course",
              "https://gateway.ipfs.io/ipfs/Qmdo9hfQ6Lq7UJSqZphtqEps9xZczE4kzuLKUHwKfngQFy",
              "",
              open9
            ),
            createData(
                () => setOpen10(true), 
                () => setOpen10(false), 
              "/images/unin-10-2019/Rodolfo-1.png", 
              "Rodolfo Mascarenas", 
              "11/19/2019", 
              "UN Innovation Network's Blockchain Learning Course",
              "https://gateway.ipfs.io/ipfs/QmUxTR78ixu2J2Ufhb9ZRP1VAYMvHDZBJ2Wrv35bqxPEhK",
              "",
              open10
            ),
            createData(
                () => setOpen11(true), 
                () => setOpen11(false), 
              "/images/unin-10-2019/Tejopriya-1.png", 
              "Tejopriya Pamarthi", 
              "11/19/2019", 
              "UN Innovation Network's Blockchain Learning Course",
              "https://gateway.ipfs.io/ipfs/QmdYZLbayeDtYqvVcm6SBXz26vqN8kM1PnsHVgsBfCEHBG",
              "",
              open11
            ),
            createData(
                () => setOpen12(true), 
                () => setOpen12(false), 
              "/images/unin-10-2019/Tom-1.png", 
              "Tom Buelens", 
              "11/19/2019", 
              "UN Innovation Network's Blockchain Learning Course",
              "https://gateway.ipfs.io/ipfs/QmTUHjw6YevzYQVaEeH8B13UZPG9EYtyyayZsrRfkeu3Wc",
              "",
              open12
            ),
          ]
    )
    React.useEffect(() => {
      createModals(rows)
    },[open1])
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    const handleChangePage = (page) => {
        setPage(page)
    }
    const handleChangeRowsPerPage = event => {
        setPage(0)
        setRowsPerPage(event.target.value)
    }
    const createModals = (rows) => {
      setModals(<ModalsForTables rows={rows}/>)
    }
    
    return(
        <React.Fragment>
            {modals}
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
                        <img onClick={() => row.handleOpenFn} src={row.imgSrc} alt="" border='1' height='100'></img>
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
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActionsWrapped}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </React.Fragment>
    )
}
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from '../actions/ContactActions';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TablePagination,
    Paper, Checkbox,
    FormControlLabel,
    Switch,
    IconButton
} from '@material-ui/core';
import DataTableHead from './DataTableHead';
import DataTableToolbar from './DataTableToolbar';
import { deleteContacts } from '../actions/ContactActions';
import { NavLink } from 'react-router-dom';
import Loader from './Loader';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}



const useStyles = makeStyles((theme) => ({
    root: {

        margin: "3em"
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

const DataTable = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('fname');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        dispatch(fetchAllContacts())
    }, [dispatch])

    const { loading, allContacts } = useSelector((state) =>
        state.fetchallcontact
    )

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = allContacts.map((n) => n._id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {

        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const onHandleDelete = (id) => {
        const blogsdata = allContacts.findIndex((data) => data._id === id)
        allContacts.splice(blogsdata, 1);
        dispatch(deleteContacts(id))
    }
    const onHandleEdit = () => {

    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };
    const isSelected = (name) => selected.indexOf(name) !== -1;


    const emptyRows = rowsPerPage - Math.min(rowsPerPage, allContacts.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            {
                loading ?
                    <Loader />
                    :
                    <Paper className={classes.paper} elevation={0}>
                        <DataTableToolbar numSelected={selected.length} />
                        <TableContainer>
                            <Table

                                className={classes.table}
                                aria-labelledby="tableTitle"
                                size={dense ? 'small' : 'medium'}
                                aria-label="enhanced table"
                            >
                                <DataTableHead
                                    classes={classes}
                                    numSelected={selected.length}
                                    order={order}
                                    orderBy={orderBy}
                                    onSelectAllClick={handleSelectAllClick}
                                    onRequestSort={handleRequestSort}
                                    rowCount={allContacts.length}
                                />
                                <TableBody>
                                    {stableSort(allContacts, getComparator(order, orderBy))
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, index) => {
                                            const isItemSelected = isSelected(row._id);
                                            const labelId = `enhanced-table-checkbox-${index}`;

                                            return (
                                                <TableRow
                                                    hover
                                                    role="checkbox"
                                                    aria-checked={isItemSelected}
                                                    tabIndex={-1}
                                                    key={Math.random()}
                                                    selected={isItemSelected}
                                                >
                                                    <TableCell padding="checkbox">
                                                        <Checkbox
                                                            onClick={(event) => handleClick(event, row._id)}
                                                            checked={isItemSelected}
                                                            inputProps={{ 'aria-labelledby': labelId }}
                                                        />
                                                    </TableCell>
                                                    <TableCell component="th" id={labelId} scope="row" padding="none">{row._id}</TableCell>
                                                    <TableCell align="right">
                                                        {row.fname}
                                                    </TableCell>
                                                    <TableCell align="right">{row.lname}</TableCell>
                                                    <TableCell align="right">{row.email}</TableCell>
                                                    <TableCell align="right">{row.number}</TableCell>
                                                    <TableCell align="right">{row.message}</TableCell>
                                                    <TableCell align="right">
                                                        <IconButton onClick={(e) => { onHandleDelete(row._id) }}>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <NavLink
                                                            to={`/editContact/${row._id}`}
                                                            state={{
                                                                fname: row.fname,
                                                                lname: row.lname,
                                                                email: row.email,
                                                                number: row.number,
                                                                message: row.message
                                                            }}>
                                                            <IconButton >
                                                                <EditIcon />
                                                            </IconButton>
                                                        </NavLink>

                                                    </TableCell>

                                                </TableRow>
                                            );
                                        })}
                                    {emptyRows > 0 && (
                                        <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={allContacts.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
            }

            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense"
            />
        </div >
    );
}
export default DataTable;
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const rows = [
    {
        "Id": "1",
        "Name": "Deepak",
        "Age": "22",
        "Course": "BCA",
        "Batch": "2021",
    },

    {
        "Id": "2",
        "Name": "Vinay",
        "Age": "20",
        "Course": "Mining",
        "Batch": "2011"
    },

    {
        "Id": "3",
        "Name": "Shubham",
        "Age": "24",
        "Course": "CSE",
        "Batch": "2021"
    },

    {
        "Id": "4",
        "Name": "Vikash",
        "Age": "19",
        "Course": "CSE",
        "Batch": "2022"
    },

    {
        "Id": "5",
        "Name": "Balram",
        "Age": "30",
        "Course": "ITI",
        "Batch": "2017"
    },

    {
        "Id": "6",
        "Name": "rAM",
        "Age": "19",
        "Course": "CSE",
        "Batch": "2022"
    },

    {
        "Id": "7",
        "Name": "Vikas",
        "Age": "19",
        "Course": "CSE",
        "Batch": "2022"
    },
];


export default function BasicTable() {
    return (
        <div>
            <div className='studentHeading'>
                <h1>Student Details</h1>
                <button className="addStudent">Add new student</button>
            </div>

            <div className='table'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWIdth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right" className="tableHead">Age</TableCell>
                                <TableCell align="right" className="tableHead">Course</TableCell>
                                <TableCell align="right" className="tableHead">Batch</TableCell>
                                <TableCell align="right" className="tableHead">Change</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.Id}
                                >
                                    <TableCell component="th" scope="row">{row.Name}</TableCell>
                                    {/* <TableCell align="right">{row.Name}</TableCell> */}
                                    <TableCell align="right">{row.Age}</TableCell>
                                    <TableCell align="right">{row.Course}</TableCell>
                                    <TableCell align="right">{row.Batch}</TableCell>
                                    <TableCell align="right"><Link to="">Edit</Link></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
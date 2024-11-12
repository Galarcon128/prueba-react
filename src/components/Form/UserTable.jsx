import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

export default function UserTable({userData = {}}) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre del Cliente</TableCell>
                        <TableCell>Fecha Folio</TableCell>
                        <TableCell>Folio SAC</TableCell>
                        <TableCell>Folio MV</TableCell>
                        <TableCell>Registrado</TableCell>
                        <TableCell>&nbsp;</TableCell>
                        <TableCell>&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell>{userData?.name}</TableCell>
                        <TableCell>{userData?.folioDate}</TableCell>
                        <TableCell>{userData?.folioSAC}</TableCell>
                        <TableCell>{userData?.folioMV}</TableCell>
                        <TableCell>{userData?.register ? 'yes' : 'no'}</TableCell>
                        <TableCell><Button>Options</Button></TableCell>
                        <TableCell><Button>Details</Button></TableCell>

                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}


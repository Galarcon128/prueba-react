import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useWindowWidth from '../MobileDetect';


export default function UserTable({ userData = {} }) {
    const isMobile = useWindowWidth()
    if (isMobile) {
        return <MobilView userData={userData} />
    }
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
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

function MobilView({ userData }) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Nombre del Cliente
                </Typography>
                <Typography variant="h5" component="div">
                    {userData?.name}
                </Typography>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Fecha Folio
                </Typography>
                <Typography variant="body" component="div">
                    {userData?.folioDate}
                </Typography>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Folio SAC
                </Typography>
                <Typography variant="body" component="div">
                    {userData?.folioSAC}
                </Typography>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Folio MV
                </Typography>
                <Typography variant="body" component="div">
                    {userData?.folioMV}
                </Typography>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Registrado
                </Typography>
                <Typography variant="body" component="div">
                {userData?.register ? 'yes' : 'no'}
                </Typography>
                <div>
                    <Button>Options</Button><Button>Details</Button>
                </div>
            </CardContent>
        </Card>
    );
}
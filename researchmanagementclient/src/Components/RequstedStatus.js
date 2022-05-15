import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Card } from "@mui/material";
import "@fontsource/roboto";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, ),
    createData('Ice cream sandwich', 237, 9.0, 37,),
    createData('Eclair', 262, 16.0, 24, ),
    createData('Cupcake', 305, 3.7, 67, ),
    createData('Gingerbread', 356, 16.0, 49, ),
  ];
function RequstedStatus() {
  return (
    <div>
    <h1 style={{ textAlign: "center" }}> Requsted Status</h1>

    <Card
      style={{
        width: "800px",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "50px",
        backgroundColor: "FFF1EF",
      }}
    >
      <Box
        style={{ marginLeft: "20px", paddingTop: "50px" }}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h1 style={{ fontFamily: "Roboto", textAlign: "center" }}>
          <b> </b>
        </h1>
        <div>
          <label>Group ID</label>
          <br></br>
        
         
        </div>
      
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </Card>
    
  </div>
  )
}

export default RequstedStatus
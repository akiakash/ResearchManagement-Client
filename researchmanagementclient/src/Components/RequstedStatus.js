import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Card } from "@mui/material";
import "@fontsource/roboto";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData("dhanu", 1, 1, 1),
//   createData("dhanu", 1, 1, 1),
//   createData("dhanu", 1, 1, 1),
//   createData("dhanu", 1, 1, 1),
//   createData("dhanu", 1, 1, 1),
// ];
function RequstedStatus() {
  const [requests, setRequest] = useState([]);

  const getRequest = () => {
    axios
      .get(`http://localhost:3000/Request`)
      .then((res) => {
        // console.log(res.data);
        setRequest(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRequest();
  }, [requests]);

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
          <div></div>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Research Area </StyledTableCell>
                  <StyledTableCell align="right">Document</StyledTableCell>
                  <StyledTableCell align="right">
                    Supervisor Name
                  </StyledTableCell>
                  <StyledTableCell align="right">Response </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {requests.map((item) => (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      {item.researcharea}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.document}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.supervisorname}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.response}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>
    </div>
  );
}

export default RequstedStatus;

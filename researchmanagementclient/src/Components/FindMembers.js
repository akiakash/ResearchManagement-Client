import React from "react";
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

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("it20051648", "dhanu", "danu@gmail.com", 1562562),
  createData("it20051648", "dhanu", "danu@gmail.com", 1562562),
  createData("it20051648", "dhanu", "danu@gmail.com", 1562562),
];
function FindMembers() {
  return (
    <div>
      <h1 style={{ fontFamily: "Roboto", textAlign: "center" }}>
        <b>Requested To Find Your Collegue</b>
      </h1>
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
            <b>Fill This Form </b>
          </h1>
          <h2
            style={{
              textAlign: "center",
              marginLeft: "10%",
              marginRight: "10%",
              fontSize: "20px",
              marginTop: "30px",
              fontFamily: "Roboto",
              lineHeight: "30px",
            }}
          >
            {" "}
            First, let's create your account. Once your account has been created
            you can choose the billing plan that is right for you and link your
            account with a server provider.
          </h2>
          <div>
            <label>Student ID</label>
            <br></br>
            <TextField
              id="outlined-error"
              label="Enter Student ID"
              // defaultValue="Hello World"
              style={{ backgroundColor: "white", width: "750px" }}
            />
            <br></br>
            <label>Student Name</label>
            <br></br>
            <TextField
              id="outlined-error-helper-text"
              label="Enter Student Name"
              // defaultValue="Hello World"
              // helperText="Incorrect entry."
              style={{ backgroundColor: "white", width: "750px" }}
            />
          </div>
          <div>
            <label>Email </label>
            <br></br>
            <TextField
              id="outlined-error-helper-text"
              label="Enter Email"
              // defaultValue="Hello World"
              // helperText="Incorrect entry."
              style={{ backgroundColor: "white", width: "750px" }}
            />
            <br></br>
            <label>Phone Number [Student]</label>
            <br></br>
            <TextField
              id="outlined-error-helper-text"
              label="Enter Phone Number"
              // defaultValue="Hello World"
              // helperText="Incorrect entry."
              style={{ backgroundColor: "white", width: "750px" }}
            />
            <br></br>
            <label>specialization [SE/IT/DS]</label>
            <br></br>
            <TextField
              id="outlined-error-helper-text"
              label="Enter specialization"
              // defaultValue="Hello World"
              // helperText="Incorrect entry."
              style={{ backgroundColor: "white", width: "750px" }}
            />
          </div>
          <div>
            <input
              type="checkbox"
              name="nameOfChoice"
              value="1"
              style={{ marginLeft: "200px", marginTop: "20px" }}
            />{" "}
            i Agree to the Terms of Services and Privacy Policy
          </div>

          <Button variant="contained">Sent Request</Button>
        </Box>
      </Card>
      <br></br>
      <br></br>
      <h1 style={{ fontFamily: "Roboto", textAlign: "center" }}>
        <b>Requested Student List</b>
      </h1>

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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Student ID </StyledTableCell>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">Email&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">Phone&nbsp;</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
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

export default FindMembers;

import React, { useState, useEffect } from "react";
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

const rows = [
  createData("Grb123", "IT20051648", 90, "A"),
  createData("Grb123", "IT20051648", 90, "A"),
  createData("Grb123", "IT20051648", 90, "A"),
  createData("Grb123", "IT20051648", 90, "A"),
  createData("Grb123", "IT20051648", 90, "A"),
];

function ViewMarks() {
  const [marks, setMarks] = useState([]);
  const getRequest = () => {
    axios.get(`http://localhost:3000/MarksManagement`).then((res) => {
      setMarks(res.data);
    });
  };

  useEffect(() => {
    getRequest();
  }, [marks]);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Student Marks</h1>
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
            <Box
              component="img"
              sx={{
                height: 500,
                width: 500,
                maxHeight: { xs: 200, md: 150 },
                maxWidth: { xs: 200, md: 150 },
              }}
              alt="image"
              src="./round.png"
            />
            <br></br>
            <label>Group ID</label>
            <label>xxxxxxx</label>
            <br></br>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Group ID </StyledTableCell>
                  <StyledTableCell align="right">Student ID</StyledTableCell>
                  <StyledTableCell align="right">Marks&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">Grade&nbsp;</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {marks.map((item) => (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      {item.groupid}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.studentid}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {" "}
                      {item.marks}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.grade}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div>
            <br></br>
          </div>
        </Box>
      </Card>
    </div>
  );
}

export default ViewMarks;

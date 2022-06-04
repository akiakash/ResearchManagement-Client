import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Button, Card } from "@mui/material";
import "@fontsource/roboto";
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

const rows = [createData("dhanu", 1, 1, 1)];

function VivaSchedules() {
  const [schedule, setSchedule] = useState([]);

  const getRequest = () => {
    axios.get(`http://localhost:3000/ScheduleManagement`).then((res) => {
      setSchedule(res.data);
    });
  };

  useEffect(() => {
    getRequest();
  }, [schedule]);
  return (
    <div>
      <Card
        style={{
          width: "800px",
          height: "600px",
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: "50px",
          backgroundColor: "FFF1EF",
        }}
      >
        <Box
          style={{ marginLeft: "20px", paddingTop: "50px" }}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <h1
            style={{
              fontFamily: "Roboto",
              textAlign: "center",
              fontSize: "30px",
            }}
          >
            <b>View Viva Schedules </b>
          </h1>

          <br></br>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Group ID </StyledTableCell>
                  <StyledTableCell align="right">Date</StyledTableCell>
                  <StyledTableCell align="right">Time</StyledTableCell>
                  <StyledTableCell align="right">
                    allocated Pannel
                  </StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {schedule.map((item) => (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      {item.groupid}
                    </StyledTableCell>
                    <StyledTableCell align="right">{item.date}</StyledTableCell>
                    <StyledTableCell align="right">{item.time}</StyledTableCell>
                    <StyledTableCell align="right">
                      {item.allocatedpanel}
                    </StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
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

export default VivaSchedules;

import React, { useState } from "react";
import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";

function MarksManagement() {
  const [groupid, setGroupid] = useState("");
  const [studentid, setStudentid] = useState("");
  const [marks, setMarks] = useState("");
  const [grade, setGrade] = useState("");

  function addmarks() {
    axios
      .post(`http://localhost:3000/MarksManagement`, {
        groupid: groupid,
        studentid: studentid,
        marks: marks,
        grade: grade,
      })
      .then((res) => {
        alert("sucessfull added");
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error.data);
      });
  }
  return (
    <div>
      <Card
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "5%",
          height: "400px",
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          style={{ marginLeft: "15%", marginTop: "2%" }}
        >
          <h1 style={{ marginBottom: "15px" }}> Add Marks</h1>
          <div>
            <TextField
              label="First Name"
              onChange={(e) => setGroupid(e.target.value)}
            />
            <TextField
              label="Last Name"
              onChange={(e) => setStudentid(e.target.value)}
            />

            <TextField
              label="Department"
              onChange={(e) => setMarks(e.target.value)}
            />
            <TextField
              label="Qualification"
              onChange={(e) => setGrade(e.target.value)}
            />
          </div>

          <Button
            variant="contained"
            onClick={addmarks}
            style={{ marginLeft: "38%", marginTop: "40px" }}
          >
            Submit
          </Button>
        </Box>
      </Card>
    </div>
  );
}

export default MarksManagement;

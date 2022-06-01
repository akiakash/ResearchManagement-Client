import React, { useState } from "react";
import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";

function StudentManagement() {
  const [studentName, setName] = useState("");
  const [studentId, setStudentid] = useState("");
  const [nic, setNic] = useState("");
  const [phone, setPhone] = useState("");
  const [specialization, setSpecialization] = useState("");

  function addStudent() {
    axios
      .post(`http://localhost:3000/StudentManagement`, {
        studentId: studentId,
        studentName: studentName,
        nic: nic,
        phone: phone,
        specialization: specialization,
      })
      .then((res) => {
        console.log(res.data);
        alert("sucessfull added");
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
        <a href="/viewstudents">
          <Button
            variant="contained"
            style={{ marginLeft: "85%", marginTop: "3%" }}
          >
            View Student
          </Button>{" "}
        </a>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          style={{ marginLeft: "15%", marginTop: "2%" }}
        >
          <h1 style={{ marginBottom: "15px" }}> Add Student</h1>
          <div>
            <TextField
              label=" Full Name"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Student ID"
              onChange={(e) => setStudentid(e.target.value)}
            />
            <TextField label="NIC" onChange={(e) => setNic(e.target.value)} />

            <TextField
              label="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              label="Specialization"
              onChange={(e) => setSpecialization(e.target.value)}
            />
          </div>

          <Button
            variant="contained"
            onClick={addStudent}
            style={{ marginLeft: "38%", marginTop: "40px" }}
          >
            Submit
          </Button>
        </Box>
      </Card>
    </div>
  );
}

export default StudentManagement;

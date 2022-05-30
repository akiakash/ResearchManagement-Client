import React, { useState } from "react";
import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";

function StaffManagement() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [department, setDepartment] = useState("");
  const [qualification, setQualification] = useState("");
  const [researcharea, setResearcharea] = useState("");
  const [type, setType] = useState("");

  function addstaff() {
    axios
      .post(`http://localhost:3000/StaffManagement`, {
        firstname: firstname,
        lastname: lastname,
        department: department,
        qualification: qualification,
        researcharea: researcharea,
        type: type,
      })
      .then((res) => {
        alert("succesfully added");
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
          <h1 style={{ marginBottom: "15px" }}> Add Staffs</h1>
          <div>
            <TextField
              label="First Name"
              onChange={(e) => setFirstname(e.target.value)}
            />
            <TextField
              label="Last Name"
              onChange={(e) => setLastname(e.target.value)}
            />

            <TextField
              label="Department"
              onChange={(e) => setDepartment(e.target.value)}
            />
            <TextField
              label="Qualification"
              onChange={(e) => setQualification(e.target.value)}
            />

            <TextField
              label="Research Area"
              onChange={(e) => setResearcharea(e.target.value)}
            />
            <TextField label="Type" onChange={(e) => setType(e.target.value)} />
          </div>

          <Button
            variant="contained"
            onClick={addstaff}
            style={{ marginLeft: "38%", marginTop: "40px" }}
          >
            Submit
          </Button>
        </Box>
      </Card>
    </div>
  );
}

export default StaffManagement;

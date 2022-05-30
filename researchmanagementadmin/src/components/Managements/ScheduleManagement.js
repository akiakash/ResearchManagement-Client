import React, { useState } from "react";
import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";

function ScheduleManagement() {
  const [groupid, setGroupid] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [allocatedpanel, setAllocatedpanel] = useState("");

  function addschedule() {
    axios
      .post(`http://localhost:3000/ScheduleManagement`, {
        groupid: groupid,
        date: date,
        time: time,
        allocatedpanel: allocatedpanel,
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
        <h1 style={{ marginBottom: "15px" }}> Add Schedule</h1>
        <div>
          <TextField
            label="Group ID"
            onChange={(e) => setGroupid(e.target.value)}
          />
          <TextField label="Date" onChange={(e) => setDate(e.target.value)} />
          <TextField label="Time" onChange={(e) => setTime(e.target.value)} />
          <TextField
            label="Allocate Panel"
            onChange={(e) => setAllocatedpanel(e.target.value)}
          />
        </div>

        <Button
          variant="contained"
          onClick={addschedule}
          style={{ marginLeft: "38%", marginTop: "40px" }}
        >
          Submit
        </Button>
      </Box>
    </Card>
  );
}

export default ScheduleManagement;

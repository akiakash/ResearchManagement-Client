import React, { useState } from "react";
import "@fontsource/roboto";

import TextField from "@mui/material/TextField";
import { Button, Card } from "@mui/material";
import "@fontsource/roboto";
import Box from "@mui/material/Box";
import axios from "axios";

function RegisterTopic() {
  const [groupno, setGroupno] = useState("");
  const [topicname, setTopicname] = useState("");
  const [description, setDescription] = useState("");
  const [leaderid, setLeaderid] = useState("");
  function topicregister() {
    axios
      .post(`http://localhost:3000/TopicManagement`, {
        groupno: groupno,
        topicname: topicname,
        description: description,
        leaderid: leaderid,
      })
      .then((response) => {
        alert("successfully registered");
        window.location(true);
        console.log(response.data);
      })
      .catch((err) => {
        alert("successfully registered");
        console.log(err.data);
      });
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Register Your Topic</h1>
      <h2
        style={{
          textAlign: "center",
          marginLeft: "10%",
          marginRight: "10%",
          fontSize: "20px",
          marginTop: "30px",
          fontFamily: "Roboto",
          lineHeight: "50px",
        }}
      >
 First We have to register to the account by giving up the essential details of students .{" "}
      </h2>
      <div>
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
            <h1 style={{ fontFamily: "Roboto", textAlign: "center",fontSize:"30px" }}>
              <b>Fill This Form </b>
            </h1>
            <h2
              style={{
                textAlign: "center",
                marginLeft: "10%",
                marginRight: "10%",
                fontSize: "20px",
                marginTop: "25px",
                fontFamily: "Roboto",
                lineHeight: "30px",
              }}
            >
              {" "}
             Fill this form to request to Register your topic
            </h2>
            <div>
              <label>Group Number</label>
              <br></br>
              <TextField
                id="outlined-error"
                label="Enter the Group ID"
                // defaultValue="Hello World"
                style={{ backgroundColor: "white", width: "750px" }}
                onChange={(e) => setGroupno(e.target.value)}
              />
              <br></br>
              <label>Topic Name</label>
              <br></br>
              <TextField
                id="outlined-error-helper-text"
                label="Enter The Name"
                // defaultValue="Hello World"
                // helperText="Incorrect entry."
                style={{ backgroundColor: "white", width: "750px" }}
                onChange={(e) => setTopicname(e.target.value)}
              />
            </div>
            <div>
              <label>Description </label>
              <br></br>
              <TextField
                id="outlined-error-helper-text"
                label="Enter Your Group Description"
                // defaultValue="Hello World"
                // helperText="Incorrect entry."
                style={{ backgroundColor: "white", width: "750px" }}
                onChange={(e) => setDescription(e.target.value)}
              />
              <br></br>
              <label>Leader ID</label>
              <br></br>
              <TextField
                id="outlined-error-helper-text"
                label="Enter Your Registration ID"
                // defaultValue="Hello World"
                // helperText="Incorrect entry."
                style={{ backgroundColor: "white", width: "750px" }}
                onChange={(e) => setLeaderid(e.target.value)}
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
            <center>
              <Button
                type="button"
                variant="contained"
                onClick={(e) => topicregister(e)}
              >
                Submit
              </Button>
            </center>
          </Box>
        </Card>
      </div>
    </div>
  );
}

export default RegisterTopic;

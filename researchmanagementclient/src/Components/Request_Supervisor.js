import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Card } from "@mui/material";
import "@fontsource/roboto";
// import { ReactDOM } from 'react-dom';
import App from "../App";
import axios from "axios";

function Request_Supervisor() {
  const [researcharea, setResearcharea] = useState("");
  const [supervisorname, setSupervisorname] = useState("");
  const [cosupervisorname, setCosupervisorname] = useState("");
  const [groupid, setGroupid] = useState("");
  const [document, setDocument] = useState("");
  const [response, setResponse] = useState("Processing");

  function sendRequest() {
    axios
      .post("http://localhost:3000/Request/", {
        researcharea: researcharea,
        supervisorname: supervisorname,
        cosupervisorname: cosupervisorname,
        groupid: groupid,
        document: document,
        response: response,
      })
      .then((response) => {
        alert("successfully added");
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        alert("something wrong...");
      });
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Find Your Supervisor & Co-Supervisor
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
            {/*  */}
          </h2>
          <div>
            <label>Research Area</label>
            <br></br>
            <TextField
              id="outlined-error"
              label="Select area"
              value={researcharea}
              style={{ backgroundColor: "white", width: "750px" }}
              onChange={(e) => setResearcharea(e.target.value)}
            />
            <br></br>
            <label>Supervisor Name </label>
            <br></br>
            <TextField
              id="outlined-error-helper-text"
              label="Select The Name"
              value={supervisorname}
              style={{ backgroundColor: "white", width: "750px" }}
              onChange={(e) => setSupervisorname(e.target.value)}
            />
          </div>

          <label>Co - Supervisor Name </label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Select Name"
            value={cosupervisorname}
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setCosupervisorname(e.target.value)}
          />
          <br></br>
          <label>Group ID </label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Select Name "
            value={groupid}
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setGroupid(e.target.value)}
          />
          <br></br>

          <label>Upload Research Overview </label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Upload pdf"
            value={document}
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setDocument(e.target.value)}
          />
          <br></br>

          <Box textAlign="center">
            <Button
              style={{ backgroundColor: "#FF715B" }}
              variant="contained"
              onClick={(e) => sendRequest(e)}
              type="button"
            >
              Send Request
            </Button>
          </Box>
        </Box>
      </Card>
    </div>
  );
}
// ReactDOM.render(<App />, document.querySelector("#root"));
export default Request_Supervisor;

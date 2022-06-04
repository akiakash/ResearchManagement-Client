import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Card } from "@mui/material";
import "@fontsource/roboto";
import axios from "axios";

function EditRegistedTopic() {
  const [groupno, setGroupno] = useState("");
  const [topicname, setTopicname] = useState("");
  const [description, setDescription] = useState("");
  const [leaderid, setLeaderid] = useState("");
  const [topic, setTopic] = useState([]);

  const id = window.sessionStorage.getItem("TopicID");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/TopicManagement/${id}`)
      .then((response) => {
        //   console.log(response.data);
        setGroupno(response.data.groupno);
        setTopicname(response.data.topicname);
        setDescription(response.data.description);
        setLeaderid(response.data.leaderid);
        setTopic(response.data);
        console.log(response.data);
      });
  }, []);

  function updateTopic() {
    axios
      .patch(`http://localhost:3000/TopicManagement/${id}`, {
        groupno: groupno,
        topicname: topicname,
        description: description,
        leaderid: leaderid,
      })
      .then((response) => {
        setLoading(false);

        // window.location.reload();
        window.location.reload(true);
      })
      .catch((error) => {
        setLoading(false);
        alert("Sorry, Something Error...");
      });
  }

  return (
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
          <b>Fill This Form To Update</b>
        </h1>

        <div>
          <label>Group ID</label>
          <br></br>
          <TextField
            id="outlined-error"
            label="Enter the Group ID"
            defaultValue={topic.groupno}
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
            defaultValue={topic.topicname}
            onChange={(e) => setTopicname(e.target.value)}
          />
        </div>
        <div>
          <label>Topic Description </label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Group Description"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            defaultValue={topic.description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br></br>
          <label>Student Registration ID</label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Registration ID"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            defaultValue={topic.leaderid}
            onChange={(e) => setLeaderid(e.target.value)}
          />
        </div>
        <Button variant="contained" type="button" onClick={updateTopic}>
          Update
        </Button>
      </Box>
    </Card>
  );
}

export default EditRegistedTopic;

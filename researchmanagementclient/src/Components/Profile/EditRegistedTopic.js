import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Card } from "@mui/material";
import "@fontsource/roboto";

function EditRegistedTopic() {
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
          // defaultValue="Hello World"
          style={{ backgroundColor: "white", width: "750px" }}
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
        />
      </div>
      <div>
        <label>Topic Description </label>
        <br></br>
        <TextField
          id="outlined-error-helper-text"
          label="Enter Your Group Description"
          // defaultValue="Hello World"
          // helperText="Incorrect entry."
          style={{ backgroundColor: "white", width: "750px" }}
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
        />
      </div>
      <Button variant="contained">Update</Button>
    </Box>
  </Card>
  )
}

export default EditRegistedTopic
import React from 'react'
import TextField from "@mui/material/TextField";
import { Button, Card } from "@mui/material";
import "@fontsource/roboto";
import Box from "@mui/material/Box";
import "@fontsource/roboto";


function EditTopicManagement() {
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
        <h1 style={{ fontFamily: "Roboto", textAlign: "center" ,fontSize: "20px"}}>
          <b>Fill This Form For Update Deatails</b>
        </h1>
       <br></br>
        <div>
          <label>Student Name - 1</label>
          <br></br>
          <TextField
            id="outlined-error"
            label="Enter the Group ID"
            // defaultValue="Hello World"
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setStudentname1(e.target.value)}
          />
          <br></br>
          <label>Student ID</label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter The Name"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setStudentid1(e.target.value)}
          />
        </div>
        <div>
          <label>Specialization </label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Group Description"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setSpecialization1(e.target.value)}
          />
          <br></br>
          <label>Student Name - 2</label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Registration ID"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setStudentnam2(e.target.value)}
          />
        </div>
        <div>
          <label>Student ID </label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Group Description"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setStudentid2(e.target.value)}
          />
          <br></br>
          <label>Specialization</label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Registration ID"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setSpecialization2(e.target.value)}
          />
        </div>
        <div>
          <label>Student Name - 3 </label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Group Description"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setStudentname3(e.target.value)}
          />
          <br></br>
          <label>Student ID</label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Registration ID"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setStudentid3(e.target.value)}
          />
        </div>
        <div>
          <label>Specialization </label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Group Description"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setSpecialization3(e.target.value)}
          />
          <br></br>
          <label>Student Name - 4</label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Registration ID"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setStudentname4(e.target.value)}
          />
        </div>
        <div>
          <label>Student ID </label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Group Description"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setStudentid4(e.target.value)}
          />
          <br></br>
          <label>Specialization</label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Registration ID"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setSpecialization4(e.target.value)}
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
            type="submit"
            variant="contained"
            onClick={(e) => registerteam}
          >
            Update
          </Button>
        </center>
      </Box>
    </Card>
  )
}

export default EditTopicManagement
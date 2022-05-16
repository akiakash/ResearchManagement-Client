import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Card } from "@mui/material";
import "@fontsource/roboto";
// import { ReactDOM } from 'react-dom';
import App from '../App';


function Request_Supervisor() {

  return (
    
    <div >
       <h1 style={{ textAlign: "center" }}>Find Your Supervisor & Co-Supervisor</h1>
      
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
            
            style={{ backgroundColor: "white", width: "750px" }}
          />
          <br></br>
          <label>Supervisor Name </label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Select The Name"
            
            style={{ backgroundColor: "white", width: "750px" }}
          />
        </div>
        <div>
          <label>Co - Supervisor Name  </label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Select Name"
            
            style={{ backgroundColor: "white", width: "750px" }}
          />
          <br></br>
          <label>Group ID </label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Select Name "
           
            style={{ backgroundColor: "white", width: "750px" }}
            />
            <br></br>
            
          <label>Upload Research Overview </label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Upload pdf"
            
            style={{ backgroundColor: "white", width: "750px" }}
          />
        </div>
        {/* <div>
          <input
            type="checkbox"
            name="nameOfChoice"
            value="1"
            style={{ marginLeft: "200px", marginTop: "20px" }}
          />{" "}
          i Agree to the Terms of Services and Privacy Policy
        </div> */}

       <Box textAlign='center'>
            <Button style={{ backgroundColor:'#FF715B'}} variant='contained'>
               Send Request
  </Button>
</Box>
      </Box>
    </Card>



    </div>
  )
}
// ReactDOM.render(<App />, document.querySelector("#root"));
export default Request_Supervisor

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Card } from "@mui/material";
import "@fontsource/roboto";

export default function ValidationTextFields() {
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
          {" "}
          First, let's create your account. Once your account has been created
          you can choose the billing plan that is right for you and link your
          account with a server provider.
        </h2>
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
        <div>
          <input
            type="checkbox"
            name="nameOfChoice"
            value="1"
            style={{ marginLeft: "200px", marginTop: "20px" }}
          />{" "}
          i Agree to the Terms of Services and Privacy Policy
        </div>

        <Button variant="contained">Contained</Button>
      </Box>
    </Card>
  );
}

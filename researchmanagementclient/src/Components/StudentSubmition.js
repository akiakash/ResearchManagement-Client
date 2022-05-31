import React from "react";
import Box from "@mui/material/Box";
import { Button, Card } from "@mui/material";
import "@fontsource/roboto";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import UploadFileIcon from "@mui/icons-material/UploadFile";

function StudentSubmition() {
  const [Area, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      {" "}
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
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <h1 style={{ fontFamily: "Roboto", textAlign: "center" }}>
            <b>Student Submition</b>
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
            Submit your file Here
          </h2>

          <h3
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
          </h3>

          <div>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Area</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Area}
                  label="Select Area"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <br></br>
          </div>

          <Box
            justifyContent="center"
            sx={{
              display: "flex", flexGrow: 1,
              textAlign: "center",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 300,
                height: 130,
              },
            }}
          >
            <Paper elevation={2}>
              <Typography variant="body2" color="textPrimary" component="span">
                Due Date <br></br> 2Days 12 hours Remains{" "}
              </Typography>
            </Paper>
          </Box>
        </Box>
        <br></br>
        <div >
        

          <Box
          justifyContent="center"
            sx={{
              display: "flex",
              flexGrow: 1
              ,
              textAlign: "center",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 500,
                height: 290,
              },
            }}
          >
            <Paper elevation={2}>
             <div> <UploadFileIcon  /></div>

              <Typography variant="body2" color="textPrimary" component="span">
                Drop Your Files Here{" "}
              </Typography>
              <br>
              </br>
              <Button
                style={{
                  borderRadius: 30,
                  backgroundColor: "#FF715B",
                  padding: "5px 20px",
                  fontSize: "15px",
                }}
                variant="contained"
              >
                Submit
              </Button>
            </Paper>
          </Box>
        </div>
      </Card>
    </div>
  );
}

export default StudentSubmition;

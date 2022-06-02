import React from "react";
import Profile from "./Profile";
import Box from "@mui/material/Box";
import { Button, Card } from "@mui/material";
import "@fontsource/roboto";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
function SubmissionManagement() {
  return (
    <div>
      <div>
        <Profile />
      </div>
      <div>
      {" "}
      <Card
        style={{
          width: "800px",
          height:"600px",
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
          <h1 style={{ fontFamily: "Roboto", textAlign: "center",fontSize:"30px" }}>
            <b>Student Submitions </b>
          </h1>

          <br></br>
          <Card sx={{ maxWidth: 330, display: "inline-block" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="./wordimage.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 MAD SUBMITION
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 It20051648 Dhanushan R
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <CardActions>
                <a href="/SubmitionManagement">
                  <Button
                    style={{
                      borderRadius: 30,
                      backgroundColor: "#0000FF.",
                      padding: "5px 25px",
                      fontSize: "15px",
                    }}
                    variant="contained"
                  >
                    Edit
                  </Button>
                </a>
                <Button
                  style={{
                    borderRadius: 30,
                    backgroundColor: "#FF0000",
                    padding: "5px 25px",
                    fontSize: "15px",
                  }}
                  variant="contained"
                >
                  Delete
                </Button>
              </CardActions>
              <Button
                style={{
                  borderRadius: 30,
                  backgroundColor: "#FF715B",
                  padding: "5px 20px",
                  fontSize: "15px",
                }}
                variant="contained"
              >
                Download
              </Button>
            </CardActions>
          </Card>
       
        </Box>
      </Card>
    </div>
    </div>
  );
}

export default SubmissionManagement;

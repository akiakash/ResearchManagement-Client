import React from "react";
import Profile from "./Profile";

import Box from "@mui/material/Box";
import { Button, Card } from "@mui/material";
import "@fontsource/roboto";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

function MemberManagement() {
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
            height: "600px",
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
            <br></br>
            <Card
              sx={{ maxWidth: 500, maxHeight: 500, display: "inline-block" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="170"
                  image="./team.jpeg"
                  alt="green iguana"
                />

                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Team Deatails
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This Deatails are Team Registed for project team selection
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    Group ID -
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    Group Name -
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    Group Description -
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a href="/editTopic">
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
            </Card>
          </Box>
        </Card>
      </div>
    </div>
  );
}

export default MemberManagement;

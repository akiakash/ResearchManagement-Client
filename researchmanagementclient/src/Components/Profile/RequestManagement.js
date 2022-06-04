import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import Box from "@mui/material/Box";
import { Button, Card } from "@mui/material";
import "@fontsource/roboto";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import axios from "axios";

function RequestManagement() {
  const [requests, setRequest] = useState([]);

  const getRequest = () => {
    axios.get(`http://localhost:3000/request`).then((res) => {
      setRequest(res.data);
    });
  };

  useEffect(() => {
    getRequest();
  }, [requests]);

  function deleteRequest(_id) {
    alert("Are you confirm to delete?");
    fetch(`http://localhost:3000/request/${_id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json();
      alert("Your Date Successfully Deleted...!");
    });
  }

  return (
    <div>
      <div>
        <Profile />
        <div>
          {" "}
          <Card
            style={{
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
              {requests.map((item) => (
                <Card
                  sx={{
                    maxWidth: 500,
                    maxHeight: 500,
                    display: "inline-block",
                  }}
                  style={{ marginLeft: "8%", marginBottom: "3%" }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="170"
                      image="./req.png"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Research Area
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This Deatails are Request for managing Deatails
                      </Typography>
                      <Typography gutterBottom variant="h7" component="div">
                        Research Area - {item.researcharea}
                      </Typography>
                      <Typography gutterBottom variant="h7" component="div">
                        Group ID -{item.groupid}
                      </Typography>
                      <Typography gutterBottom variant="h7" component="div">
                        Supervisor Name - {item.supervisorname}
                      </Typography>
                      <Typography gutterBottom variant="h7" component="div">
                        Request Status - {item.response}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      style={{
                        borderRadius: 30,
                        backgroundColor: "#FF0000",
                        padding: "5px 25px",
                        fontSize: "15px",
                      }}
                      variant="contained"
                      onClick={(e) => deleteRequest(item._id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Box>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default RequestManagement;

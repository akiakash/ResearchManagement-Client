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

function TopicManagement() {
  const [topic, setTopic] = useState([]);
  const getRequest = () => {
    axios.get(`http://localhost:3000/TopicManagement`).then((res) => {
      setTopic(res.data);
    });
  };

  useEffect(() => {
    getRequest();
  }, [topic]);

  function deleteTopic(_id) {
    alert("Are you confirm to delete?");
    fetch(`http://localhost:3000/TopicManagement/${_id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json();
      alert("Your Date Successfully Deleted...!");
    });
  }

  function editTopic(_id) {
    console.log("Topic" + _id);
    window.sessionStorage.setItem("TopicID", _id);
    window.location("/editTopic");
    console.log(_id);
  }

  return (
    <div>
      <div>
        <Profile />
      </div>

      <div class="row">
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
              {topic.map((item) => (
                <Card
                  sx={{
                    maxWidth: 500,
                    maxHeight: 500,
                  }}
                  style={{
                    display: "inline-block",
                    marginLeft: "5%",
                    marginTop: "5%",
                    marginBottom: "2%",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="170"
                      image="./topic.jpeg"
                      alt="green iguana"
                    />

                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Registed Topic Deatails
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This Deatails are student Registed for project topic
                        selection
                      </Typography>
                      <Typography gutterBottom variant="h7" component="div">
                        Group ID - {item.groupno}
                      </Typography>
                      <Typography gutterBottom variant="h7" component="div">
                        Topic Name - {item.topicname}
                      </Typography>
                      <Typography gutterBottom variant="h7" component="div">
                        Topic Description - {item.description}
                      </Typography>
                      <Typography gutterBottom variant="h7" component="div">
                        Student Registration ID - {item.leaderid}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <a href="/editTopic">
                      <Button
                        onClick={(e) => editTopic(item._id)}
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
                      onClick={(e) => deleteTopic(item._id)}
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
              ))}
            </Box>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default TopicManagement;

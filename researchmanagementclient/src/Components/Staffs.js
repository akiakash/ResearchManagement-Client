import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function Staffs() {
  const [staffs, setStaffs] = useState([]);

  const getRequest = () => {
    axios.get(`http://localhost:3000/StaffManagement`).then((res) => {
      setStaffs(res.data);
    });
  };

  useEffect(() => {
    getRequest();
  }, [staffs]);

  return (
    <div>
      {staffs.map((item) => (
        <div
          style={{ display: "inline-block", marginTop: "3%", marginLeft: "2%" }}
        >
          <Card sx={{ minWidth: 275 }} variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                First Name - {item.firstname}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Last Name - {item.lastname}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Department - {item.department}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Qualification - {item.qualification}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Chat</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Staffs;

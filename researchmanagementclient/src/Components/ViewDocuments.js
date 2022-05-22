import React from 'react'
import Box from "@mui/material/Box";
import { Button, Card } from "@mui/material";
import "@fontsource/roboto";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { display } from '@mui/system';

function ViewDocuments() {
  return (
    <div>    <Card
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
        <b>Student Documentations </b>
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
        you can download this documents
        
      </h2>
      <br></br>
      <Card sx={{ maxWidth: 330 ,display:'inline-block' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./wordimage.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Marking Scheam
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button
    style={{
        borderRadius: 30,
        backgroundColor: "#FF715B",
        padding: "5px 20px",
        fontSize: "15px"
    }}
    variant="contained"
    >
    Download
</Button>
      </CardActions>
    </Card>


    0px 
    <Card sx={{ maxWidth: 330 ,display:'inline-block'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./wordimage.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Marking Scheam
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button
    style={{
        borderRadius: 30,
        backgroundColor: "#FF715B",
        padding: "5px 20px",
        fontSize: "15px"
    }}
    variant="contained"
    >
    Download
</Button>
      </CardActions>
    </Card>
     
    </Box>
  </Card></div>
  )
}

export default ViewDocuments
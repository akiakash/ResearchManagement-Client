import React from "react";
import "@fontsource/poppins";
import "@fontsource/roboto";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

function Home2() {
  return (
    <div>
      <center>
        <img src="./Line1.png" style={{ marginTop: "50px" }}></img>
      </center>
      <h1
        style={{
          fontFamily: "Poppins",
          textAlign: "center",
          paddingTop: "30px",
        }}
      >
        Instant Team Chat
      </h1>

      <h2
        style={{
          textAlign: "center",
          fontSize: "20px",
          marginTop: "20px",
          marginLeft: "80px",
          marginRight: "80px",
          lineHeight: "50px",
          fontFamily: "Roboto",
        }}
      >
        Online chat may refer to any kind of communication over the Internet
        that offers a real-time<br></br> transmission of text messages from
        sender to receiver. Chat messages are generally short in order to
        <br></br> enable other participants to respond quickly. Thereby, a
        feeling similar to a spoken conversation is <br></br>created, which
        distinguishes chatting from other text-based online communication forms
        such as <br></br> Internet forums and email. Online chat may address
        point-to-point communications as well as multicast communications{" "}
      </h2>
      <Grid container justify="center">
        <Button
          variant="outlined"
          style={{
            borderRadius: "20px",
            textAlign: "center",
            backgroundColor: "#f29080",
            width: "200px",
            color: "black",
            border: "transparent",
          }}
        >
          Learn More
        </Button>
      </Grid>
    </div>
  );
}

export default Home2;

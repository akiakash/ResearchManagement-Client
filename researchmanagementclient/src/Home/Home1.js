import { Container } from "@material-ui/core";
import React from "react";

import { Row, Col } from "react-bootstrap";
import Footer from "../Bars/Footer";
import "@fontsource/poppins";
import { Button } from "@material-ui/core";
import Home2 from "./Home2";

function Home1() {
  return (
    <div style={{ backgroundColor: "#FF715B " }}>
      <Container style={{ height: "800px" }}>
        <Row>
          <Col>
            <h1
              style={{
                fontSize: "100px",
                fontFamily: "Poppins",

                paddingTop: "200px",
                color: "white",
              }}
            >
              Find your best Path
            </h1>
            <h2
              style={{
                fontSize: "25px",
                color: "white",
                paddingBottom: "20px",
              }}
            >
              {" "}
              Connecting learning to innovative outcomes
            </h2>
            <Button variant="outlined" style={{ borderRadius: "20px" }}>
              Login
            </Button>
            <Button
              variant="outlined"
              style={{ marginLeft: "30px", borderRadius: "20px" }}
            >
              Find Groups
            </Button>
          </Col>
          <Col xs lg="4" style={{ marginTop: "100px" }}>
            <img src="./image1.png"></img>
          </Col>
          <Col xs lg="2" style={{ marginTop: "300px" }}>
            <img src="./image1.png"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home1;

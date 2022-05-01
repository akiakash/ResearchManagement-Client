import React from "react";
import { Row, Col } from "react-bootstrap";
import "@fontsource/poppins";
import { Button } from "@material-ui/core";

function Home4() {
  return (
    <div
      style={{
        marginBottom: "50PX",
        backgroundColor: "#FF715B",
        height: "700px",
      }}
    >
      <Row>
        <Col>
          <img
            src="./Home4.png"
            style={{
              height: "500px",
              width: "600px",

              marginTop: "150px",
            }}
          ></img>
        </Col>
        <Col>
          <h1
            style={{
              fontFamily: "Poppins",
              marginTop: "130px",
              fontSize: "80px",
            }}
          >
            Perfect Plateform <br></br>for Reserch<br></br> Purpose
          </h1>
          <div style={{ marginTop: "40px" }}>
            <Button variant="outlined" style={{ borderRadius: "20px" }}>
              Search
            </Button>
            <Button
              variant="outlined"
              style={{ borderRadius: "20px", marginLeft: "30px" }}
            >
              Find Groups
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home4;

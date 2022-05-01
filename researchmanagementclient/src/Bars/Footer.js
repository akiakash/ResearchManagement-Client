import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      {/* <h1 style={{ color: "green", textAlign: "center", marginTop: "-50px" }}>
        GeeksforGeeks: A Computer Science Portal for Geeks
      </h1> */}
      <Container>
        <Row>
          <Column>
            <Heading>
              <img src="./EDUvation.png"></img>{" "}
            </Heading>
            <FooterLink href="#">
              Connecting learning to innovative outcomes
            </FooterLink>
          </Column>
          <Column style={{ marginLeft: "40px" }}>
            <Heading>Help</Heading>
            <FooterLink href="#">Support</FooterLink>
            <FooterLink href="#">Knowladge base</FooterLink>
            <FooterLink href="#">Tutorials</FooterLink>
          </Column>
          <Column style={{ marginLeft: "40px" }}>
            <Heading>Features</Heading>
            <FooterLink href="#">Find Group</FooterLink>
            <FooterLink href="#">Find supervisor</FooterLink>
            <FooterLink href="#">Get Feedbacks</FooterLink>
            <FooterLink href="#">User Management</FooterLink>
          </Column>
          <Column style={{ marginLeft: "40px" }}>
            <Heading>Company</Heading>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Researchs</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </Column>
          <Column style={{ marginLeft: "40px" }}>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">info@malabesliit.com</FooterLink>
            <FooterLink href="#">+94779299587</FooterLink>
            <FooterLink href="#">New kandy Road malabe, Srilanka</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;

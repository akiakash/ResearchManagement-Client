import styled from "styled-components";
import "@fontsource/poppins";

export const Box = styled.div`
  background: white;

  bottom: 0;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 200px;

  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 15px;
  color: black;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  color: black;
  font-family: Poppins;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  margin-top: 20px;
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
  color: black;
  font-family: Poppins;
`;

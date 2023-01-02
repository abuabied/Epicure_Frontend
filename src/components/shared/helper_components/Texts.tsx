import { Typography } from "@mui/material";
import styled from "styled-components";

const containerTitleStyle = {
  display: "block",
  maxHeight: "content",
  fontSize: { xs: "18px", sm: "30px" },
  fontWeight: "200",
  lineHeight: { xs: "24px", sm: "35px" },
  letterSpacing: "1.25px",
  textAlign: { sm: "left", md: "center" },
  textTransform: "uppercase",
};

const pageTitleStyle = {
  display: "block",
  marginTop: "3.5rem",
  marginLeft: "1.5rem",
  fontSize: "20px",
  fontWeight: "200",
  lineHeight: "21px",
  letterSpacing: "2px",
  textAlign: "left",
  textTransform: "uppercase",
  "@media(min-width: 769px)": { display: "none" },
};
export const NoStyleTextArea = styled.p``

export const MyTextArea = styled.p`
  margin: 0;
  padding: 0;
  padding-top: 0.4rem;
  margin-left: 4%;
  margin-right: 1rem;
  font-size: 18px;
  font-weight: 200;
  line-height: 22px;
  letter-spacing: 1.9199999570846558px;
  text-align: left;
  cursor: pointer;
   &.logo {
    padding-top: 0%;
    margin-left: 6%;
    font-size: 27px;
    font-weight: 200;
    line-height: 33px;
    letter-spacing: 1.350000023841858px;
    text-align: left;
  }
`;

export const ContainerTitle = (args: { title: string }) => {
  return (
    <Typography component="div" sx={containerTitleStyle}>
      {args.title}
    </Typography>
  );
};

export const PageTitle = (args: { title: string }) => {
  return (
    <Typography component="div" sx={pageTitleStyle}>
      {args.title}
    </Typography>
  );
};

export const HeroText = styled.p`
    font-size: 25px;
    font-height: 200;
    line-height: 32px;
    letter-spacing: 2px;
    text-align: center;
    align-items: center;
    width: 100%;
    margin: 0;
    padding-left: 0;
    padding-right:0;
    margin-bottom: 1rem;
    @media(min-width: 600px){
      font-size: 32px;
      line-height: 40px;
      width: 100%;
    }
    @media(min-width: 800px){
      font-size: 32px;
      line-height: 40px;
      width: 90%;
    }
    @media(min-width: 1000px){
      font-size: 32px;
      line-height: 40px;
      width: 70%;
    }
    @media(min-width: 1200px){
      font-size: 32px;
      line-height: 40px;
      width: 60%;
    }
`;
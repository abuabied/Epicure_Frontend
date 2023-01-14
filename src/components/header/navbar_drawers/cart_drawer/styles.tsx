import { Typography } from "@mui/material";
import styled from "styled-components";
import {
  RowContainer,
  StyledSeperator,
} from "../../../shared/helper_components/MyContainers";

export const MyTextArea = styled.textarea`
  height: 100px;
  border: 1;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 200;
  font-size: 12px;
  line-height: 15px;
  resize: none;
  letter-spacing: 1.29px;
  padding: 0.5rem;
`;

export const mainTextStyle = {
  fontWeight: 400,
  fontSize: { xs: "20px", sm: "24px", md: "28px", lg: "32px" },
  lineHeight: "109%",
  textAlign: "center",
  letterSpacing: "1.25px",
  textTransform: "uppercase",
  marginTop: "1rem",
  marginBottom: "1rem",
};
export const restaurantNameStyle = {
  fontWeight: 200,
  fontSize: "18px",
  lineHeight: "111%",
  textAlign: "center",
  letterSpacing: "1.97px",
  marginBottom: "1rem",
};
export const addCommentStyle = {
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "18px",
  textAlign: "center",
  letterSpacing: "1.97px",
  marginTop: "1rem",
  marginBottom: "1rem",
};

export const totalStyle = {
  fontWeight: 400,
  fontSize: "24px",
  lineHeight: "125%",
  textAlign: "center",
  letterSpacing: "1.03px",
};

export const cardDishQuantityStyle = {
  fontWeight: 400,
  fontSize: { xs: "14px" },
  lineHeight: { xs: "26px" },
  textAlign: "center",
  letterSpacing: "2.7px",
};
export const cardDishNameStyle = {
  fontWeight: 400,
  fontSize: { xs: "18px", md: "20px" },
  lineHeight: { xs: "26px", md: "20px" },
  textAlign: "center",
  letterSpacing: { xs: "2.7px", md: "2px" },
  marginTop: "5px",
};
export const cardDishExtrasStyle = {
  fontWeight: 200,
  fontSize: { xs: "12px", md: "14px" },
  lineHeight: "20px",
  textAlign: "left",
  letterSpacing: "1.2px",
};

export const TotalPrice = (props: { price: number }) => {
  return (
    <RowContainer style={{alignItems:"center"}}>
      <StyledSeperator />
      <Typography sx={totalStyle}>
        <span>&#8362;</span>
        {props.price}
      </Typography>
      <StyledSeperator />
    </RowContainer>
  );
};

export const cardStyle = {
  width: "100%",
  height: "fit-content",
  minHeight: "100px",
  minWidth: "100px",
  backgroundColor: "#F9F4EA",
  display: "flex",
  flexDirection: "row",
  marginBottom: "10px",
};

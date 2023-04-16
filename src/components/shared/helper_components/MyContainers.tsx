import { Typography } from "@mui/material";
import styled from "styled-components";

export const NoStyleContainer = styled.div``;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  max-width: 100%;
  @media (min-width: 768px) {
    margin: 3rem;
  }
  @media (min-width: 1000px) {
    margin: 5rem;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RestaurantsColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  max-width: 100%;
  @media (min-width: 768px) {
    margin: 3rem;
  }
  @media (min-width: 1000px) {
    margin: 5rem;
  }
`;

export const StyledSeperator = styled.hr`
  width: 126.5px;
  height: 0px;

  border: 0.5px solid #979797;

  flex: none;
  order: 0;
  flex-grow: 1;
`;

const seperatorTextStyle = {
  margin: 0,
  padding: 0,
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "18px",
  /* identical to box height, or 129% */

  textAlign: "center",
  letterSpacing: "1.97px",

  color: "#979797",
};
export const StyledSeperatorWithText = (props: { text: String }) => {
  return (
    <RowContainer style={{paddingTop:"1.5rem", paddingBottom:"1.5rem"}}>
      <StyledSeperator />
      <Typography sx={seperatorTextStyle}>{props.text}</Typography>
      <StyledSeperator />
    </RowContainer>
  );
};

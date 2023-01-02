import { Tabs, Tab, Drawer, Box } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { EmptyLine } from "../../shared/helper_components/EmptyLines";
import { NoStyleContainer } from "../../shared/helper_components/MyContainers";
import { ReactComponent as DownArrow } from "./../../../assets/icons/down_arrow.svg";
import { PriceFilter } from "./bar_drawers/PriceFilter";

export const FilterBar = (args: {
  filterClickFunctions: {
    all: () => void;
    new: () => void;
    mostPopular: () => void;
    openNow: () => void;
  };
}) => {
  const [currentCatagory, setCurrentCatagory] = useState("all");
  const [show, setShow] = useState(true);
  const [dis, setDis] = useState("auto");

  const tabTextStyle = {
    display: "flex",
    flexDirection: "row-reverse",
    color: "black",
    fontSize: "18px",
    fontWeight: 200,
    lineHeight: "22px",
    letterSpacing: "2px",
    textAlign: "center",
    margin: 0,
    padding: "0 1rem",
    minWidth: 0,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#D0CFCF",
    },
  };
  let dis2 = "none";
  const showHide = () => {
    setShow(!show);
    setDis(show ? "auto" : "none");
    console.log(dis);
  };
  return (
    <NoStyleContainer>
      <EmptyLine />

      <NoStyleContainer
        style={{
          maxHeight: "2rem",
          minWidth: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#FAFAFA",
        }}
      >
        <button>Price</button>
        <NoStyleContainer
          style={{
            display: "flex",
            flexDirection: "column",
            height: "fit-content",
          }}
        >
          <button onClick={showHide}>Price</button>

          <Container sx={{ backgroundColor: "red" }}>
            <Box sx={{display:`${dis}`, backgroundColor: "red" , width:"5rem", height:"5rem"}}></Box>
          </Container>
        </NoStyleContainer>

        <button>Price</button>
      </NoStyleContainer>
    </NoStyleContainer>
  );
};

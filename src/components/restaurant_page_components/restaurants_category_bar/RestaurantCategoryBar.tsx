/* eslint-disable react-hooks/exhaustive-deps */
import { Tabs, Tab } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setRestaurantsCategoryTab } from "../../../services/data/restaurants/restaurantsCategoryTabSlicer";
import { NoStyleContainer } from "../../shared/helper_components/MyContainers";

export const RestaurantCategoryBar = () => {
  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = useState("all");

  const clickAll = () => {
    setCurrentCategory("all");
    dispatch(setRestaurantsCategoryTab("all"));
  };
  const clickNew = () => {
    setCurrentCategory("new");
    dispatch(setRestaurantsCategoryTab("new"));
  };
  const clickMostPopular = () => {
    setCurrentCategory("popular");
    dispatch(setRestaurantsCategoryTab("popular"));
  };
  const clickOpenNow = () => {
    setCurrentCategory("open");
    dispatch(setRestaurantsCategoryTab("open"));
  };

  const tabTextStyle = {
    color: "black",
    fontSize: "18px",
    fontWeight: 200,
    lineHeight: "22px",
    letterSpacing: "2px",
    textAlign: "left",
    padding: 0,
    margin: { xs: "0 0.5rem", sm: "0 2rem", md: "0 4rem" },
    minWidth: 0,
    textTransform: "none",
    "&.Mui-selected": {
      color: "#000000",
      fontWeight: "bold",
      fontSize: "19px",
    },
  };

  useEffect(() => {
    clickAll();
  }, []);

  return (
    <NoStyleContainer style={{ width: "100%" }}>
      <Tabs
        value={currentCategory}
        sx={{
          width: "100%",
          "& .MuiTabs-indicator": {
            backgroundColor: "#ffff",
          },
          "& .MuiTabs-flexContainer": {
            justifyContent: "space-around",
          },
        }}
      >
        <Tab sx={tabTextStyle} label="All" value="all" onClick={clickAll} />
        <Tab sx={tabTextStyle} label="New" value="new" onClick={clickNew} />
        <Tab
          sx={tabTextStyle}
          label="Most Popular"
          value="popular"
          onClick={clickMostPopular}
        />
        <Tab
          sx={tabTextStyle}
          label="Open Now"
          value="open"
          onClick={clickOpenNow}
        />
      </Tabs>
    </NoStyleContainer>
  );
};

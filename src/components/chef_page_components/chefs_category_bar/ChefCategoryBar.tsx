import { Tabs, Tab } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setChefsCategoryTab } from "../../../services/data/chefs/chefsCategoryTabSlicer";
import { NoStyleContainer } from "../../shared/helper_components/MyContainers";

export const ChefCategoryBar = () => {
  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = useState("all");

  const clickAll = () => {
    setCurrentCategory("all");
    dispatch(setChefsCategoryTab("all"));
  };
  const clickNew = () => {
    setCurrentCategory("new");
    dispatch(setChefsCategoryTab("new"));
  };
  const clickMostPopular = () => {
    setCurrentCategory("popular");
    dispatch(setChefsCategoryTab("popular"));
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
          label="Most Viewed"
          value="popular"
          onClick={clickMostPopular}
        />
      </Tabs>
    </NoStyleContainer>
  );
};

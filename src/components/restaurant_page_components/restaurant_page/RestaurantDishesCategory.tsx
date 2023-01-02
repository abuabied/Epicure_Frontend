import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDishesCategoryTab } from "../../../services/data/dishes/dishesCategoryTabSlicer";
import { NoStyleContainer } from "../../shared/helper_components/MyContainers";

export const RestaurantDishesCategory = () => {
    const dispatch = useDispatch();
    const [currentCategory, setCurrentCategory] = useState("breakfast");

    const clickBreakfast = () => {
      setCurrentCategory("breakfast");
      dispatch(setDishesCategoryTab("breakfast"));
    };
    const clickLunch = () => {
      setCurrentCategory("lunch");
      dispatch(setDishesCategoryTab("lunch"));
    };
    const clickDinner = () => {
      setCurrentCategory("dinner");
      dispatch(setDishesCategoryTab("dinner"));
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
      },
    };

    useEffect(() => {
      clickBreakfast();
    }, []);
    
    return (
      <NoStyleContainer
        style={{
          minWidth: "100%",
          display: "flex",
          alignContent: "center",
          justifyContent: "space-around",
        }}
      >
        <Tabs
          value={currentCategory}
          centered
          sx={{
            minWidth: { xs: "100%", sm: "70%", md: "60%", lg: "50%" },
            "& .MuiTabs-indicator": {
              backgroundColor: "#DE9200E5",
            },
          }}
        >
          <Tab
            sx={tabTextStyle}
            label="Breakfast"
            value="breakfast"
            onClick={clickBreakfast}
          />
          <Tab
            sx={tabTextStyle}
            label="Lunch"
            value="lunch"
            onClick={clickLunch}
          />
          <Tab
            sx={tabTextStyle}
            label="Dinner"
            value="dinner"
            onClick={clickDinner}
          />
        </Tabs>
      </NoStyleContainer>
    );
}
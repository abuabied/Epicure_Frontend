import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantDishesCategory } from "../../components/restaurant_page_components/restaurant_page/RestaurantDishesCategory";
import { RestaurantDishesContainer } from "../../components/restaurant_page_components/restaurant_page/RestaurantDishesContainer";
import { RestaurantHeroSection } from "../../components/restaurant_page_components/restaurant_page/RestaurantHeroSection";
import { RestaurantPageContainer } from "../../components/restaurant_page_components/restaurant_page/styles";
import { DoubleEmptyLines, EmptyLine } from "../../components/shared/helper_components/EmptyLines";
import { NoStyleContainer } from "../../components/shared/helper_components/MyContainers";
import { Restaurant } from "../../constants/interfaces";
import { EmptyDish, EmptyRestaurant } from "../../constants/myDefaultValues";
import { getRestaurantByName } from "../../services/data_fetch/RestaurantsDataFitch";

export const RestaurantPage = () => {
  let { restaurantName } = useParams();

  const [restaurant, setRestaurant] = useState(EmptyRestaurant);
  const getRestaurant = async (restaurantName: String) => {
    await getRestaurantByName(restaurantName).then((res) => setRestaurant(res));
  };
  useEffect(() => {
    //getRestaurant(restaurantName !== undefined ? restaurantName : "NotFound");
  }, []);

  const textStyle = {
    fontSize: { xs: "20px", sm: "28px", md: "32px" },
    fontWeight: "200",
    lineHeight: { xs: "30px", sm: "40px", md: "50px" },
    letterSpacing: "3px",
    textAlign: "center",
    padding: { xs: "1rem", sm: "4rem", md: "8rem" },
  };

  return (
    <RestaurantPageContainer>
      {restaurantName !== "tr" ? (
        <NoStyleContainer>
          <RestaurantHeroSection
            name={restaurant.name}
            chefName={restaurant.chefName}
            open={restaurant.open}
            img={restaurant.img}
          />
          <EmptyLine />
          <RestaurantDishesCategory />
          <EmptyLine />
          <RestaurantDishesContainer
            dishes={[
              EmptyDish,
              EmptyDish,
              EmptyDish,
              EmptyDish,
              EmptyDish,
              EmptyDish,
              EmptyDish,
              EmptyDish,
              EmptyDish,
              EmptyDish,
              EmptyDish,
              EmptyDish,
              EmptyDish,
              EmptyDish,
              EmptyDish,
              EmptyDish,
              EmptyDish,
              EmptyDish,
              EmptyDish,
              EmptyDish,
            ]}
          />
        </NoStyleContainer>
      ) : (
        <Typography component="div" sx={textStyle}>
          <b>Restaurant not found!</b> Please make sure you enterd the correct restaurant name.<br/>
          -Restaurant name after the last "/"(dash)
        </Typography>
      )}
      <DoubleEmptyLines />
    </RestaurantPageContainer>
  );
};

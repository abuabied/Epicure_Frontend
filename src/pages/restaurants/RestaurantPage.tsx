import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { OrderDishDialog } from "../../components/dishes/order_dish_dialog/OrderDishDialog";
import { RestaurantDishesCategory } from "../../components/restaurant_page_components/restaurant_page/RestaurantDishesCategory";
import { RestaurantDishesContainer } from "../../components/restaurant_page_components/restaurant_page/RestaurantDishesContainer";
import { RestaurantHeroSection } from "../../components/restaurant_page_components/restaurant_page/RestaurantHeroSection";
import { RestaurantPageContainer } from "../../components/restaurant_page_components/restaurant_page/styles";
import {
  DoubleEmptyLines,
  EmptyLine,
} from "../../components/shared/helper_components/EmptyLines";
import { NoStyleContainer } from "../../components/shared/helper_components/MyContainers";
import { Restaurant } from "../../constants/interfaces";
import { EmptyRestaurant } from "../../constants/myDefaultValues";
import { resetCurrentDish } from "../../services/data/dishes/currentDishOrderSlicer";
import { getRestaurantByName } from "../../services/data_fetch/RestaurantsDataFetch";

export const RestaurantPage = () => {
  let { restaurantName } = useParams();
  const dispatch = useDispatch();
  const [restaurant, setRestaurant] = useState<Restaurant>(EmptyRestaurant);
  const getRestaurant = async (restaurantName: String) => {
    await getRestaurantByName(restaurantName).then((res) => {
      if (res)
        if (res.length > 0) setRestaurant(res ? res[0] : EmptyRestaurant);
    });
  };

  const [openDialog, setOpenDialog] = useState(false);
  const openDialogClick = () => {
    setOpenDialog(true);
  };
  const closeDialogClick = () => {
    setOpenDialog(false);
    dispatch(resetCurrentDish());
  };

  useEffect(() => {
    getRestaurant(restaurantName !== undefined ? restaurantName : "NotFound");
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {restaurant.name !== "NotFound" ? (
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
            dishes={restaurant.dishes}
            isRestaurantOpen={restaurant.open}
            handleClickDish={openDialogClick}
          />
        </NoStyleContainer>
      ) : (
        <Typography component="div" sx={textStyle}>
          <b>Restaurant not found!</b> Please make sure you enterd the correct
          restaurant name.
          <br />
          -Restaurant name after the last "/"(dash)
        </Typography>
      )}
      <DoubleEmptyLines />
      <OrderDishDialog handleClose={closeDialogClick} open={openDialog} />
    </RestaurantPageContainer>
  );
};

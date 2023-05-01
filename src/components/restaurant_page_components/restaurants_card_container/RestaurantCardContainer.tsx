import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Restaurant } from "../../../constants/interfaces";
import { EmptyRestaurant } from "../../../constants/myDefaultValues";
import {
  getAllRestaurants,
  getNewRestaurants,
  getOpenRestaurants,
  getPopularRestaurants,
} from "../../../services/data_fetch/RestaurantsDataFetch";
import { SimpleCard } from "../../shared/card/simple_card/SimpleCard";
import { NoStyleContainer } from "../../shared/helper_components/MyContainers";

export const RestaurantCardContainer = () => {
  const restaurantsCategory = useSelector(
    (state: any) => state.restaurantsCategoryTab.value
  );

  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    getAllRestaurants().then((res) => setRestaurantsList(res));
  }, []);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        switch (restaurantsCategory) {
          case "all":
            await getAllRestaurants().then((res) => setRestaurantsList(res));
            break;
          case "new":
            await getNewRestaurants().then((res) => setRestaurantsList(res));
            break;
          case "popular":
            await getPopularRestaurants().then((res) =>
              setRestaurantsList(res)
            );
            break;
          case "open":
            await getOpenRestaurants().then((res) => setRestaurantsList(res));
            break;
          default:
            setRestaurantsList([]);
            break;
        }
      } catch (error) {
        setRestaurantsList([]);
      }
    };
    getRestaurants();
  }, [restaurantsCategory]);

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    margin: "3rem",
    padding: { xs: 0, sm: 0, md: 0, lg: 0 },
    justifyContent: "center",
    flexWrap: "wrap",
  };

  return (
    <NoStyleContainer style={{ display: "flex", justifyContent: "center" }}>
      <Container sx={containerStyle}>
        {restaurantsList.map((restaurant: Restaurant) => (
          <SimpleCard
            restaurant={restaurant ? restaurant : EmptyRestaurant}
            key={`rest-${restaurant?.name}`}
          />
        ))}
      </Container>
    </NoStyleContainer>
  );
};

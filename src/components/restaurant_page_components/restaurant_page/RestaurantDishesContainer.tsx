import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Dish } from "../../../constants/interfaces";
import { filterDishesByCategory } from "../../../helpers/filterFunctions";
import { DetailedCard } from "../../shared/card/detailed_card/DetailedCard";
import { NoStyleContainer } from "../../shared/helper_components/MyContainers";

export const RestaurantDishesContainer = (args: {dishes: Dish[]}) => {
  const dishesCategory = useSelector(
    (state: any) => state.dishesCategoryTab.value
  );

  const [dishesList, setDishesList] = useState<Dish[]>([]);

  const filterDishes = async () => {
    try {
      switch (dishesCategory) {
        case "breakfast":
          setDishesList(filterDishesByCategory(args.dishes, "breakfast"));
          break;
        case "lunch":
          setDishesList(filterDishesByCategory(args.dishes, "lunch"));
          break;
        case "dinner":
          setDishesList(filterDishesByCategory(args.dishes, "dinner"));
          break;
        default:
          setDishesList([]);
          break;
      }
    } catch (error) {
      setDishesList([]);
    }
  };
  
    const containerStyle = {
      display: "flex",
      flexDirection: "row",
      gap: "3rem",
      padding: { xs: 0, sm: 0, md: 0, lg: 0 },
      justifyContent: "center",
      flexWrap: "wrap",
      "::-webkit-scrollbar": { display: "none" },
    };

    useEffect(() => {
      setDishesList(filterDishesByCategory(args.dishes, "breakfast"));
    }, []);

    useEffect(() => {
      filterDishes();
    }, [dishesCategory]);

    return (
      <NoStyleContainer>
        <Container sx={containerStyle}>
          {dishesList.map((dish: Dish) => (
            <DetailedCard
              dish={dish}
              key={`sig-${dish.name}`}
            />
          ))}
        </Container>
      </NoStyleContainer>
    );
}
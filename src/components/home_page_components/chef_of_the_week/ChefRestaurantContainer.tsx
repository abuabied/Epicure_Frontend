import { Typography, Container } from "@mui/material";
import SetWindowSize from "../../../helpers/setWindowSize";
import { RestaurantChefCard } from "./RestaurantChefCard";
import { DoubleEmptyLines } from "../../shared/helper_components/EmptyLines";
import { NoStyleContainer } from "../../shared/helper_components/MyContainers";
import { Chef, Restaurant } from "../../../constants/interfaces";

export const ChefRestaurantsContainer = (args: { chef: Chef }) => {
  const windowSize = SetWindowSize();
  const sliderTitle =
    windowSize < 900 ? "chef of the week" : `${args.chef?.name}'s restaurants:`;
  const textStyle = {
    display: "block",
    maxHeight: "content",
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontSize: { xs: "18px", sm: "30px" },
    fontWeight: "200",
    lineHeight: { xs: "24px", sm: "35px" },
    letterSpacing: "1.25px",
    textAlign: "left",
    textTransform: "uppercase",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    padding: { xs: 0, sm: 0, md: 0, lg: 0 },
    margin: 0,
    justifyContent: "flex-start",
    overflowX: "scroll",
    overflowY: "hidden",
    whiteSpace: { md: "nowrap", lg: "normal" },
    "::-webkit-scrollbar": { display: "none" },
  };

  return (
    <NoStyleContainer>
      <Typography component="div" sx={textStyle}>
        {sliderTitle}
      </Typography>
      <DoubleEmptyLines />
      <Container sx={containerStyle}>
        {args.chef?.restaurants.slice(0, 3).map((restaurant: Restaurant) => (
          <RestaurantChefCard
            restaurant={restaurant}
            key={`rst-${restaurant?.name}`}
          />
        ))}
      </Container>
    </NoStyleContainer>
  );
};

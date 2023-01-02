import { Container } from "@mui/material";
import { Restaurant } from "../../../../constants/interfaces";
import { SimpleCard } from "../../../shared/card/simple_card/SimpleCard";
import { DoubleEmptyLines } from "../../../shared/helper_components/EmptyLines";
import { NoStyleContainer } from "../../../shared/helper_components/MyContainers";
import { ContainerTitle } from "../../../shared/helper_components/Texts";

export const PopularRestaurantContainer = (args: {
  containerTitle: string;
  restaurantList: Restaurant[];
}) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    padding: { xs: 0, sm: 0, md: 0, lg: 0 },
    justifyContent: {
      md: "flex-start",
      lg: "center",
    },
    overflowX: "scroll",
    overflowY: "hidden",
    whiteSpace: { md: "nowrap", lg: "normal" },
    "::-webkit-scrollbar": { display: "none" },
  };

  return (
    <NoStyleContainer>
      <ContainerTitle title={args.containerTitle} />
      <DoubleEmptyLines />
      <Container sx={containerStyle}>
        {args.restaurantList.slice(0, 3).map((restaurant: Restaurant) => (
          <SimpleCard restaurant={restaurant} key={`pop-${restaurant.name}`} />
        ))}
      </Container>
    </NoStyleContainer>
  );
};

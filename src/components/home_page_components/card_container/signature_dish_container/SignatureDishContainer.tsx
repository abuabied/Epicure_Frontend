import { Container } from "@mui/material";
import { useState } from "react";
import { Restaurant } from "../../../../constants/interfaces";
import { OrderDishDialog } from "../../../dishes/order_dish_dialog/OrderDishDialog";
import { DetailedCard } from "../../../shared/card/detailed_card/DetailedCard";
import { DoubleEmptyLines } from "../../../shared/helper_components/EmptyLines";
import { NoStyleContainer } from "../../../shared/helper_components/MyContainers";
import { ContainerTitle } from "../../../shared/helper_components/Texts";

export const SignatureDishContainer = (args: {
  containerTitle: string;
  restaurantList: Restaurant[]
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const openDialogClick = () => {
    setOpenDialog(true);
  };
  const closeDialogClick = () => {
    setOpenDialog(false);
  };
  
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    padding: { xs: 0, sm: 0, md: 0, lg: 0 },
    justifyContent: { md: "flex-start", lg: "center" },
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
          <DetailedCard
            dish={restaurant.signatureDish[0]}
            openOrderDishDialog={openDialogClick}
            key={`sig-${restaurant.name}-${restaurant.signatureDish[0].name}`}
          />
        ))}
      </Container>
      <OrderDishDialog handleClose={closeDialogClick} open={openDialog} />
    </NoStyleContainer>
  );
};

import { ClickAwayListener, Container, Dialog } from "@mui/material";
import { ReactComponent as CloseIcon } from "./../../../assets/icons/X.svg";
import { useState } from "react";
import { Dish } from "../../../constants/interfaces";
import { ColumnContainer } from "../../shared/helper_components/MyContainers";
import { OrderDialogDishInfo } from "./order_dialog_dish_sections/OrderDialogDishInfo";
import { OrderDialogDishOptions } from "./order_dialog_dish_sections/order_dialog_dish_sections/OrderDialogDishOptions";
import { useSelector } from "react-redux";

export const OrderDishDialog = (props: {
  open: boolean;
  handleClose: () => void;
}) => {
  const dish = useSelector((state: any) => state.currentDishOrder.value);

  return (
    <Dialog open={props.open}>
      <Container>
        <CloseIcon
          onClick={props.handleClose}
          cursor={"pointer"}
          display="block"
        />
        <ClickAwayListener onClickAway={props.handleClose}>
          <ColumnContainer>
            <OrderDialogDishInfo dish={dish} />
            <OrderDialogDishOptions />
          </ColumnContainer>
        </ClickAwayListener>
      </Container>
    </Dialog>
  );
};

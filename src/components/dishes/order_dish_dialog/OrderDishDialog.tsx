import { ClickAwayListener, Dialog } from "@mui/material";
import { ReactComponent as CloseIcon } from "./../../../assets/icons/X.svg";
import { useState } from "react";
import { Dish } from "../../../constants/interfaces";
import { ColumnContainer } from "../../shared/helper_components/MyContainers";
import { OrderDialogDishInfo } from "./order_dialog_dish_sections/OrderDialogDishInfo";
import { OrderDialogDishOptions } from "./order_dialog_dish_sections/order_dialog_dish_sections/OrderDialogDishOptions";

export const OrderDishDialog = (args: { dish: Dish }) => {
  const [first, setfirst] = useState(true);
  const ff = () => {
    setfirst(false);
  };
  return (
    <Dialog open={first}>
      <CloseIcon onClick={ff} cursor={"pointer"} />
      <ClickAwayListener onClickAway={ff}>
        <ColumnContainer>
        <OrderDialogDishInfo dish={args.dish} />
        <OrderDialogDishOptions />
        </ColumnContainer>
      </ClickAwayListener>
    </Dialog>
  );
};

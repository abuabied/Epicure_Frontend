import { CardMedia, ClickAwayListener, Dialog } from "@mui/material";
import { ReactComponent as CloseIcon } from "./../../../assets/icons/X.svg";
import { ColumnContainer } from "../../shared/helper_components/MyContainers";
import { OrderDialogDishInfo } from "./order_dialog_dish_sections/OrderDialogDishInfo";
import { OrderDialogDishOptions } from "./order_dialog_dish_sections/order_dialog_dish_sections/OrderDialogDishOptions";
import { useSelector } from "react-redux";
import SetWindowSize from "../../../helpers/setWindowSize";
import { EmptyLine } from "../../shared/helper_components/EmptyLines";
import { StyledButton } from "../../shared/button/StyledButton";
import { toast } from "react-toastify";
import {
  createCookie,
  getCookie,
} from "../../../services/data/cookies/cookieFunctions";

export const OrderDishDialog = (props: {
  open: boolean;
  handleClose: () => void;
}) => {
  const fullScreen = SetWindowSize() <= 501;
  const currentDishOrder = useSelector(
    (state: any) => state.currentDishOrder.value
  );
  const dish = currentDishOrder.dish;

  const addToBagClick = () => {
    try {
      const newItem = {
        dishName: dish.name,
        restaurantName: dish.restaurantName,
        dishImg: dish.img,
        dishSides: currentDishOrder.sides,
        dishChanges: currentDishOrder.changes,
        finalPrice: dish.price * 1,
      };
      const currentItemsJson = getCookie("bagItems");
      let currentItems = [];
      if (currentItemsJson !== "") currentItems = JSON.parse(currentItemsJson);
      currentItems.push(newItem);

      let itemsJson = JSON.stringify(currentItems);
      createCookie("bagItems", itemsJson);
      toast.success("Order added!");
    } catch (error) {
      toast.error("Something went wrong! Please re-order.");
    } finally {
      props.handleClose();
    }
  };

  return (
    <Dialog open={props.open} fullScreen={fullScreen} maxWidth="xs">
      <ColumnContainer>
        <CloseIcon
          onClick={props.handleClose}
          cursor={"pointer"}
          display="block"
          style={{ margin: "1rem" }}
        />
        <ClickAwayListener onClickAway={props.handleClose}>
          <ColumnContainer>
            <CardMedia
              component="img"
              image={require(`./../../../assets/dishes-imgs/${dish.img}`)}
              alt="dish-img"
              sx={{ objectFit: "cover", height: "40vh" }}
            />
            <ColumnContainer
              style={{
                padding: "1.5rem",
              }}
            >
              <OrderDialogDishInfo dish={dish} />
              <EmptyLine />
              <OrderDialogDishOptions />
              <EmptyLine />
              <StyledButton
                buttonText={"add to bag"}
                buttonType="dark"
                onClick={addToBagClick}
              />
            </ColumnContainer>
          </ColumnContainer>
        </ClickAwayListener>
      </ColumnContainer>
    </Dialog>
  );
};

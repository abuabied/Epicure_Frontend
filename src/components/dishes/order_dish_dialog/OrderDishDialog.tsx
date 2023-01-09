import { CardMedia, ClickAwayListener, Dialog } from "@mui/material";
import { ReactComponent as CloseIcon } from "./../../../assets/icons/X.svg";
import { ColumnContainer } from "../../shared/helper_components/MyContainers";
import { OrderDialogDishInfo } from "./order_dialog_dish_sections/OrderDialogDishInfo";
import { OrderDialogDishOptions } from "./order_dialog_dish_sections/order_dialog_dish_sections/OrderDialogDishOptions";
import { useDispatch, useSelector } from "react-redux";
import SetWindowSize from "../../../helpers/setWindowSize";
import { EmptyLine } from "../../shared/helper_components/EmptyLines";
import { StyledButton } from "../../shared/button/StyledButton";
import { toast } from "react-toastify";
import { addDishToOrder } from "../../../services/data/dishes/dishesInOrderSlicer";

export const OrderDishDialog = (props: {
  open: boolean;
  handleClose: () => void;
}) => {
  const fullScreen = SetWindowSize() <= 501;
  const dispatch = useDispatch()

  const currentDishOrder = useSelector(
    (state: any) => state.currentDishOrder.value
  );
  const dish = currentDishOrder.dish;

  const createNewItem = () => {
    return {
      dishName: dish.name,
      restaurantName: dish.restaurantName,
      dishImg: dish.img,
      dishSides: currentDishOrder.sides,
      dishChanges: currentDishOrder.changes,
      finalPrice: dish.price * currentDishOrder.quantity,
    };
  };

  const addToBagClick = () => {
    try {
      const newItem = createNewItem();
      const currentItemsJson = window.localStorage.getItem("bagItems");
      let currentItems = [];
      if (currentItemsJson) currentItems = JSON.parse(currentItemsJson);
      currentItems.push(newItem);
      let itemsJson = JSON.stringify(currentItems);
      window.localStorage.setItem("bagItems", itemsJson);
      dispatch(addDishToOrder(newItem));
      
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

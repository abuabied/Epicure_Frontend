import { CardMedia, ClickAwayListener, Dialog } from "@mui/material";
import { ReactComponent as CloseIcon } from "./../../../assets/icons/X.svg";
import { ColumnContainer } from "../../shared/helper_components/MyContainers";
import { OrderDialogDishInfo } from "./order_dialog_dish_sections/OrderDialogDishInfo";
import { OrderDialogDishOptions } from "./order_dialog_dish_sections/order_dialog_dish_sections/OrderDialogDishOptions";
import { useSelector } from "react-redux";
import SetWindowSize from "../../../helpers/setWindowSize";
import { EmptyLine } from "../../shared/helper_components/EmptyLines";

export const OrderDishDialog = (props: {
  open: boolean;
  handleClose: () => void;
}) => {
  const fullScreen = SetWindowSize() <= 768;
  const dish = useSelector((state: any) => state.currentDishOrder.value);

  return (
    <Dialog open={props.open} fullScreen={fullScreen}>
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
              sx={{ objectFit: "cover", height: "30vh" }}
            />
            <ColumnContainer
              style={{
                padding: "1.5rem",
                paddingLeft: "1.5rem",
              }}
            >
              <OrderDialogDishInfo dish={dish} />
              <EmptyLine />
              <OrderDialogDishOptions />
            </ColumnContainer>
          </ColumnContainer>
        </ClickAwayListener>
      </ColumnContainer>
    </Dialog>
  );
};

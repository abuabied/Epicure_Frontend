import { ClickAwayListener, Drawer } from "@mui/material";
import { useSelector } from "react-redux";
import SetWindowSize from "../../../../helpers/setWindowSize";
import { ColumnContainer } from "../../../shared/helper_components/MyContainers";
import { ReactComponent as EmptyBag } from "./../../../../assets/icons/empty_bag.svg";
import { BagWithItems } from "./BagWithItems";

export const CartDrawer = (props: {
  open: boolean;
  handleClose: () => void;
}) => {
  const place = SetWindowSize() < 600 ? "top" : "right";
  const itemsCount = useSelector((state: any) => state.order.counter);

  return (
    <Drawer
      open={props.open}
      anchor={place}
      PaperProps={{
        sx: {
          display: "flex",
          flexDirection: "column",
          height: "fit-content",
          minHeight: "30%",
          minWidth: { xs: "100%", sm: "55%", md: "45%", lg: "35%" },
          maxWidth: { xs: "100%", sm: "60%", md: "50%", lg: "40%" },
          marginTop: { xs: "40px", sm: "48px" },
          alignItems: "center",
          maxHeight: "90vh",
        },
      }}
      transitionDuration={200}
      hideBackdrop={true}
    >
      <ClickAwayListener onClickAway={props.handleClose}>
        <ColumnContainer style={{ width: "75%", alignItems: "center" }}>
          {itemsCount === 0 ? (
            <ColumnContainer style={{ padding: "20%" }}>
              <EmptyBag />
            </ColumnContainer>
          ) : (
            <BagWithItems />
          )}
        </ColumnContainer>
      </ClickAwayListener>
    </Drawer>
  );
};

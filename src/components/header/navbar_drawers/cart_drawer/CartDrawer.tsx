import { ClickAwayListener, Drawer } from "@mui/material";
import SetWindowSize from "../../../../helpers/setWindowSize";
import { ReactComponent as EmptyBag } from "./../../../../assets/icons/empty_bag.svg";


export const CartDrawer = (props: {
  open: boolean;
  handleClose: () => void;
}) => {
  const place = SetWindowSize() < 600 ? 'top' : 'right';
  
  return (
    <Drawer
      open={props.open}
      anchor={place}
      PaperProps={{
        sx: {
          display: "flex",
          flexDirection: "column",
          height: "fit-content",
          minHeight: {xs:"30%", sm:"40%",lg:"45%"},
          width: { xs: "100%", sm: "60%", md: "27%", lg:"22%" },
          marginTop: { xs: "40px", sm: "48px" },
          padding: "10% auto",
          alignItems: "center",
          justifyContent: "space-around"
        },
      }}
      transitionDuration={200}
      hideBackdrop={true}
    >
      <ClickAwayListener onClickAway={props.handleClose}>
            <EmptyBag />
      </ClickAwayListener>
    </Drawer>
    );
};

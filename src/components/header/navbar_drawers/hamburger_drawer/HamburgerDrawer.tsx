import { Drawer, List, ListItem, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../../../helpers/setWindowSize";
import { EmptyLine } from "../../../shared/helper_components/EmptyLines";
import { ReactComponent as CloseIcon } from "./../../../../assets/icons/X.svg";

export const HamburgerDrawer = (props: {
  open: boolean;
  handleClose: () => void;
}) => {
  const navigate = useNavigate();
  const goToRestaurants = () => {
    scrollToTop();
    navigate("/restaurants");
  };
  const goToChefs = () => {
    scrollToTop();
    navigate("/chefs");
  };
  const goToContactUs = () => {
    scrollToTop();
    navigate("/contact-us");
  };
  const goToTermsOfUse = () => {
    scrollToTop();
    navigate("/terms-of-use");
  };
  const goToPrivacyPolicy = () => {
    scrollToTop();
    navigate("/privacy-policy");
  };

  return (
    <Drawer
      open={props.open}
      onClick={props.handleClose}
      anchor={"top"}
      hideBackdrop={true}
      transitionDuration={200}
    >
      <List>
        <ListItem>
          <CloseIcon onClick={props.handleClose} cursor={"pointer"} />
        </ListItem>
        <EmptyLine />
        <ListItem sx={{ cursor: "pointer" }} onClick={goToRestaurants}>
          Restaurants
        </ListItem>
        <ListItem sx={{ cursor: "pointer" }} onClick={goToChefs}>
          Chefs
        </ListItem>
        <EmptyLine />
        <Divider />
        <EmptyLine />
        <ListItem sx={{ cursor: "pointer" }} onClick={goToContactUs}>
          About Us
        </ListItem>
        <ListItem sx={{ cursor: "pointer" }} onClick={goToTermsOfUse}>
          Terms of Use
        </ListItem>
        <ListItem sx={{ cursor: "pointer" }} onClick={goToPrivacyPolicy}>
          Privacy Policy
        </ListItem>
        <EmptyLine />
      </List>
    </Drawer>
  );
};

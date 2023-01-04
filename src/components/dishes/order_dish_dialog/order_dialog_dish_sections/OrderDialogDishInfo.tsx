import { List, ListItem, Typography } from "@mui/material";
import { Dish } from "../../../../constants/interfaces";
import { ReactComponent as Spicy } from "./../../../../assets/icons/spicyS.svg";
import { ReactComponent as Vegan } from "./../../../../assets/icons/veganS.svg";
import { ReactComponent as Vegetarian } from "./../../../../assets/icons/vegetarianS.svg";

export const OrderDialogDishInfo = (args: { dish: Dish }) => {
  const dishNameStyle = {
    width: "100%",
    textAlign: { xs: "left", sm: "center" },
    margin: 0,
    marginTop: "0.5rem",
    fontWeight: 400,
    fontSize: {xs:"22px", sm:"26px",md:"32px", lg:"38px"},
    lineHeight: {sm:"32px", md:"36px"},
    letterSpacing: "2.7px",
  };

  const dishIngrediantsStyle = {
    width: "100%",
    textAlign: { xs: "left", sm: "center" },
    margin: { sm: "0 2.5rem", md: "0 3.5rem" },
    fontWeight: 200,
    fontSize: { md: "16px", lg:"20px" },
    lineHeight: { md: "26px", lg: "32px" },
    letterSpacing: "2.7px",
  };

  const dishPriceStyle = {
    width: "100%",
    textAlign: { xs: "left", sm: "center" },
    margin: 0,
    fontWeight: 400,
    fontSize: { xs:"20px" ,sm: "24px", md: "28px", lg:"32px" },
    lineHeight: "18px",
    letterSpacing: "2.7px",
  };

  const dishTypeLogoStyle = {
    width: "100%",
    textAlign: { xs: "left", sm: "center" },
    margin: 0,
  };

  return (
    <List>
      <ListItem>
        <Typography sx={dishNameStyle}>{args.dish.name}</Typography>
      </ListItem>
      <ListItem>
        <Typography sx={dishIngrediantsStyle}>
          {args.dish.ingrediants}
        </Typography>
      </ListItem>
      <ListItem>
        <Typography sx={dishTypeLogoStyle}>
          {args.dish.type === "spicy" ? (
            <Spicy />
          ) : args.dish.type === "vegan" ? (
            <Vegan />
          ) : args.dish.type === "vegetarian" ? (
            <Vegetarian />
          ) : (
            <></>
          )}
        </Typography>
      </ListItem>
      <ListItem>
        <Typography sx={dishPriceStyle}>
          <span>&#8362;</span>
          {args.dish.price}
        </Typography>
      </ListItem>
    </List>
  );
};

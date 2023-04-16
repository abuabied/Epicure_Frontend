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
    fontWeight: 400,
    fontSize: {xs:"20px", sm:"22px",md:"24px", lg:"28px"},
    lineHeight: {sm:"16px", md:"20px"},
    letterSpacing: "2.7px",
  };

  const dishIngrediantsStyle = {
    width: "100%",
    textAlign: { xs: "left", sm: "center" },
    margin: { sm: "0 1rem", md: "0 2rem" },
    fontWeight: 200,
    fontSize: { md: "14px", lg:"18px" },
    lineHeight: { md: "20px", lg: "26px" },
    letterSpacing: "2.7px",
  };

  const dishPriceStyle = {
    width: "100%",
    textAlign: { xs: "left", sm: "center" },
    margin: 0,
    fontWeight: 400,
    fontSize: { xs:"18px" ,sm: "20px", md: "22px", lg:"26px" },
    lineHeight: "14px",
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

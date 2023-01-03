import { List, ListItem, CardMedia } from "@mui/material";
import { Dish } from "../../../../constants/interfaces";
import { ReactComponent as Spicy } from "./../../../../assets/icons/spicyS.svg";
import { ReactComponent as Vegan } from "./../../../../assets/icons/veganS.svg";
import { ReactComponent as Vegetarian } from "./../../../../assets/icons/vegetarianS.svg";

export const OrderDialogDishInfo = (args: { dish: Dish }) => {
  return (
    <List>
      <ListItem>
        <CardMedia
          component="img"
          height="190px"
          image={require(`./../../../../assets/dishes-imgs/${args.dish.img}`)}
          alt="dish-img"
          sx={{ objectFit: "cover" }}
        />
      </ListItem>
      {args.dish.name}
      <ListItem>{args.dish.ingrediants}</ListItem>
      <ListItem>
        {args.dish.type === "spicy" ? (
          <Spicy />
        ) : args.dish.type === "vegan" ? (
          <Vegan />
        ) : args.dish.type === "vegetarian" ? (
          <Vegetarian />
        ) : (
          <></>
        )}
      </ListItem>
      <ListItem>
        <span>&#8362;</span>
        {args.dish.price}
      </ListItem>
    </List>
  );
};

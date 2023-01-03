import {
  List,
  ListItem,
} from "@mui/material";
import { OrderDialogDishChanges } from "./OrderDialogDishChanges";
import { OrderDialogDishQuantity } from "./OrderDialogDishQuantity";
import { OrderDialogDishSides } from "./OrderDialogDishSides";

export const OrderDialogDishOptions = () => {
  return (
    <List>
      <ListItem>
        <OrderDialogDishSides />
      </ListItem>

      <ListItem>
        <OrderDialogDishChanges />
      </ListItem>

      <ListItem>
        <OrderDialogDishQuantity />
      </ListItem>
    </List>
  );
};

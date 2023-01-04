import { List, ListItem } from "@mui/material";
import { EmptyLine } from "../../../../shared/helper_components/EmptyLines";
import { OrderDialogDishChanges } from "./OrderDialogDishChanges";
import { OrderDialogDishQuantity } from "./OrderDialogDishQuantity";
import { OrderDialogDishSides } from "./OrderDialogDishSides";

export const OrderDialogDishOptions = () => {
  return (
    <List sx={{ width:"100%"}}>
      <ListItem>
        <OrderDialogDishSides />
      </ListItem>

      <EmptyLine />

      <ListItem>
        <OrderDialogDishChanges />
      </ListItem>

      <EmptyLine />

      <ListItem>
        <OrderDialogDishQuantity />
      </ListItem>
    </List>
  );
};

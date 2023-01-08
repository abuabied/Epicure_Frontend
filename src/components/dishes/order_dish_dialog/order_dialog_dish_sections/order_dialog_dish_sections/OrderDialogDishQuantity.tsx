import { Typography } from "@mui/material";
import SetWindowSize from "../../../../../helpers/setWindowSize";
import { ColumnContainer } from "../../../../shared/helper_components/MyContainers";
import { titleStyle } from "./TextStyles";

export const OrderDialogDishQuantity = () => {
  const alignItemsStyle = SetWindowSize() < 600 ? "flex-start" : "center";
  const containerStyle = {
    width: "100%",
    alignItems: `${alignItemsStyle}`,
  };

  return (
    <ColumnContainer style={containerStyle}>
      <Typography sx={titleStyle}>Quantity</Typography>
    </ColumnContainer>
  );
};

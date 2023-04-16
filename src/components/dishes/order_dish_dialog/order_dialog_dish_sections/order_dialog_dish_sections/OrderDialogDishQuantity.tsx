import { IconButton, Typography } from "@mui/material";
import { useState } from "react";
import SetWindowSize from "../../../../../helpers/setWindowSize";
import {
  ColumnContainer,
  RowContainer,
} from "../../../../shared/helper_components/MyContainers";
import { contentStyle, titleStyle } from "./TextStyles";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { setCurrentDishQuantity } from "../../../../../services/data/dishes/currentDishOrderSlicer";

export const OrderDialogDishQuantity = () => {
  const alignItemsStyle = SetWindowSize() < 600 ? "flex-start" : "center";
  const dispatch = useDispatch();
  const minQuantity = 1;
  const [currentQuantity, setCurrentQuantity] = useState(minQuantity);
  const [isDisabled, setIsDisabled] = useState(true);
  const containerStyle = {
    width: "100%",
    alignItems: `${alignItemsStyle}`,
  };
  const addClick = () => {
    const quantity = currentQuantity + 1;
    setCurrentQuantity(quantity);
    const buttonDisabled = quantity <= 1 ? true : false;
    setIsDisabled(buttonDisabled);
    dispatch(setCurrentDishQuantity(quantity));
  };
  const removeClick = () => {
    const quantity = currentQuantity - 1;
    setCurrentQuantity(quantity);
    const buttonDisabled = quantity <= 1 ? true : false;
    setIsDisabled(buttonDisabled);
    dispatch(setCurrentDishQuantity(quantity));
  };

  return (
    <ColumnContainer style={containerStyle}>
      <Typography sx={titleStyle}>Quantity</Typography>
      <RowContainer>
        <IconButton disabled={isDisabled} onClick={removeClick} color="inherit">
          <RemoveIcon />
        </IconButton>
        <ColumnContainer style={{ justifyContent: "space-around" }}>
          <Typography sx={contentStyle}>{currentQuantity}</Typography>
        </ColumnContainer>
        <IconButton onClick={addClick} color="inherit">
          <AddIcon />
        </IconButton>
      </RowContainer>
    </ColumnContainer>
  );
};

import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import SetWindowSize from "../../../../../helpers/setWindowSize";
import { setCurrentDishSides } from "../../../../../services/data/dishes/currentDishOrderSlicer";
import { ColumnContainer } from "../../../../shared/helper_components/MyContainers";
import { contentStyle, titleStyle } from "./TextStyles";

export const OrderDialogDishSides = () => {
  const [selected, setSelected] = useState("Bread");
  const dispatch = useDispatch();
  
  const alignItemsStyle = SetWindowSize() < 600 ? "flex-start" : "center";
  const containerStyle = {
    width: "100%",
    alignItems: `${alignItemsStyle}`,
  };

  const handleChange = (ev:any) => {
    setSelected(ev.target.value);
    dispatch(setCurrentDishSides([ev.target.value]));
  };

  return (
    <ColumnContainer style={containerStyle}>
      <Typography sx={titleStyle}>Choose a side</Typography>
      <RadioGroup
        aria-labelledby="Choose a side"
        name="radio-buttons-group"
        value={selected}
        onChange={handleChange}
      >
        <FormControlLabel
          value="Bread"
          label={<Typography sx={contentStyle}>Bread</Typography>}
          control={<Radio />}
        />
        <FormControlLabel
          value="Sticky Rice"
          control={<Radio />}
          label={<Typography sx={contentStyle}>Sticky rice</Typography>}
        />
      </RadioGroup>
    </ColumnContainer>
  );
};

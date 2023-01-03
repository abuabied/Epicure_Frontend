import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { ColumnContainer } from "../../../../shared/helper_components/MyContainers";

export const OrderDialogDishSides = () => {
  return (
    <ColumnContainer>
      <Typography>Choose a side</Typography>
      <RadioGroup aria-labelledby="Choose a side" name="radio-buttons-group">
        <FormControlLabel value="bread" control={<Radio />} label="Bread" />
        <FormControlLabel
          value="rice"
          control={<Radio />}
          label="Sticky rice"
        />
      </RadioGroup>
    </ColumnContainer>
  );
};

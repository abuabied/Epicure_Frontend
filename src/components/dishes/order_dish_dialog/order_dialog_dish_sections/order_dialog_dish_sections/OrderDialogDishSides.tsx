import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import SetWindowSize from "../../../../../helpers/setWindowSize";
import { ColumnContainer } from "../../../../shared/helper_components/MyContainers";
import { ContentStyle, TitleStyle } from "./TextStyles";

export const OrderDialogDishSides = () => {
  const alignItemsStyle = SetWindowSize() < 600 ? "flex-start" : "center";
  const containerStyle = {
    width: "100%",
    alignItems: `${alignItemsStyle}`,
  };

  return (
    <ColumnContainer style={containerStyle}>
      <Typography sx={TitleStyle}>Choose a side</Typography>
      <RadioGroup aria-labelledby="Choose a side" name="radio-buttons-group">
        <FormControlLabel
          value="bread"
          label={<Typography sx={ContentStyle}>Bread</Typography>}
          control={<Radio />}
        />
        <FormControlLabel
          value="rice"
          control={<Radio />}
          label={<Typography sx={ContentStyle}>Sticky rice</Typography>}
        />
      </RadioGroup>
    </ColumnContainer>
  );
};

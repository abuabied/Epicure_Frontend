import {
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import SetWindowSize from "../../../../../helpers/setWindowSize";
import { ColumnContainer } from "../../../../shared/helper_components/MyContainers";
import { TitleStyle, ContentStyle } from "./TextStyles";

export const OrderDialogDishChanges = () => {
  const alignItemsStyle = SetWindowSize() < 600 ? "flex-start" : "center";
  const containerStyle = {
    width: "100%",
    alignItems: `${alignItemsStyle}`,
  };

  return (
    <ColumnContainer style={containerStyle}>
      <Typography sx={TitleStyle}>Changes</Typography>
      <FormGroup>
        <FormControlLabel
          value="allergic"
          control={<Checkbox />}
          label={<Typography sx={ContentStyle}>Allergic</Typography>}
        />
        <FormControlLabel
          value="noSpice"
          control={<Checkbox />}
          label={<Typography sx={ContentStyle}>No spice</Typography>}
        />
        <FormControlLabel
          value="extra"
          control={<Checkbox />}
          label={<Typography sx={ContentStyle}>Extra amount</Typography>}
        />
      </FormGroup>
    </ColumnContainer>
  );
};

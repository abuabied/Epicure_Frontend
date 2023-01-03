import {
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { ColumnContainer } from "../../../../shared/helper_components/MyContainers";

export const OrderDialogDishChanges = () => {
  return (
    <ColumnContainer>
      <Typography>Changes</Typography>
      <FormGroup>
        <FormControlLabel
          value="allergic"
          control={<Checkbox />}
          label="Allergic"
        />
        <FormControlLabel
          value="noSpice"
          control={<Checkbox />}
          label="No Spice"
        />
        <FormControlLabel
          value="extra"
          control={<Checkbox />}
          label="Extra amount"
        />
      </FormGroup>
    </ColumnContainer>
  );
};

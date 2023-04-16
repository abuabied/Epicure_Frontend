import {
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useDispatch } from "react-redux";
import SetWindowSize from "../../../../../helpers/setWindowSize";
import { setCurrentDishChanges } from "../../../../../services/data/dishes/currentDishOrderSlicer";
import { ColumnContainer } from "../../../../shared/helper_components/MyContainers";
import { titleStyle, contentStyle } from "./TextStyles";

export const OrderDialogDishChanges = () => {
  const alignItemsStyle = SetWindowSize() < 600 ? "flex-start" : "center";
  const dispatch = useDispatch();
  const containerStyle = {
    width: "100%",
    alignItems: `${alignItemsStyle}`,
  };
  const updateChanges = (ev: any) => {
    dispatch(setCurrentDishChanges(ev.target.value));
  };

  return (
    <ColumnContainer style={containerStyle}>
      <Typography sx={titleStyle}>Changes</Typography>
      <FormGroup onChange={updateChanges}>
        <FormControlLabel
          value="Allergic"
          control={<Checkbox />}
          label={<Typography sx={contentStyle}>Allergic</Typography>}
        />
        <FormControlLabel
          value="No spice"
          control={<Checkbox />}
          label={<Typography sx={contentStyle}>No spice</Typography>}
        />
        <FormControlLabel
          value="Extra amount"
          control={<Checkbox />}
          label={<Typography sx={contentStyle}>Extra amount</Typography>}
        />
      </FormGroup>
    </ColumnContainer>
  );
};

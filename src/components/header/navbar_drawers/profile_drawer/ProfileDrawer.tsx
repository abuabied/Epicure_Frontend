import { Drawer, List, ListItem } from "@mui/material";
import SetWindowSize from "../../../../helpers/setWindowSize";

export const ProfileDrawer = (probs: {
  open: boolean;
  handleClose: () => void;
}) => {
  const place = SetWindowSize() < 769 ? "top" : "right";

  return (
    <Drawer
      open={probs.open}
      anchor={place}
      PaperProps={{
        sx: {
          height: "fit-content",
          minHeight: "40%",
          width: { sm: "100%", md: "60%" },
          marginTop: { xs: "40px", sm: "48px" },
        },
      }}
      transitionDuration={200}
      hideBackdrop={true}
    >
      <List>
        <ListItem alignItems="center"></ListItem>
      </List>
    </Drawer>
  );
};

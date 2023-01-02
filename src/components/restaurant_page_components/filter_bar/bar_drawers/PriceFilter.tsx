import { Drawer, List, ListItem } from "@mui/material";

export const PriceFilter = (probs: {
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <Drawer 
      open={!probs.open}
      anchor={"top"}
      PaperProps={{
        sx: {
          height: "fit-content",
          minHeight: "5rem",
          width: "7rem",
          position: "inherit"
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

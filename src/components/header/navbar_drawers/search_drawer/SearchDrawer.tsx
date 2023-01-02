import { ClickAwayListener, Drawer, List, ListItem, Typography } from "@mui/material";
import SetWindowSize from "../../../../helpers/setWindowSize";
import { SearchBar } from "../../../shared/search_bar/SearchBar";
import { ReactComponent as CloseIcon } from "./../../../../assets/icons/X.svg";


export const SearchDrawer = (props: { open: boolean; handleClose: () => void }) => { 
  const place = SetWindowSize() < 769 ? 'top' : 'right';
  
  return (
    <Drawer
      open={props.open}
      anchor={place}
      PaperProps={{
        sx: {
          height: "fit-content",
          minHeight: "40%",
          width: { sm: "100%", md: "50%", lg: "35%" },
          marginTop: { xs: "40px", sm: "48px" },
        },
      }}
      transitionDuration={200}
      hideBackdrop={true}
    >
      <ClickAwayListener onClickAway={props.handleClose}>
        <List>
          <ListItem>
            <CloseIcon cursor={"pointer"} onClick={props.handleClose} />
            <Typography align="center" width={"90%"}>
              Search
            </Typography>
          </ListItem>
          <ListItem alignItems="center">
            <SearchBar />
          </ListItem>
        </List>
      </ClickAwayListener>
    </Drawer>
  );
};
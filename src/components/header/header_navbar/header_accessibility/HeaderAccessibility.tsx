import { ReactComponent as SearchLogo } from "./../../../../assets/icons/search.svg";
import { ReactComponent as ProfileLogo } from "./../../../../assets/icons/profile.svg";
import { ReactComponent as BagLogo } from "./../../../../assets/icons/bag.svg";
import { Box } from "@mui/material";

export const HeaderAccessibility = (handlers: {
  openSearch: () => void;
  openProfile: () => void;
  openCart: () => void;
}) => {
  const cartLogoBoxStyle = {
    fontSize: "10px",
    height: "content",
    width: "content",
    maxWidth: "20px",
    minWidth: "14px",
    position: "absolute",
    color: "white",
    backgroundColor: "black",
    borderRadius: "50%",
    textAlign: "center",
  };

  return (
    <>
      <SearchLogo
        cursor={"pointer"}
        height="100%"
        onClick={handlers.openSearch}
      />
      <ProfileLogo cursor={"pointer"} height="100%" />
      <Box paddingTop="5px" onClick={handlers.openCart}>
        <Box sx={cartLogoBoxStyle}>0</Box>
        <BagLogo cursor={"pointer"} height="85%" />
      </Box>
    </>
  );
};

import { Box, Typography } from "@mui/material";
import SetWindowSize from "../../../helpers/setWindowSize";
import { ReactComponent as EpicureLogoB } from "./../../../assets/icons/epicure_logo_big.svg";
import { ReactComponent as EpicureLogoS } from "./../../../assets/icons/epicure_logo_small.svg";


export const EpicureLogoInAboutUs = () => {
    const bigScreen = SetWindowSize() < 768;

  const titleStyle = {
    display: "block",
    maxHeight: "content",
    fontStyle: "normal",
    fontSize: "24px",
    fontWeight: "300",
    lineHeight: "28px",
    letterSpacing: "3px",
  };

  const boxStyle = {
    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    margin: 0,
    paddingTop: { xs: "0", sm: "2%" },
  };


  return (
    <Box sx={boxStyle} width={"content"} height={"fit-content"}>
      {bigScreen ? <EpicureLogoS /> : <EpicureLogoB />}
      <Typography sx={titleStyle}>EPICURE</Typography>
    </Box>
  );
};

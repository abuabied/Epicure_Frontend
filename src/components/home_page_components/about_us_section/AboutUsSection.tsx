import { Box, Typography } from "@mui/material";
import { DoubleEmptyLines, EmptyLine } from "../../shared/helper_components/EmptyLines";
import { EpicureLogoInAboutUs } from "./EpicureLogoInAboutUs";



export const AboutUsSection = () => {
const titleStyle = {
  display: "block",
  maxHeight: "content",
  fontFamily: "Helvetica Neue",
  fontStyle: "normal",
  fontSize: { xs: "18px", sm: "30px" },
  fontWeight: "400",
  lineHeight: { xs: "24px", sm: "35px" },
  letterSpacing: "1.25px",
  marginLeft: {xs:"1.5rem", sm: "2rem", md:'3.7rem'},
};

  const textStyle = {
    display: "block",
    maxHeight: "content",
    fontStyle: "normal",
    fontSize: { xs: "18px", sm: "20px" },
    fontWeight: "200",
    lineHeight: { xs: "35px", sm: "40px" },
    letterSpacing: "1.25px",
    marginLeft: "1.5rem",
    textTransform: "uppercase",
    width: {xs: "90%", sm:"85%", md: "45%"},
  };

  return (
    <Box sx={{ backgroundColor: "#FAFAFA", width: "100%", paddingBottom: "2rem" }}>
      <DoubleEmptyLines />
      <Typography component="div" sx={titleStyle}>
        ABOUT US:
      </Typography>
      <EmptyLine />
      <Box
        sx={{
          display: "flex",
          flexDirection: {xs:"column", sm: "column", md:"row-reverse"},

        }}
      >
        <Box width={"50%"}>
          <EpicureLogoInAboutUs />
        </Box>
        <DoubleEmptyLines />
        <Typography component="div" sx={textStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
          vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros,
          eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales
          porta. Vivamus elit urna, dignissim a vestibulum. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum
          bibendum no eu ipsum. Cras porta malesuada eros.
        </Typography>
      </Box>
    </Box>
  );
};

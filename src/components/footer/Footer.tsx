import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { EmptyLine } from "../shared/helper_components/EmptyLines";

export const Footer = () => {
  const navigate = useNavigate();
  const goToContactUs = () => {
    navigate("/contact-us");
  };
  const goToTermsOfUse = () => {
    navigate("/terms-of-use");
  };
  const goToPrivacyPolicy = () => {
    navigate("/privacy-policy");
  };

  const textStyle = {
    display: "block",
    maxHeight: "content",
    fontStyle: "normal",
    fontSize: "18px",
    fontWeight: "200",
    lineHeight: "21px",
    letterSpacing: "1.9px",
    margin: "1.5rem",
    cursor: 'pointer',
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        justifyContent: "center",
        paddingTop: {xs:'2rem', sm:'2rem', md:0,lg:0},
      }}
    >
      <Typography sx={textStyle} onClick={goToContactUs} >
        Contact Us
      </Typography>
      <Typography sx={textStyle} onClick={goToTermsOfUse}>
        Terms of Use
      </Typography>
      <Typography sx={textStyle} onClick={goToPrivacyPolicy}>
        Privacy Policy
      </Typography>
      <EmptyLine />
    </Box>
  );
};

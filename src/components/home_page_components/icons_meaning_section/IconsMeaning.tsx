import { Box, Container, Typography } from "@mui/material";
import SetWindowSize from "../../../helpers/setWindowSize";
import { EmptyLine } from "../../shared/helper_components/EmptyLines";
import { ReactComponent as SpicyLogo } from "./../../../assets/icons/spicy.svg";
import { ReactComponent as VeganLogo } from "./../../../assets/icons/vegan.svg";
import { ReactComponent as VegetarianLogo } from "./../../../assets/icons/vegetarian.svg";

export const IconsMeaning = () => {
  const mobileScreen = SetWindowSize() < 768;
  const boxStyle = {
    margin: "auto 0",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    padding: { xs: "2% 5%", sm: "2% 20%" },
    alignContent: "center",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: { xs: "18px", sm: "30px" },
    fontWeight: "200",
    lineHeight: "35px",
    letterSpacing: { xs: "1.25px", sm: "2.14px" },
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  };
  const title: string = mobileScreen
    ? "Signature Dish Of:"
    : "THE MEANING OF OUR ICONS:";

  const textStyle = {
    fontSize: "18px",
    fontWeight: "200",
    lineHeight: "30px",
    letterSpacing: "2px",
    textAlign: "center",
    alignContent: "center",
  };

  return (
    <Box sx={{ backgroundColor: "#FAFAFA" }}>
      <Typography
        component="div"
        sx={titleStyle}
        marginBottom="1%"
        marginTop="3%"
      >
        {title}
      </Typography>
      <Box sx={boxStyle}>
        <Container>
          <Typography component="div" sx={textStyle}>
            <SpicyLogo height="70%" />
            <EmptyLine />
            Spicy
          </Typography>
        </Container>
        <EmptyLine />
        <EmptyLine />
        <Container>
          <Typography component="div" sx={textStyle}>
            <VegetarianLogo height="70%" />
            <EmptyLine />
            Vegitarian
          </Typography>
        </Container>
        <EmptyLine />
        <EmptyLine />
        <Container>
          <Typography component="div" sx={textStyle}>
            <VeganLogo height="70%" />
            <EmptyLine />
            Vegan
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

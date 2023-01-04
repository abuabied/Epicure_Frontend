import { CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import { EmptyLine } from "../../shared/helper_components/EmptyLines";
import { NoStyleContainer } from "../../shared/helper_components/MyContainers";
import { ReactComponent as Clock } from "./../../../assets/icons/clock.svg";

export const RestaurantHeroSection = (args: {
  name: String;
  chefName: String;
  open: Boolean;
  img: String;
}) => {
  const imgStyle = {
    objectFit: "cover",
    "@media (max-width: 500px)": {
      width: "100%",
      height: "35vh",
    },
    "@media (min-width: 501px)": {
      width: "100%",
      height: "45vh",
    },
    "@media (min-width: 769px)": {
      width: "100%",
      height: "55vh",
    },
  };

  const nameStyle = {
    fontSize: { xs: "24px", sm: "40px" },
    fontWeight: "400",
    lineHeight: { xs: "36px", sm: "46px" },
    letterSpacing: { xs: "2.7", sm: "3.7px" },
    textAlign: "left",
    "@media(min-width: 501px)": {
      textAlign: "center",
    },
    "@media(max-width: 500px)": {
      marginLeft: "1.5rem",
    },
  };
  const chefNameStyle = {
    fontSize: { xs: "19px", sm: "28px" },
    fontWeight: "100",
    lineHeight: { xs: "32px", sm: "42px" },
    letterSpacing: "2px",
    textAlign: "left",
    "@media(min-width: 501px)": {
      textAlign: "center",
    },
    "@media(max-width: 500px)": {
      marginLeft: "1.5rem",
    },
  };
  const isOpenStyle = {
    fontSize: { xs: "12px", sm: "18px" },
    fontWeight: "100",
    lineHeight: { xs: "28px", sm: "30px" },
    letterSpacing: "2px",
    textAlign: "left",
    "@media(min-width: 501px)": {
      textAlign: "center",
    },
    "@media(max-width: 500px)": {
      marginLeft: "1.5rem",
    },
  };

  return (
    <NoStyleContainer>
      <CardMedia
        component="img"
        image={require(`./../../../assets/restaurants-imgs/${args.img}`)}
        alt="dish-img"
        sx={imgStyle}
      />

      <EmptyLine />

      <Typography variant="body1" sx={nameStyle}>
        {args.name}
      </Typography>
      <Typography variant="body2" sx={chefNameStyle}>
        {args.chefName}
      </Typography>
      <Typography variant="body2" sx={isOpenStyle}>
        <Clock style={{marginRight: "8px", marginBottom:"-2px"}}/>
        {args.open ? "Open" : "Closed"}
      </Typography>
    </NoStyleContainer>
  );
};

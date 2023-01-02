import { CardMedia, Typography } from "@mui/material";
import { Chef } from "../../../constants/interfaces";
import { ImageBox } from "./styles";

export const ChefImage = (arg: {chef: Chef}) => {

  const textStyle = {
    fontSize: { xs: "18px", sm: "40px" },
    fontWeight: "400",
    lineHeight: { xs: "47px", sm: "47px" },
    letterSpacing: "2.7px",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#FFFF",
    opacity: 0.8,
    height: "content",
    margin: 0,
    padding: "3% 0",    
  };

  const imgStyle = {
    position: "absolute",
    width: "230px",
    objectFit: "fill",
    height: "230px",
    "@media (min-width: 500px)": {
      width: "290px",
      height: "290px",
    },
    "@media (min-width: 700px)": {
      width: "310px",
      height: "310px",
    },
    "@media (min-width: 1000px)": {
      width: "350px",
      height: "350px",
    },
  };

  return (
    <ImageBox>
      <CardMedia
        component="img"
        image={require(`./../../../assets/chefs-imgs/${arg?.chef.img}`)}
        alt="rest-img"
        sx={imgStyle}
      />
      <Typography sx={textStyle}>{arg?.chef?.name}</Typography>
    </ImageBox>
  );
};

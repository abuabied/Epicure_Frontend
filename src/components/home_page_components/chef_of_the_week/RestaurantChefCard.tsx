import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Restaurant } from "../../../constants/interfaces";
import { scrollToTop } from "../../../helpers/setWindowSize";

export const RestaurantChefCard = (args: { restaurant: Restaurant }) => {
  const navigate = useNavigate();
  const goToRestaurantPage = () => {
    scrollToTop();
    navigate(`/restaurants/${args.restaurant.name}`);
  };
  
  const cardTileStyle = {
    fontSize: { xs: "20px", sm: "28px", md: "32px" },
    fontWeight: "400",
    lineHeight: { xs: "21px", sm: "47px" },
    letterSpacing: "2.6px",
    textAlign: { xs: "left", sm: "center" },
  };

  return (
    <Card
      sx={{
        minWidth: "270px",
        width: "270px",
        backgroundColor: "#F9F4EA",
        cursor: "pointer"
      }}
      onClick={goToRestaurantPage}
    >
      <CardMedia
        component="img"
        height="200px"
        image={require(`./../../../assets/restaurants-imgs/${args.restaurant?.img}`)}
        alt="rest-img"
      />

      <CardContent>
        <Typography gutterBottom component="div" sx={cardTileStyle}>
          {args.restaurant?.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

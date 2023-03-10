import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Restaurant } from "../../../../constants/interfaces";
import { scrollToTop } from "../../../../helpers/setWindowSize";
import { StarRating } from "./StarRating";

export const SimpleCard = (args: { restaurant: Restaurant }) => {
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
  const cardDescriptionStyle = {
    fontSize: { xs: "14px", sm: "18px" },
    fontWeight: "100",
    lineHeight: { xs: "20px", sm: "30px" },
    letterSpacing: "2px",
    textAlign: { xs: "left", sm: "center" },
    whiteSpace: "break-spaces",
  };
  const cardStarRatingStyle = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "1rem",
    "@media(max-width: 768px)": { display: "none" },
  };
  const cardStyle = {
    minWidth: "300px",
    width: "300px",
    backgroundColor: "#F9F4EA",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <Card sx={cardStyle} onClick={goToRestaurantPage}>
      <CardMedia
        component="img"
        height="170px"
        image={require(`./../../../../assets/restaurants-imgs/${args.restaurant.img}`)}
        alt="rest-img"
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography component="div" sx={cardTileStyle}>
          {args.restaurant.name}
        </Typography>
        <Typography variant="body1" sx={cardDescriptionStyle}>
          {args.restaurant.chefName}
        </Typography>
      </CardContent>
      <CardContent sx={cardStarRatingStyle}>
        <StarRating rating={args.restaurant.rating} />
      </CardContent>
    </Card>
  );
};

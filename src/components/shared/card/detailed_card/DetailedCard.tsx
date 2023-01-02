import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Dish } from "../../../../constants/interfaces";
import { NoStyleContainer } from "../../helper_components/MyContainers";
import { ReactComponent as Spicy } from "./../../../../assets/icons/spicyS.svg";
import { ReactComponent as Vegan } from "./../../../../assets/icons/veganS.svg";
import { ReactComponent as Vegetarian } from "./../../../../assets/icons/vegetarianS.svg";

export const DetailedCard = (args: { dish: Dish }) => {
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

  const priceStyle = {
    fontSize: { xs: "16px", sm: "24px" },
    fontWeight: { xs: "400", sm: "200" },
    lineHeight: { xs: "19px", sm: "30px" },
    letterSpacing: "2px",
    textAlign: { xs: "left", sm: "center" },
    whiteSpace: "break-spaces",
  };

  return (
    <Card
      sx={{
        minWidth: "220px",
        maxWidth: "270px",
        backgroundColor: "#F9F4EA",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <NoStyleContainer>
        <CardMedia
          component="img"
          height="190px"
          image={require(`./../../../../assets/dishes-imgs/${args.dish.img}`)}
          alt="rest-img"
          sx={{ objectFit: "cover"}}
        />
        <CardContent>
          <Typography gutterBottom component="div" sx={cardTileStyle}>
            {args.dish.name}
          </Typography>
          <Typography variant="body1" sx={cardDescriptionStyle}>
            {args.dish.ingrediants}
          </Typography>
        </CardContent>
      </NoStyleContainer>
      <NoStyleContainer>
        <CardContent
          sx={{ paddingTop: 0, textAlign: { xs: "left", sm: "center" } }}
        >
          {args.dish.type === "spicy" ? (
            <Spicy />
          ) : args.dish.type === "vegan" ? (
            <Vegan />
          ) : args.dish.type === "vegetarian" ? (
            <Vegetarian />
          ) : (
            <></>
          )}
        </CardContent>
        <CardContent sx={{ paddingTop: 0 }}>
          <Typography variant="body2" sx={priceStyle}>
            <span>&#8362;</span>
            {args.dish.price}
          </Typography>
        </CardContent>
      </NoStyleContainer>
    </Card>
  );
};
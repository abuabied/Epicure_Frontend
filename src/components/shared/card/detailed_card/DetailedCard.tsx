import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { Dish } from "../../../../constants/interfaces";
import { setCurrentDishOrder } from "../../../../services/data/dishes/currentDishOrderSlicer";
import { NoStyleContainer } from "../../helper_components/MyContainers";
import { ReactComponent as Spicy } from "./../../../../assets/icons/spicyS.svg";
import { ReactComponent as Vegan } from "./../../../../assets/icons/veganS.svg";
import { ReactComponent as Vegetarian } from "./../../../../assets/icons/vegetarianS.svg";
import { toast } from "react-toastify";

export const DetailedCard = (args: {
  dish: Dish;
  openOrderDishDialog: () => void;
  isRestaurantOpen: boolean;
}) => {
  const dispatch = useDispatch();
  const setCurrentDishOrderClick = () => {
    dispatch(setCurrentDishOrder(args.dish));
  };

  const openDishOrderDialog = () => {
    if (args.isRestaurantOpen) {
      setCurrentDishOrderClick();
      args.openOrderDishDialog();
    }
    else{
        toast.info("Restaurant is closed!");
    }
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

  const priceStyle = {
    fontSize: { xs: "16px", sm: "24px" },
    fontWeight: { xs: "400", sm: "200" },
    lineHeight: { xs: "19px", sm: "30px" },
    letterSpacing: "2px",
    textAlign: { xs: "left", sm: "center" },
    whiteSpace: "break-spaces",
  };

  const cardStyle = {
    minWidth: "240px",
    maxWidth: "240px",
    backgroundColor: "#F9F4EA",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer",
  };

  return (
    <Card sx={cardStyle} onClick={openDishOrderDialog}>
      <NoStyleContainer>
        <CardMedia
          component="img"
          height="190px"
          image={require(`./../../../../assets/dishes-imgs/${args.dish.img}`)}
          alt="dish-img"
          sx={{ objectFit: "cover" }}
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

import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import SetWindowSize from "../../../../helpers/setWindowSize";
import { getCookie } from "../../../../services/data/cookies/cookieFunctions";
import { EmptyOrder } from "../../../../services/data/dishes/orderSlicer";
import { StyledButton } from "../../../shared/button/StyledButton";
import { EmptyLine } from "../../../shared/helper_components/EmptyLines";
import { ColumnContainer } from "../../../shared/helper_components/MyContainers";
import { DishInOrderCardContainer } from "./DishInOrderCardContainer";
import {
  addCommentStyle,
  mainTextStyle,
  MyTextArea,
  restaurantNameStyle,
  TotalPrice,
} from "./styles";

export const BagWithItems = () => {
  const dispatch = useDispatch();
  const windowSize = SetWindowSize() > 768;
  const restaurantName = useSelector(
    (state: any) => state.order.restaurantName
  );

  const overallPrice = useSelector(
    (state: any) => state.order.overallPrice
  );

  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    setIsLogged(getCookie("loggedIn") === 'true' ? true : false);
  }, [])

  const checkOutClick = () => {
    if(!isLogged){
       toast.info("Must log in to finish order!");
    }
    else{
      //TODO: add order history to user and update it
      dispatch(EmptyOrder());
      window.localStorage.removeItem("bagItems");
      toast.success("OK");
    }
  }
  
  
  return (
    <ColumnContainer style={{width:"100%", height:"100%"}}>
      <Typography sx={mainTextStyle}>
        {windowSize ? "your order" : "my order"}
      </Typography>
      <Typography sx={restaurantNameStyle}>{restaurantName}</Typography>
      <DishInOrderCardContainer />
      <EmptyLine />
      <TotalPrice price={overallPrice} />
      <Typography sx={addCommentStyle}>Add a comment</Typography>
      <MyTextArea placeholder="Special requests, allergies, detary restrictions, etc."></MyTextArea>
      <EmptyLine />
      <StyledButton
        buttonText={"checkout"}
        buttonType={isLogged ? "dark" : "light"}
        alignSelf={"center"}
        onClick={checkOutClick}
      />
      <EmptyLine />
    </ColumnContainer>
  );
};

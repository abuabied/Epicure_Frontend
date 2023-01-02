import {
  Container,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { ReactComponent as SearchLogo } from "./../../../assets/icons/search.svg";
import { useSelector } from "react-redux";
import { Restaurant } from "../../../constants/interfaces";
import { NoStyleContainer } from "../helper_components/MyContainers";
import { DoubleEmptyLines, EmptyLine } from "../helper_components/EmptyLines";

export const SearchBar = () => {
  const allRestaurantsList = useSelector(
    (state: any) => state.restaurants.value
  );

  const Cusines = ["Thai", "Turkish"]

  const [visible, setVisible] = useState(false);
  const [cusineResults, setCusineResults] = useState<string[]>([]);
  const [restaurantsResults, setRestaurantsResults] = useState<string[]>([]);
  const searchAction = (event: any) => {
    let searchInput: string = event.target.value;
    if (searchInput === "") setVisible(false);
    else {
      setVisible(true);
      let cusinesTmp = Cusines.filter((cusine) =>
        cusine.toLocaleLowerCase().startsWith(searchInput.toLowerCase())
      );
      setCusineResults(cusinesTmp);

      let restaurantsTmp = allRestaurantsList.map((restaurant: Restaurant) => restaurant.name)
      restaurantsTmp = restaurantsTmp.filter((restaurantName: string) =>
        restaurantName.toLocaleLowerCase().startsWith(searchInput.toLowerCase())
      );
      setRestaurantsResults(restaurantsTmp);
    }
  };

  const inputTextStyle = {
    tabSize: { sm: "small", md: "md", lg: "lg" },
    width: { xs: "100%", sm: "300px", md: "350px" },
  };
  const ResultBoxStyle = {
    display: `${visible ? "flex" : "none"}`,
    marginTop: "0.5rem",
    backgroundColor: "rgba(255,255,255, 1)",
    border: 0,
    width: "90%",
    height: "fit-content",
    padding: "0.5rem 1rem",
  };

  return (
    <Container sx={{ width: { xs: "95%", sm: "fit-content" }, padding: "0" }}>
      <TextField
        id="inputBar"
        placeholder="Search for restaurant cuisine, chef"
        size="small"
        sx={inputTextStyle}
        InputProps={{
          type: "search",
          startAdornment: (
            <InputAdornment position="start">
              <SearchLogo />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        onChange={searchAction}
      />
      <NoStyleContainer style={ResultBoxStyle}>
        Restaurants:
        <EmptyLine />
        {restaurantsResults.length
          ? restaurantsResults.map((cusine) => ` ${cusine}`).toString()
          : "No results"}
        <DoubleEmptyLines />
        Cusines:
        <EmptyLine />
        {cusineResults.length
          ? cusineResults.map((cusine) => ` ${cusine}`).toString()
          : "No results"}
        <EmptyLine />
      </NoStyleContainer>
    </Container>
  );
};

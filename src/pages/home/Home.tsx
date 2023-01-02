import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AboutUsSection } from "../../components/home_page_components/about_us_section/AboutUsSection";
import { SignatureDishContainer } from "../../components/home_page_components/card_container/signature_dish_container/SignatureDishContainer";
import { PopularRestaurantContainer } from "../../components/home_page_components/card_container/popular_restaurant_container/PopularRestaurantContainer";
import { HeroSection } from "../../components/home_page_components/hero_section/HeroSection";
import { IconsMeaning } from "../../components/home_page_components/icons_meaning_section/IconsMeaning";
import {
  EmptyLine,
  TripleEmptyLines,
} from "../../components/shared/helper_components/EmptyLines";
import {
  ColumnContainer,
  HomeColumnContainer,
} from "../../components/shared/helper_components/MyContainers";
import { scrollToTop } from "../../helpers/setWindowSize";
import { ChefOfTheWeek } from "../../components/home_page_components/chef_of_the_week/ChefOfTheWeek";
import { getPopularRestaurants } from "../../services/data_fetch/RestaurantsDataFetch";
import { useState, useEffect } from "react";
import { getChefOfTheWeek } from "../../services/data_fetch/ChefsDataFetch";
import { Chef } from "../../constants/interfaces";
import { EmptyChef } from "../../constants/myDefaultValues";

export const Home = () => {
  const navigate = useNavigate();
  const goToRestaurants = () => {
    scrollToTop();
    navigate("/restaurants");
  };

  const allRestaurantsLinkStyle = {
    display: "block",
    width: "fit-content",
    fontSize: { xs: "16px", sm: "24px" },
    fontWeight: "400",
    lineHeight: "35px",
    letterSpacing: "2px",
    placeSelf: { sm: "self-start", md: "self-end" },
    cursor: "pointer",
  };

  const [restaurantsList, setRestaurantsList] = useState([]);
  const [chef, setChef] = useState<Chef[]>([]);

  const getRestaurants = async () => {
    await getPopularRestaurants().then((res) => setRestaurantsList(res));
  };
  const getChef = async () => {
    await getChefOfTheWeek().then((res) => {
      setChef(res.slice(0, 1));
    });
  };

  useEffect(() => {
    getRestaurants();
    getChef();
  }, []);

  return (
    <ColumnContainer>
      <HeroSection />
      <HomeColumnContainer>
        <PopularRestaurantContainer
          containerTitle="popular restaurant in epicure:"
          restaurantList={restaurantsList}
        />
        <EmptyLine />
        <Typography
          component="div"
          sx={allRestaurantsLinkStyle}
          onClick={goToRestaurants}
        >
          All Restaurants &gt;&gt;
        </Typography>
        <TripleEmptyLines />
        <SignatureDishContainer
          containerTitle="Signature Dish Of:"
          restaurantList={restaurantsList}
        />
        <EmptyLine />
        <Typography
          component="div"
          sx={{
            ...allRestaurantsLinkStyle,
            display: { sm: "block", md: "none" },
          }}
          onClick={goToRestaurants}
        >
          All Restaurants &gt;&gt;
        </Typography>
        <EmptyLine />
      </HomeColumnContainer>
      <EmptyLine />
      <IconsMeaning />
      <EmptyLine />
      <HomeColumnContainer>
        <ChefOfTheWeek chef={chef[0] ? chef[0] : EmptyChef} />
      </HomeColumnContainer>
      <AboutUsSection />
    </ColumnContainer>
  );
};

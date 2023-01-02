import { RestaurantCardContainer } from "../../components/restaurant_page_components/restaurants_card_container/RestaurantCardContainer";
import { RestaurantCategoryBar } from "../../components/restaurant_page_components/restaurants_category_bar/RestaurantCategoryBar";
import { EmptyLine } from "../../components/shared/helper_components/EmptyLines";
import { ColumnContainer } from "../../components/shared/helper_components/MyContainers";
import { PageTitle } from "../../components/shared/helper_components/Texts";

export const Restaurants = () => {

  return (
    <ColumnContainer>
      <PageTitle title="restaurants" />
      <EmptyLine />
      <RestaurantCategoryBar />
      <RestaurantCardContainer />
    </ColumnContainer>
  );
};

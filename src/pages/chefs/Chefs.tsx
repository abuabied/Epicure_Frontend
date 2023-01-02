import { ChefsCardContainer } from "../../components/chef_page_components/chefs_card_container/ChefsCardContainer";
import { ChefCategoryBar } from "../../components/chef_page_components/chefs_category_bar/ChefCategoryBar";
import { EmptyLine } from "../../components/shared/helper_components/EmptyLines";
import { ColumnContainer } from "../../components/shared/helper_components/MyContainers";
import { PageTitle } from "../../components/shared/helper_components/Texts";

export const Chefs = () => {

  return (
    <ColumnContainer>
      <PageTitle title="chefs" />
      <EmptyLine />
      <ChefCategoryBar />
      <ChefsCardContainer />
    </ColumnContainer>
  );
};

import { ReactComponent as SearchLogo } from "./../../../../assets/icons/search.svg";
import { ReactComponent as ProfileLogo } from "./../../../../assets/icons/profile.svg";
import { RowContainer } from "../../../shared/helper_components/MyContainers";
import { ShoppingBag } from "./ShoppingBag";

export const HeaderAccessibility = (handlers: {
  openSearch: () => void;
  openProfile: () => void;
  openBag: () => void;
}) => {

  return (
    <RowContainer style={{width:"100%", justifyContent:"space-between"}}>
      <SearchLogo
        cursor={"pointer"}
        height="100%"
        onClick={handlers.openSearch}
      />
      <ProfileLogo
        cursor={"pointer"}
        height="100%"
        onClick={handlers.openProfile}
      />
      <ShoppingBag openBag={handlers.openBag} />
    </RowContainer>
  );
};

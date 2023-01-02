import { DesktopHeaderLeftSection } from "../desktop_header_left_section/DesktopHeaderLeftSection";
import { HeaderAccessibility } from "./header_accessibility/HeaderAccessibility";
import { NavBar, LeftSection, MiddleSection, RightSection } from "../styles";
import { ReactComponent as BurgerLogo } from "./../../../assets/icons/HAMBUR.svg";
import { ReactComponent as EpicureLogo } from "./../../../assets/icons/epicure_logo.svg";
import { useNavigate } from "react-router-dom";
import SetWindowSize, { scrollToTop } from "../../../helpers/setWindowSize";

export const HeaderNavBar = (handlers: {
  openHamMenue: () => void;
  openSearch: () => void;
  openProfile: () => void;
  openCart: () => void;
}) => {
  const windowSize = SetWindowSize();
  const navigate = useNavigate();
  const goToHome = () => {
    scrollToTop();
    navigate("/");
  };

  return (
    <NavBar>
      <LeftSection>
        {windowSize > 768 ? (
          <DesktopHeaderLeftSection />
        ) : (
          <BurgerLogo
            onClick={handlers.openHamMenue}
            height="100%"
            cursor={"pointer"}
          />
        )}
      </LeftSection>

      <MiddleSection>
        <EpicureLogo cursor={"pointer"} onClick={goToHome} />
      </MiddleSection>

      <RightSection>
        <HeaderAccessibility
          openSearch={handlers.openSearch}
          openProfile={handlers.openProfile}
          openCart={handlers.openCart}
        />
      </RightSection>
    </NavBar>
  );
};
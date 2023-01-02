import { useState } from "react";
import { HamburgerDrawer } from "./navbar_drawers/hamburger_drawer/HamburgerDrawer";
import { HeaderContainer } from "./styles";
import { SearchDrawer } from "./navbar_drawers/search_drawer/SearchDrawer";
import { CartDrawer } from "./navbar_drawers/cart_drawer/CartDrawer";
import { ProfileDrawer } from "./navbar_drawers/profile_drawer/ProfileDrawer";
import { HeaderNavBar } from "./header_navbar/HeaderNavBar";

export const Header = () => {
  const [hamMenueDrawerOpen, setHamMenueDrawerOpen] = useState(false);
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const handleClickHamMenueDrawer = {
    open: () => {
      setHamMenueDrawerOpen(true);
    },
    close: () => {
      setHamMenueDrawerOpen(false);
    },
  };

  const handleClickSearchDrawer = {
    open: () => {
      setSearchDrawerOpen(true);
    },
    close: () => {
      setSearchDrawerOpen(false);
    },
  };

  const handleClickProfileDrawer = {
    open: () => {
      setProfileDrawerOpen(true);
    },
    close: () => {
      setProfileDrawerOpen(false);
    },
  };

  const handleClickCartDrawer = {
    open: () => {
      setCartDrawerOpen(true);
    },
    close: () => {
      setCartDrawerOpen(false);
    },
  };

  return (
    <HeaderContainer>
      <HeaderNavBar
        openHamMenue={handleClickHamMenueDrawer.open}
        openSearch={handleClickSearchDrawer.open}
        openProfile={handleClickProfileDrawer.open}
        openCart={handleClickCartDrawer.open}
      />
      <HamburgerDrawer
        open={hamMenueDrawerOpen}
        handleClose={handleClickHamMenueDrawer.close}
      />
      <SearchDrawer
        open={searchDrawerOpen}
        handleClose={handleClickSearchDrawer.close}
      />
      <ProfileDrawer
        open={profileDrawerOpen}
        handleClose={handleClickProfileDrawer.close}
      />
      <CartDrawer
        open={cartDrawerOpen}
        handleClose={handleClickCartDrawer.close}
      />
    </HeaderContainer>
  );
};

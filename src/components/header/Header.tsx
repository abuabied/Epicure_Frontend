import { useState } from "react";
import { HamburgerDrawer } from "./navbar_drawers/hamburger_drawer/HamburgerDrawer";
import { HeaderContainer } from "./styles";
import { SearchDrawer } from "./navbar_drawers/search_drawer/SearchDrawer";
import { CartDrawer } from "./navbar_drawers/cart_drawer/CartDrawer";
import { HeaderNavBar } from "./header_navbar/HeaderNavBar";
import { ProfileDialog } from "./navbar_drawers/profile_dialog/ProfileDialog";
import { getCookie } from "../../services/data/cookies/cookieFunctions";
import { toast } from "react-toastify";

export const Header = () => {
  const [hamMenueDrawerOpen, setHamMenueDrawerOpen] = useState(false);
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);
  const [bagDialogOpen, setBagDialogOpen] = useState(false);

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
      if (getCookie("loggedIn") === "true") toast.success(`You're logged in!`);
      else setProfileDrawerOpen(true);
    },
    close: () => {
      setProfileDrawerOpen(false);
    },
  };

  const handleClickBagDialog = {
    open: () => {
      setBagDialogOpen(true);
    },
    close: () => {
      setBagDialogOpen(false);
    },
  };

  return (
    <HeaderContainer>
      <HeaderNavBar
        openHamMenue={handleClickHamMenueDrawer.open}
        openSearch={handleClickSearchDrawer.open}
        openProfile={handleClickProfileDrawer.open}
        openBag={handleClickBagDialog.open}
      />
      <HamburgerDrawer
        open={hamMenueDrawerOpen}
        handleClose={handleClickHamMenueDrawer.close}
      />
      <SearchDrawer
        open={searchDrawerOpen}
        handleClose={handleClickSearchDrawer.close}
      />
      <ProfileDialog
        open={profileDrawerOpen}
        handleClose={handleClickProfileDrawer.close}
      />
      <CartDrawer
        open={bagDialogOpen}
        handleClose={handleClickBagDialog.close}
      />
    </HeaderContainer>
  );
};

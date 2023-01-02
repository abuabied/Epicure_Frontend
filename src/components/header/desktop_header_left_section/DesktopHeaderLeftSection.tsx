import { Tabs, Tab } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { EpicureMainLogo } from "../../shared/epicure_main_logo/EpicureMainLogo";
import { RowContainer } from "../../shared/helper_components/MyContainers";

export const DesktopHeaderLeftSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let tab = location.pathname.slice(
    location.pathname.indexOf("/") + 1,
    location.pathname.length
  );
  if(tab.indexOf("/") !== -1)
    tab = tab.slice(0, tab.indexOf("/"))
  

  const tabTextStyle = {
    color: "black",
    fontSize: "18px",
    fontWeight: 200,
    lineHeight: "22px",
    letterSpacing: "2px",
    textAlign: "center",
    paddingTop: 0,
    paddingBottom: 0,
    marginLeft: "5px",
    textTransform: "none",
    "&.Mui-selected": {
      color: "#000000",
    },
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToRestaurants = () => {
    navigate("/restaurants");
  };
  const goToChefs = () => {
    navigate("/chefs");
  };

  return (
    <RowContainer>
      <Tabs
        value={tab === "" ? false : tab}
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#DE9200E5",
          },
        }}
      >
        <EpicureMainLogo onClick={goToHome} />
        <Tab
          sx={tabTextStyle}
          label="Restaurants"
          value={"restaurants"}
          onClick={goToRestaurants}
        />
        <Tab
          sx={tabTextStyle}
          label="Chefs"
          value={"chefs"}
          onClick={goToChefs}
        />
      </Tabs>
    </RowContainer>
  );
};

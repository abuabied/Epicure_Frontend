import { Box } from "@mui/material";
import { HeroText } from "../../shared/helper_components/Texts";
import { SearchBar } from "../../shared/search_bar/SearchBar";
import { HeroSectionContainer } from "./styles";

export const HeroSection = () => {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    opacity: "88%",
    padding: "3%",
    width: "content",
    maxWidth: { xs: "85%", sm: "80%", md: "75%", lg: "60%" },
    textAlig: "center",
    alignItems: "center",
    height: { xs: "fit-content", sm: "fit-content", md: "30%", lg: "30%" },
    maxHeight:  "150px",
  };

  return (
    <HeroSectionContainer>
      <Box sx={boxStyle}>
        <HeroText>
          Epicure works with the top chef restaurants in Tel Aviv
        </HeroText>
        <SearchBar />
      </Box>
    </HeroSectionContainer>
  );
};

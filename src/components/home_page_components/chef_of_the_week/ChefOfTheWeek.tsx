import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Chef } from "../../../constants/interfaces";
import { ChefImage } from "../../shared/chef_image/ChefImage";
import {
  EmptyLine,
  TripleEmptyLines,
} from "../../shared/helper_components/EmptyLines";
import {
  ColumnContainer,
  NoStyleContainer,
} from "../../shared/helper_components/MyContainers";
import { ContainerTitle } from "../../shared/helper_components/Texts";
import { ChefRestaurantsContainer } from "./ChefRestaurantContainer";

export const ChefOfTheWeek = (args: {chef: Chef}) => {

  const textStyle = {
    display: "block",
    maxHeight: "content",
    fontStyle: "normal",
    fontSize: { xs: "18px", sm: "24px" },
    fontWeight: "200",
    lineHeight: { xs: "32px", sm: "37px" },
    letterSpacing: "1.25px",
    marginLeft: { xs: 0, sm: 0, md: "1rem", lg: "1.5rem" },
    width: { xs: "100%", sm: "100%", md: "50%", lg: "65%" },
    textAlign: "left",
  };

  const boxStyle = {
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", sm: "column", md: "row" },
  };

  return (
    <ColumnContainer>
      <ContainerTitle title="chef of the week:" />
      <NoStyleContainer>
        <EmptyLine />
        <Box sx={boxStyle}>
          <ChefImage chef={args.chef} />
          <EmptyLine />
          <Typography component="div" sx={textStyle}>
            {args.chef?.description}
          </Typography>
        </Box>
      </NoStyleContainer>
      <TripleEmptyLines />
      <ChefRestaurantsContainer chef={args.chef} />
    </ColumnContainer>
  );
};

import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Chef } from "../../../constants/interfaces";
import {
  getAllChefs,
  getNewChefs,
  getPopularChefs,
} from "../../../services/data_fetch/ChefsDataFetch";
import { ChefImage } from "../../shared/chef_image/ChefImage";
import { NoStyleContainer } from "../../shared/helper_components/MyContainers";

export const ChefsCardContainer = () => {
  const chefsCategory = useSelector(
    (state: any) => state.chefsCategoryTab.value
  );

  const [chefsList, setChefsList] = useState([]);

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    margin: "3rem",
    padding: { xs: 0, sm: 0, md: 0, lg: 0 },
    justifyContent: "center",
    flexWrap: "wrap",
  };

  useEffect(() => {
    getAllChefs().then((res) => setChefsList(res));
  }, []);

  useEffect(() => {
    const getChefs = async () => {
      try {
        switch (chefsCategory) {
          case "all":
            await getAllChefs().then((res) => setChefsList(res));
            break;
          case "new":
            await getNewChefs().then((res) => setChefsList(res));
            break;
          case "popular":
            await getPopularChefs().then((res) => setChefsList(res));
            break;
          default:
            setChefsList([]);
            break;
        }
      } catch (error) {
        setChefsList([]);
      }
    };
    getChefs();
  }, [chefsCategory]);

  return (
    <NoStyleContainer style={{ display: "flex", justifyContent: "center" }}>
      <Container sx={containerStyle}>
        {chefsList.map((chef: Chef) => (
          <ChefImage chef={chef} key={chef.name} />
        ))}
      </Container>
    </NoStyleContainer>
  );
};

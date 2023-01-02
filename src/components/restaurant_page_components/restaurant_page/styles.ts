import styled from "styled-components";

export const RestaurantPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 500px) {
    padding: 48px 0;
    padding-bottom: 0;
  }
  @media (min-width: 501px) {
    padding: 48px 4rem;
    padding-bottom: 0;
  }
  @media (min-width: 800px) {
    padding: 0 6rem;
  }
`;



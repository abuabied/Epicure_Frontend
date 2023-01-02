import styled from "styled-components";

export const NoStyleContainer = styled.div``;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  max-width: 100%;
  @media (min-width: 768px) {
    margin: 3rem;
  }
  @media (min-width: 1000px) {
    margin: 5rem;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RestaurantsColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  max-width: 100%;
  @media (min-width: 768px) {
    margin: 3rem;
  }
  @media (min-width: 1000px) {
    margin: 5rem;
  }
`;

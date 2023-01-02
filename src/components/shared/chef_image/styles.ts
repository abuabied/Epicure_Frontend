import styled from "styled-components";

export const ImageBox = styled.div`
  display: flex;
  margin-right: 1rem;
  flex-direction: column;
  justify-content: flex-end;
  width: 230px;
  height: 230px;
  @media (min-width: 500px) {
    width: 290px;
    height: 290px;
  }
  @media (min-width: 700px) {
    width: 310px;
    height: 310px;
  }
  @media (min-width: 1000px) {
    width: 350px;
    height: 350px;
  }
`;

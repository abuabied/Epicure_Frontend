import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #FFFFFF;
  height: 50px;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1% 4%;
  @media (min-width: 769px) {
    padding: 0 5%;
  }
`;

export const LeftSection = styled.div`
  width: 30%;
  @media (min-width: 769px) {
    width: 70%;
  }
`;

export const MiddleSection = styled.div`
  width: 30%;
  text-align: center;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  @media (min-width: 769px) {
    width: 20%;
  }
`;

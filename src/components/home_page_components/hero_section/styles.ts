import styled from "styled-components";
import HeroImgDesktop from "./../../../assets/site-imgs/hero-pictureDesktop.svg";
import HeroImgMobile from "./../../../assets/site-imgs/hero-pictureMobile.svg";


export const HeroSectionContainer = styled.div`
  background-image: url("${HeroImgMobile}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: fit-content;
  height: 40vh;
  max-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding-buttom: 1rem;
  @media (min-width: 769px) {
    background-image: url("${HeroImgDesktop}");
    height: 80vh;
    max-height: 80vh;
    margin-top: 0;
  }
`;

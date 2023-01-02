import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { FooterDiv, HeaderDiv, Page, PageContent } from "./styles";

export const Layout = () => {

  return (
    <Page>
      <HeaderDiv>
        <Header />
      </HeaderDiv>

      <PageContent>
        <Outlet />
      </PageContent>

      <FooterDiv>
        <Footer />
      </FooterDiv>
    </Page>
  );
};

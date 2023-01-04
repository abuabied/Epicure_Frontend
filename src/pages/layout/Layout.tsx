import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { FooterDiv, HeaderDiv, Page, PageContent } from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer position="bottom-right" autoClose={3000} />
    </Page>
  );
};

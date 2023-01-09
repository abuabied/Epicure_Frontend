import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { FooterDiv, HeaderDiv, Page, PageContent } from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOnGoingOrder } from "../../services/data/dishes/dishesInOrderSlicer";

export const Layout = () => {
  const dispatch = useDispatch();
  const initOnGoingOrder = () => {
    const currentItemsJson = window.localStorage.getItem("bagItems");
    let currentItems = [];
    if (currentItemsJson) currentItems = JSON.parse(currentItemsJson);
    if (currentItems?.length > 0) {
      dispatch(setOnGoingOrder(currentItems));
    }
  };

  useEffect(() => {
    initOnGoingOrder();
  }, [])
  
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
      <ToastContainer position="bottom-right" autoClose={2000} />
    </Page>
  );
};

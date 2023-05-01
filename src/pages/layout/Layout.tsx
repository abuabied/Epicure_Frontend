import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { FooterDiv, HeaderDiv, Page, PageContent } from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDishesInOrder } from "../../services/data/dishes/orderSlicer";

export const Layout = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const initOnGoingOrder = () => {
    const currentItemsJson = window.localStorage.getItem("bagItems");
    let currentItems = [];
    if (currentItemsJson) currentItems = JSON.parse(currentItemsJson);
    if (currentItems?.length > 0) {
      dispatch(setDishesInOrder(currentItems));
    }
  };
    initOnGoingOrder();
  }, [dispatch])
  
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

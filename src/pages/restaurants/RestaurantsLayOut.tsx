import { Outlet } from "react-router-dom";
import { Page, PageContent } from "../layout/styles";

export const RestaurantsLayOut = () => {
  return (
    <Page>
      <PageContent>
        <Outlet />
      </PageContent>
    </Page>
  );
};
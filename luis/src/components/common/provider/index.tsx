import { BrowserRouter } from "react-router-dom";
import Router from "../../router";
import { GlobalStyles } from "../../../styles/globals";
import Layout from "../layout";
import Header from "../header";
import { RecoilRoot } from "recoil";

const Provider = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyles />
        <Layout>
          <Header />
          <Router />
        </Layout>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Provider;

import { BrowserRouter } from "react-router-dom";
import Router from "../../router";
import { GlobalStyles } from "../../../styles/globals";
import Layout from "../layout";
import Header from "../header";

const Provider = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Header />
        <Router />
      </Layout>
    </BrowserRouter>
  );
};

export default Provider;

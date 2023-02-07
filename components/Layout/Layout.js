import React, { Children } from "react";
import { FormattedMessage } from "react-intl";
import Footer from "../footer/Footer";
import Header from "../navigation/Header";
import Navigation from "../Navigation/Navigation";
import SwitchLangues from "../Switch/SwitchLangues";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navigation
        button={<FormattedMessage id="navigation.header.button" />}
        link="#"
      />
      <SwitchLangues />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

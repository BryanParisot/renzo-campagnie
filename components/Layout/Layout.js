import React, { Children } from "react";
import Footer from "../footer/Footer";
import Header from "../navigation/Header";
 import Navigation from "../Navigation/Navigation";
import SwitchLangues from "../Switch/SwitchLangues";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navigation />
      <SwitchLangues />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

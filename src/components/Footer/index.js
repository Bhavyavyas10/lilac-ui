import React from "react";
import Info from "./Info";
import Links from "./QuickLinks";
import Customer from "./CustomerArea";
import Vendor from "./VendorArea";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div style={styles.main}>
      <Info />
      <Links />
      <Customer />
      <Vendor />
      <Contact />
    </div>
  );
};

const styles = {
  main: {
    display: "flex",
    flexDirection: "row",
    margin: "40px 260px",
  },
};

export default Footer;

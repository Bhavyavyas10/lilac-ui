import React from "react";

const Customer = () => {
  return (
    <div style={styles.main}>
      <h3 style={styles.head}>
        <b>CUSTOMER AREA</b>
      </h3>
      <div style={styles.links}>
        <h6 style={styles.head}>My Account</h6>
        <h6 style={styles.head}>Orders</h6>
        <h6 style={styles.head}>Tracking List</h6>
        <h6 style={styles.head}>Terms</h6>
        <h6 style={styles.head}>Privacy Policy</h6>
        <h6 style={styles.head}>Return Policy</h6>
        <h6 style={styles.head}>My Cart</h6>
      </div>
    </div>
  );
};

const styles = {
  main: {
    margin: "-20px 20px",
    display: "flex",
    flexDirection: "column",
  },
  links: {
    display: "flex",
    margin: "10px 0px",
    flexDirection: "column",
    fontSize: "13px",
    color: "#8d8d8d",
  },
  head: {
    fontSize: "13px",
  },
};

export default Customer;

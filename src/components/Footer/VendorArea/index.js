import React from "react";

const Vendor = () => {
  return (
    <div style={styles.main}>
      <h3 style={styles.head}>
        <b>VENDOR AREA</b>
      </h3>
      <div style={styles.links}>
        <h6 style={styles.head}>Partner with us</h6>
        <h6 style={styles.head}>Training</h6>
        <h6 style={styles.head}>Procedures</h6>
        <h6 style={styles.head}>Terms</h6>
        <h6 style={styles.head}>Privacy Policy</h6>
      </div>
    </div>
  );
};

const styles = {
  main: {
    margin: "-20px 20px",
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",
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

export default Vendor;

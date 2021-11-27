import React from "react";

const Links = () => {
  return (
    <div style={styles.main}>
      <h3 style={styles.head}>
        <b>QUICK LINKS</b>
      </h3>
      <div style={styles.links}>
        <h6 style={styles.head}>Products</h6>
        <h6 style={styles.head}>Classifieds</h6>
        <h6 style={styles.head}>Contact us</h6>
        <h6 style={styles.head}>Log in</h6>
        <h6 style={styles.head}>Sign up</h6>
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

export default Links;

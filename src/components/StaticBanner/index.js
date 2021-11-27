import React from "react";
import BG from "../../asstes/images/banners/bg.png";
import Watch from "../../asstes/images/products/watch_1.png";

const StaticBanner = () => {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.textDiv}>
        <h2 style={{ color: "white" }}>
          <b>Flash Sale</b>
        </h2>
        <h5 style={{ color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </h5>
        <h2 style={{ color: "white" }}>
          <b>05 : 42 : 19 : 54</b>
        </h2>
      </div>
      <div style={styles.productCard}>
        <div>
          <img src={Watch} alt="Watch" height="80px" width="50px" />
        </div>
        <div>
          <p>Casio G-Shock Ana-Digi Quartz World Time 200m Black</p>
          <p style={{ color: "#3187ed", margin: "-15px 0" }}>$33.3</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "200px",
    backgroundImage: `url(${BG})`,
    backgroundColor: "#3187ed",
    margin: "40px 250px",
    borderRadius: "5px",
  },
  textDiv: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "450px",
  },
  productCard: {
    height: "100px",
    width: "300px",
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "10px",
    display: "flex",
  },
};

export default StaticBanner;

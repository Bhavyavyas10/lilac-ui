import React from "react";
import Mac from "../../asstes/images/products/mac.png";
import Laptop from "../../asstes/images/products/laptop.png";
import Perfume from "../../asstes/images/products/perfume.png";
import Camera from "../../asstes/images/products/camera.png";
import Casual from "../../asstes/images/products/casual.png";

const Recommanded = () => {
  return (
    <div style={styles.main}>
      <div style={styles.container}>
        <h4>
          <b>Recommanded</b>
        </h4>
        <div className="controller">
          <div className="left">
            <div className="leftArrow"></div>
          </div>
          <div className="right">
            <div className="rightArrow"></div>
          </div>
        </div>
      </div>
      <div style={styles.productList}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="left">
            <div className="leftArrow"></div>
          </div>
        </div>
        <div style={styles.mainContainer} className="Main">
          <div style={styles.imageContainer}>
            <img src={Mac} alt="1" style={styles.imageSize} />
          </div>
          <p style={{ padding: "0px 10px" }}>
            iPhone 12 With Facetime 128GB Blue 5G Specs{" "}
          </p>
          <div style={styles.bottomPos}>
            <p style={styles.price}>$1,245.33</p>
          </div>
          <div style={styles.bottomSection}>
            <p style={{ textDecorationLine: "line-through" }}>$1,300</p>
            <p style={{ color: "#3187ed" }}>4.5</p>
          </div>
        </div>
        <div style={styles.mainContainer} className="Main">
          <div style={styles.imageContainer}>
            <img src={Camera} alt="1" style={styles.imageSize} />
          </div>
          <p style={{ padding: "0px 10px" }}>
            EOS M200 Mirrorless Came ra With EF-M 15-45mm ...{" "}
          </p>
          <div style={styles.bottomPos}>
            <p style={styles.price}>$1,245.33</p>
          </div>
          <div style={styles.bottomSection}>
            <p style={{ textDecorationLine: "line-through" }}>$1,300</p>
            <p style={{ color: "#3187ed" }}>4.5</p>
          </div>
        </div>
        <div style={styles.mainContainer} className="Main">
          <div style={styles.imageContainer}>
            <img src={Laptop} alt="1" style={styles.imageSize} />
          </div>
          <p style={{ padding: "0px 10px" }}>Ultra Book Thin Laptop XL-01 </p>
          <div style={styles.bottomPos}>
            <p style={styles.priceOne}>$1,245.33</p>
          </div>
          <div
            style={{
              marginTop: "-60px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                padding: "0px 10px",
                textDecorationLine: "line-through",
              }}
            >
              $1,300
            </p>
            <p style={{ color: "#3187ed", padding: "0 10px 0 0" }}>4.5</p>
          </div>
        </div>
        <div style={styles.mainContainer} className="Main">
          <div style={styles.imageContainer}>
            <img src={Perfume} alt="1" style={styles.imageSize} />
          </div>
          <p style={{ padding: "0px 10px" }}>Magic Perfume </p>
          <div style={styles.bottomPos}>
            <p style={styles.priceTwo}>$1,245.33</p>
          </div>
          <div
            style={{
              marginTop: "-80px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                padding: "0px 10px",
                textDecorationLine: "line-through",
              }}
            >
              $1,300
            </p>
            <p style={{ color: "#3187ed", padding: "0 10px 0 0" }}>4.5</p>
          </div>
        </div>
        <div style={styles.mainContainer} className="Main">
          <div style={styles.imageContainer}>
            <img src={Casual} alt="1" style={styles.imageSize} />
          </div>
          <p style={{ padding: "0px 10px" }}>Convers Gray </p>
          <div style={styles.bottomPos}>
            <p style={styles.priceThree}>$1,245.33</p>
          </div>
          <div
            style={{
              marginTop: "-80px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                padding: "0px 10px",
                textDecorationLine: "line-through",
              }}
            >
              $1,300
            </p>
            <p style={{ color: "#3187ed", padding: "0 10px 0 0" }}>4.5</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="right">
            <div className="rightArrow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    margin: "40px 250px",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "#3187ed",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    height: "330px",
    width: "170px",
    borderRadius: "5px",
    margin: "0px 7px",
  },
  imageContainer: {
    display: "flex",
    height: "130px",
    width: "170px",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
  },
  imageSize: {
    height: "130px",
    width: "170px",
  },
  price: {
    color: "#3187ed",
    fontSize: "18px",
  },
  priceOne: {
    color: "#3187ed",
    lineHeight: "4.3",
    fontSize: "18px",
  },
  priceTwo: {
    color: "#3187ed",
    lineHeight: "6.6",
    fontSize: "18px",
  },
  priceThree: {
    color: "#3187ed",
    lineHeight: "6.5",
    fontSize: "18px",
  },
  productList: {
    display: "flex",
    flexDirection: "row",
  },
  bottomSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0px 10px",
    margin: "-30px 0 0 0",
  },
  bottomPos: {
    display: "flex",
    padding: "0px 10px",
  },
};

export default Recommanded;

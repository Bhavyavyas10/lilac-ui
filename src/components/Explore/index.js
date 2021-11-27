import React from "react";
import ClassifiedButton from "../Button/ClassifiedButton";
import Image_1 from "../../asstes/images/products/image_1.png";
import Image_2 from "../../asstes/images/products/image_2.png";
import Image_3 from "../../asstes/images/products/image_3.png";
import Image_4 from "../../asstes/images/products/image_4.png";
import Cursor from "../../asstes/images/icons/cursor.png";
import "./style.css";

const Explore = () => {
  return (
    <div style={styles.container}>
      <div>
        <center>
          <h4>
            <b>Classified</b>
          </h4>
        </center>
        <h4>
          <b>Products on</b>
        </h4>
        <center>
          <h4>
            <b>the week</b>
          </h4>
        </center>
        <div className="controller">
          <div className="left">
            <div className="leftArrow"></div>
          </div>
          <div className="right">
            <div className="rightArrow"></div>
          </div>
        </div>
        <center>
          <ClassifiedButton />
        </center>
      </div>
      <div style={styles.mainContainer} className="Main">
        <div style={styles.imageContainer}>
          <img src={Image_1} alt="1" style={styles.imageSize} />
        </div>
        <p style={{ padding: "0px 10px" }}>
          Holy Stone HS470 Foldable GPS RC Drone
        </p>
        <div style={styles.bottomPos}>
          <p style={styles.price}>$300.98</p>
          <div style={styles.pos}>
            <img
              src={Cursor}
              alt="position"
              height="15px"
              width="15px"
              style={{ marginTop: "17px" }}
            />
            <p>Cape Hadstone</p>
          </div>
        </div>
      </div>
      <div style={styles.mainContainer} className="Main">
        <div style={styles.imageContainer}>
          <img src={Image_2} alt="1" style={styles.imageSize} />
        </div>
        <p style={{ padding: "0px 10px" }}>
          Marshall Stockwell II Portable Speaker{" "}
        </p>
        <div style={styles.bottomPos}>
          <p style={styles.price}>$300.98</p>
          <div style={styles.pos}>
            <img
              src={Cursor}
              alt="position"
              height="15px"
              width="15px"
              style={{ marginTop: "17px" }}
            />
            <p>Cape Hadstone</p>
          </div>
        </div>
      </div>
      <div style={styles.mainContainer} className="Main">
        <div style={styles.imageContainer}>
          <img src={Image_3} alt="1" style={styles.imageSize} />
        </div>
        <p style={{ padding: "0px 10px" }}>2020 Ford Mustang GT Fastback </p>
        <div style={styles.bottomPos}>
          <p style={styles.price}>$22,822</p>
          <div style={styles.pos}>
            <img
              src={Cursor}
              alt="position"
              height="15px"
              width="15px"
              style={{ marginTop: "17px" }}
            />
            <p>Cape Hadstone</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    margin: "40px 280px",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    height: "270px",
    width: "200px",
    borderRadius: "5px",
    margin: "0px 25px",
  },
  imageContainer: {
    display: "flex",
    height: "120px",
    width: "200px",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
  },
  imageSize: {
    height: "120px",
    width: "200px",
  },
  bottomPos: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 10px",
  },
  pos: {
    display: "flex",
    flexDirection: "row",
  },
  price: {
    color: "#3187ed",
  },
};

export default Explore;

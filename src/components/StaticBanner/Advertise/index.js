import React from "react";
import Image_1 from "../../../asstes/images/banners/image_1.png";
import Image_2 from "../../../asstes/images/banners/image_2.png";
import Image_3 from "../../../asstes/images/banners/image_3.png";
import Image_4 from "../../../asstes/images/banners/image_4.png";

const Advertise = () => {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.bannerPos}>
        <div
          style={{
            backgroundColor: "#3187ed",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            width: "500px",
          }}
        >
          <h1 style={{ color: "white" }}>
            {" "}
            Explore
            <br /> classifieds
          </h1>
        </div>
        <div
          style={{
            backgroundColor: "#BA55D3",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            width: "500px",
            margin: "0px 20px",
          }}
        >
          <h1 style={{ color: "white" }}>
            Add
            <br /> classifieds
          </h1>
        </div>
      </div>
      <div style={styles.bannerPos}>
        <div
          style={{
            backgroundColor: "#00ff00",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            width: "500px",
          }}
        >
          <h1 style={{ color: "white" }}>
            {" "}
            Explore <br /> Products
          </h1>
        </div>
        <div
          style={{
            backgroundColor: "#ed9121",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            width: "500px",
            margin: "0px 20px",
          }}
        >
          <h1 style={{ color: "white" }}>
            {" "}
            Partner
            <br /> With us
          </h1>
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    margin: "40px 205px",
    flexDirection: "column",
  },
  bannerPos: {
    display: "flex",
    padding: "20px",
    justifyContent: "space-evenly",
  },
  bannerOne: {
    backgroundColor: "white",
    backgroundImage: `url(${Image_1})`,
    height: "410px",
    width: "50%",
    borderTopRightRadius: "5px",
  },
  bannerTwo: {
    backgroundColor: "white",
    backgroundImage: `url(${Image_2})`,
    height: "120px",
  },
  bannerThree: {
    backgroundColor: "white",
    backgroundImage: `url(${Image_3})`,
    height: "120px",
  },
  bannerFour: {
    backgroundColor: "white",
    backgroundImage: `url(${Image_4})`,
    height: "120px",
  },
};

export default Advertise;

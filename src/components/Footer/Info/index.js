import React from "react";
import Left from "../../../asstes/images/icons/left.png";
import Right from "../../../asstes/images/icons/right.png";
import YT from "../../../asstes/images/icons/yt.png";
import IG from "../../../asstes/images/icons/ig.png";
import LD from "../../../asstes/images/icons/ln.png";
import FB from "../../../asstes/images/icons/fb.png";
import TW from "../../../asstes/images/icons/tw.png";

const Info = () => {
  return (
    <div style={styles.main}>
      <div style={styles.logo}>
        <div>
          <img src={Left} alt="logo" height="30px" width="15px" />
        </div>
        <div style={{ margin: "2px 0px" }}>
          <img src={Right} alt="logo" height="25px" width="15px" />
        </div>
        <div style={styles.fieldSpace}>
          <h3>
            <b>
              logoipsum<sup>*</sup>
            </b>
          </h3>
        </div>
      </div>
      <div style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore{" "}
      </div>
      <div style={styles.iconPannel}>
        <div style={styles.iconBody}>
          <img src={YT} alt="YT" style={styles.icon} />
        </div>
        <div style={styles.iconBody}>
          <img src={LD} alt="LD" style={styles.icon} />
        </div>
        <div style={styles.iconBody}>
          <img src={TW} alt="TW" style={styles.icon} />
        </div>
        <div style={styles.iconBody}>
          <img src={FB} alt="FB" style={styles.icon} />
        </div>
        <div style={styles.iconBody}>
          <img src={IG} alt="IG" style={styles.icon} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
  },
  fieldSpace: {
    margin: "-13px 10px",
  },
  logo: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    margin: "15px 0px",
    maxWidth: "350px",
    color: "grey",
  },
  iconPannel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: "350px",
  },
  iconBody: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    height: "20px",
    width: "20px",
  },
  icon: {
    height: "10px",
    width: "10px",
  },
};

export default Info;

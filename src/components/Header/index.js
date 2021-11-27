import React from "react";
import Phone from "../../asstes/images/icons/phone.png";
import Envelop from "../../asstes/images/icons/envelope.png";
import Vector from "../../asstes/images/icons/Vector.png";

const Header = () => {
  return (
    <div style={styles.headerBody}>
      <div style={styles.content_one}>
        <div style={styles.displays}>
          <img src={Phone} alt="phone" height="15px" width="15px" />
          <p style={styles.text}>+221 33 66 22</p>
        </div>
        <div style={styles.displays}>
          <img src={Envelop} alt="email" height="15px" width="15px" />
          <p>
            <a href="mailto:support@elextra.io" style={styles.text}>
              support@elextra.io
            </a>
          </p>
        </div>
      </div>
      <div style={styles.content_two}>
        <div style={styles.displays}>
          <img src={Vector} alt="location" height="15px" width="15px" />
          <p style={styles.text}>Locations</p>
        </div>
        <div style={styles.displays}>
          <p style={styles.text}>|</p>
        </div>
        <div style={styles.displays}>
          <p style={styles.text}>$ Dollor (US) </p>
        </div>
        <div style={styles.displays}>
          <p style={styles.text}>EN </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

const styles = {
  headerBody: {
    backgroundColor: "#3187ED",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  content_one: {
    display: "flex",
    alignItems: "center",
    margin: "0px 150px",
  },
  content_two: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    padding: "0px 10px",
    color: "white",
    textDecoration: "none",
  },
  displays: {
    display: "flex",
    alignItems: "center",
    padding: "0px 10px",
  },
};

export default Header;

import React from "react";
import ContactIcon from "../../../asstes/images/icons/contact.png";
import Apple from "../../../asstes/images/icons/apple.png";
import Play from "../../../asstes/images/icons/play.png";

const Contact = () => {
  return (
    <div style={styles.main}>
      <h3 style={styles.head}>
        <b>Contact</b>
      </h3>
      <div style={styles.text}>
        <h6 style={styles.head}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </h6>
      </div>
      <div style={styles.middle}>
        <img src={ContactIcon} alt="Chat" height="45px" width="45px" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h6 style={{ fontSize: "13px" }}>Have any question?</h6>
          <h6 style={{ fontSize: "13px", color: "#3187ed" }}>+ 123 456 789</h6>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #3187ed",
            padding: "15px",
            color: "#3187ed",
            borderRadius: "5px",
          }}
        >
          CHAT
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "#232323",
            flexDirection: "row",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <img src={Apple} alt="Apple" height="35px" width="35px" />
          <div style={{ paddingLeft: "5px" }}>
            <center>
              <h6 style={{ fontSize: "10px", color: "white" }}>
                Download on the
              </h6>
            </center>
            <center>
              <h6 style={{ fontSize: "10px", color: "white" }}>
                <b>App Store</b>
              </h6>
            </center>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "#232323",
            flexDirection: "row",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <img src={Play} alt="Google" height="35px" width="35px" />
          <div style={{ paddingLeft: "5px" }}>
            <center>
              <h6 style={{ fontSize: "10px", color: "white" }}>
                Download on the
              </h6>
            </center>
            <center>
              <h6 style={{ fontSize: "10px", color: "white" }}>
                <b>Google Play</b>
              </h6>
            </center>
          </div>
        </div>
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
  head: {
    fontSize: "13px",
  },
  text: {
    display: "flex",
    margin: "10px 0px",
    flexDirection: "column",
    fontSize: "13px",
    color: "#8d8d8d",
  },
  middle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export default Contact;

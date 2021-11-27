import React from "react";
import News from "../../asstes/images/icons/news.png";

const NewsLetter = () => {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.content}>
        <img src={News} alt="News" height="70px" width="70px" />
        <div style={{ maxWidth: "800px", padding: "0px 100px" }}>
          <h2 style={{ color: "white" }}>
            <b>Sign Up for Newsletter</b>
          </h2>
          <h6 style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
        </div>
        <div style={styles.right}>
          <input placeholder="Enter your email here" style={styles.input} />
          <div style={styles.subscribeButton}>SUBSCRIBE</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    margin: "40px 0px",
    width: "100%",
    backgroundColor: "#3187ed",
    height: "150px",
  },
  content: {
    display: "flex",
    margin: "0px 260px",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    border: "none",
    outline: "none",
  },
  subscribeButton: {
    backgroundColor: "#4d4d4d",
    height: "40px",
    padding: "10px",
    borderRadius: "5px",
    color: "white",
  },
  right: {
    display: "flex",
    backgroundColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "700px",
    height: "60px",
    borderRadius: "5px",
  },
};

export default NewsLetter;

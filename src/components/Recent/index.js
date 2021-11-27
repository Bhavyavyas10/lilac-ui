import React from "react";
import { Container, Row, Col } from "react-grid-system";
import StarRating from "../StarRating";
import SmartWatch from "../../asstes/images/products/sw.png";
import Xbox from "../../asstes/images/products/xbox.png";
import Watch from "../../asstes/images/products/watch.png";
import Shoes from "../../asstes/images/products/shoes.png";
import HeadPhone from "../../asstes/images/products/headphone.png";

import "./style.css";

const Recent = () => {
  return (
    <div style={styles.main}>
      <div style={styles.container}>
        <h4>
          <b>Recently viewed</b>
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
      <Container fluid style={{ margin: "0px 80px" }}>
        <Row style={{ paddingLeft: "150px" }}>
          <Col sm={2} style={{ padding: "0px 15px 0 0" }}>
            <div style={styles.productContainer}>
              <div>
                <img src={SmartWatch} alt="Band" style={styles.productImage} />
              </div>
              <div style={styles.colWidth}>
                <p style={{ lineHeight: "1.6" }}>
                  Fitness and activity Tracker
                </p>
                <p style={styles.productPrice}>$33.3</p>
                <StarRating />
              </div>
            </div>
          </Col>
          <Col sm={2} style={{ padding: "0px 15px 0 0" }}>
            <div style={styles.productContainer}>
              <div>
                <img src={Xbox} alt="Band" style={styles.productImage} />
              </div>
              <div style={styles.colWidth}>
                <p style={{ lineHeight: "2.19" }}>Xbox White Joystick</p>
                <p style={styles.productPrice}>$98.4</p>
                <StarRating />
              </div>
            </div>
          </Col>
          <Col sm={2} style={{ padding: "0px 15px 0 0" }}>
            <div style={styles.productContainer}>
              <div>
                <img src={HeadPhone} alt="Band" style={styles.productImage} />
              </div>
              <div style={styles.colWidth}>
                <p style={{ lineHeight: "3.3" }}>Super Boost Headphones</p>
                <p style={styles.productPrice}>$33.3</p>
                <StarRating />
              </div>
            </div>
          </Col>
          <Col sm={2} style={{ padding: "0px 15px 0 0" }}>
            <div style={styles.productContainer}>
              <div>
                <img src={Shoes} alt="Band" style={styles.productImage} />
              </div>
              <div style={styles.colWidth}>
                <p style={{ lineHeight: "2.19" }}>X-Ray 2 Square PACK</p>
                <p style={styles.productPrice}>$33.3</p>
                <StarRating />
              </div>
            </div>
          </Col>
          <Col sm={2} style={{ padding: "0px 15px 0 0" }}>
            <div style={styles.productContainer}>
              <div>
                <img src={Watch} alt="Band" style={styles.productImage} />
              </div>
              <div style={styles.colWidth}>
                <p style={{ lineHeight: "2.08" }}>AX1326 Automatic Analog</p>
                <p style={styles.productPrice}>$33.3</p>
                <StarRating />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const styles = {
  main: {
    display: "flex",
    margin: "40px 280px",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productContainer: {
    display: "flex",
    maxWidth: "250px",
    maxHeight: "250px",
  },
  productPrice: {
    color: "#3187ed",
  },
  colWidth: {
    margin: "0px -3px",
  },
  star: {
    height: "10px",
    width: "10px",
  },
  productImage: {
    height: "100px",
    width: "80px",
  },
};

export default Recent;

import React from "react";
import { Container, Row, Col } from "react-grid-system";
import StarRating from "../../StarRating";
import SmartWatch from "../../../asstes/images/products/sw.png";
import Xbox from "../../../asstes/images/products/xbox.png";
import Watch from "../../../asstes/images/products/watch.png";
import Tshirt from "../../../asstes/images/products/tshirt.png";
import Shoes from "../../../asstes/images/products/shoes.png";
import PlayStation from "../../../asstes/images/products/playstation.png";
import Mouse from "../../../asstes/images/products/mouse.png";
import HeadPhone from "../../../asstes/images/products/headphone.png";
import Fridge from "../../../asstes/images/products/fridge.png";
import Airpodes from "../../../asstes/images/products/airpodes.png";

const BrandProduct = () => {
  return (
    <Container fluid style={styles.container}>
      <Row>
        <Col sm={2} style={{ padding: "0px 20px 0 0" }}>
          <div style={styles.productContainer}>
            <div>
              <img src={SmartWatch} alt="Band" style={styles.productImage} />
            </div>
            <div style={styles.colWidth}>
              <p style={{ lineHeight: "1.6" }}>Fitness and activity Tracker</p>
              <p style={styles.productPrice}>$33.3</p>
              <StarRating />
            </div>
          </div>
        </Col>
        <Col sm={2} style={{ padding: "0px 20px 0 0" }}>
          <div style={styles.productContainer}>
            <div>
              <img src={Xbox} alt="Band" style={styles.productImage} />
            </div>
            <div style={styles.colWidth}>
              <p style={{ lineHeight: "2.4" }}>Xbox White Joystick</p>
              <p style={styles.productPrice}>$98.4</p>
              <StarRating />
            </div>
          </div>
        </Col>
        <Col sm={2} style={{ padding: "0px 20px 0 0" }}>
          <div style={styles.productContainer}>
            <div>
              <img src={HeadPhone} alt="Band" style={styles.productImage} />
            </div>
            <div style={styles.colWidth}>
              <p style={{ lineHeight: "2.4" }}>Super Boost Headphones</p>
              <p style={styles.productPrice}>$33.3</p>
              <StarRating />
            </div>
          </div>
        </Col>
        <Col sm={2} style={{ padding: "0px 20px 0 0" }}>
          <div style={styles.productContainer}>
            <div>
              <img src={Shoes} alt="Band" style={styles.productImage} />
            </div>
            <div style={styles.colWidth}>
              <p style={{ lineHeight: "2.4" }}>X-Ray 2 Square PACK</p>
              <p style={styles.productPrice}>$33.3</p>
              <StarRating />
            </div>
          </div>
        </Col>
        <Col sm={2} style={{ padding: "0px 20px 0 0" }}>
          <div style={styles.productContainer}>
            <div>
              <img src={Watch} alt="Band" style={styles.productImage} />
            </div>
            <div style={styles.colWidth}>
              <p style={{ lineHeight: "1.6" }}>AX1326 Automatic Analog</p>
              <p style={styles.productPrice}>$33.3</p>
              <StarRating />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={2} style={{ padding: "0px 20px 0 0" }}>
          <div style={styles.productContainer}>
            <div>
              <img src={Airpodes} alt="Band" style={styles.productImage} />
            </div>
            <div style={styles.colWidth}>
              <p style={{ lineHeight: "2.9" }}>Ice White Airpods</p>
              <p style={styles.productPrice}>$521.3</p>
              <StarRating />
            </div>
          </div>
        </Col>
        <Col sm={2} style={{ padding: "0px 20px 0 0" }}>
          <div style={styles.productContainer}>
            <div>
              <img src={Mouse} alt="Band" style={styles.productImage} />
            </div>
            <div style={styles.colWidth}>
              <p style={{ lineHeight: "1.99" }}>Hazor Mouse Gaming</p>
              <p style={styles.productPrice}>$21.3</p>
              <StarRating />
            </div>
          </div>
        </Col>
        <Col sm={2} style={{ padding: "0px 20px 0 0" }}>
          <div style={styles.productContainer}>
            <div>
              <img src={Fridge} alt="Band" style={styles.productImage} />
            </div>
            <div style={styles.colWidth}>
              <p style={{ lineHeight: "2.9" }}>LG 260 L 3 Star Frost</p>
              <p style={styles.productPrice}>$333.3</p>
              <StarRating />
            </div>
          </div>
        </Col>
        <Col sm={2} style={{ padding: "0px 20px 0 0" }}>
          <div style={styles.productContainer}>
            <div>
              <img src={Tshirt} alt="Band" style={styles.productImage} />
            </div>
            <div style={styles.colWidth}>
              <p style={{ lineHeight: "1.9" }}>Levi's Men's Printed T-Shirt</p>
              <p style={styles.productPrice}>$33.3</p>
              <StarRating />
            </div>
          </div>
        </Col>
        <Col sm={2} style={{ padding: "0px 20px 0 0" }}>
          <div style={styles.productContainer}>
            <div>
              <img src={PlayStation} alt="Band" style={styles.productImage} />
            </div>
            <div style={styles.colWidth}>
              <p style={{ lineHeight: "1.9" }}>SONY PLAYSTATION 5</p>
              <p style={styles.productPrice}>$322.3</p>
              <StarRating />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  container: {
    margin: "20px 300px",
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

export default BrandProduct;

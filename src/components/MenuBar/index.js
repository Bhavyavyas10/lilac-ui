import React from "react";
import DropDown from "../Dropdown/ClassFieldDropdown";
import Search from "../SearchBar";
import ClassifiedButton from "../Button/ClassifiedButton";
import Left from "../../asstes/images/icons/left.png";
import Right from "../../asstes/images/icons/right.png";
import Heart from "../../asstes/images/icons/heart.png";
import Cart from "../../asstes/images/icons/cart.png";
import Profile from "../../asstes/images/icons/profile.png";

const Menu = () => {
  return (
    <div style={styles.conatainer}>
      <div>
        <img src={Left} alt="logo" height="30px" width="15px" />
      </div>
      <div>
        <img src={Right} alt="logo" height="25px" width="15px" />
      </div>
      <div style={styles.fieldSpace}>
        <h3>
          <b>
            logoipsum<sup>*</sup>
          </b>
        </h3>
      </div>
      <div style={styles.fieldSpace}>
        <DropDown />
      </div>
      <div style={styles.fieldSpace}>
        <Search />
      </div>
      <div style={styles.iconSpace}>
        <img src={Heart} alt="Favourite" style={styles.image} />
      </div>
      <div style={styles.iconSpace}>
        <img src={Cart} alt="Cart" style={styles.image} />
      </div>
      <div style={styles.iconSpace}>
        <img src={Profile} alt="Profile" style={styles.image} />
      </div>
      <div>
        <ClassifiedButton />
      </div>
    </div>
  );
};

const styles = {
  conatainer: {
    display: "flex",
    alignItems: "center",
    margin: "30px 420px",
  },
  image: {
    height: "23px",
    width: "23px",
  },
  iconSpace: {
    margin: "0px 20px",
  },
  fieldSpace: {
    margin: "0px 10px",
  },
};

export default Menu;

import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./style.css";

const options = ["one", "two", "three"];

const dropDown = () => {
  return (
    <Dropdown
      options={options}
      placeholder="ClassFields"
      controlClassName="myControlClassName"
      arrowClassName="myArrowClassName"
    />
  );
};

export default dropDown;

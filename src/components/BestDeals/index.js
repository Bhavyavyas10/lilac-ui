import React from "react";
import DealHeader from "./Header";
import BrandProduct from "./Products";

const BestDeals = () => {
  return (
    <>
      <DealHeader />
      <div style={{ marginLeft: "150px" }}>
        <BrandProduct />
      </div>
    </>
  );
};

export default BestDeals;

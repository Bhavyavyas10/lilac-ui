import React from "react";

const DealHeader = () => {
  return (
    <div style={styles.container}>
      <h4>
        <b>Best Deals</b>
      </h4>
      <div>
        <h4 style={styles.text}>
          <b>View all</b>
        </h4>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "40px 280px",
  },
  text: {
    color: "#3187ed",
  },
};

export default DealHeader;

import React from "react";
import Star from "../asstes/images/icons/star.png";

const StarRating = () => {
  return (
    <div>
      <img src={Star} alt="rating" style={styles.star} />
      <img src={Star} alt="rating" style={styles.star} />
      <img src={Star} alt="rating" style={styles.star} />
      <img src={Star} alt="rating" style={styles.star} />
    </div>
  );
};

const styles = {
  star: {
    height: "10px",
    width: "10px",
  },
};

export default StarRating;

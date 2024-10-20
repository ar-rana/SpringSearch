import React from "react";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className="">
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.frontView}>Front of card</div>
          <div className={styles.backView}>
            <h2>Back of card</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

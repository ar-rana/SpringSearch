import React from "react";
import styles from "./card.module.css";

const Card = (props) => {
  return (
    <div className="">
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.frontView}>
            <img src={props.imgSrc}/>
            {props.front}
          </div>
          <div className={styles.backView}>
            <h3>{props.back}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

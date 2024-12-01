import React from "react";
import styles from "./codecard.module.css";

const Codecard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.code}>
        <pre>
          <code>{props.code}</code>
        </pre>
      </div>
      <div className={styles.text}>
        {props.text}
      </div>
    </div>
  );
};

export default Codecard;

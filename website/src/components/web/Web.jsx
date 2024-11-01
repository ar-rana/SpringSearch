import React from "react";
import styles from "./web.module.css";
import Codecard from "../CodeCard/Codecard";

const Web = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.subheading}>
          <h1>Spring </h1>
          <span> Search</span>
        </div>
        <p>Web Apps & Rest</p>
      </div>
      <div className={styles.info}>
      <Codecard />
      </div>
    </div>
  );
};

export default Web;

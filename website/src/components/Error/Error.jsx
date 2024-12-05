import React from "react";
import styles from "./error.module.css";
import error from "../../assets/error.webp";

const Error = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <img src={error} />
        <span>Page Not Found!!!</span>
      </div>
    </div>
  );
};

export default Error;

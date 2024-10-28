import React, { useEffect } from "react";
import styles from "./jdbc.module.css";
import InfoCard from "../infoCard/InfoCard";

const Jdbc = () => {
  return (
    <div className="">
      <div className={styles.header}>
        <div className={styles.subheading}>
          <h1>Spring </h1>
          <span> Search</span>
        </div>
        <p>Relational Databases and JDBC</p>
      </div>
      <div className={styles.info}>
        <div className={styles.heading}>
          <h1>Java Database Connectivity</h1>
          <h2>JDBC</h2>
        </div>
        <div className={styles.data}>
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.heading}>
          <h1>Relational Database</h1>
          <h2>SQL</h2>
        </div>
        <div className={styles.data}>
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </div>
    </div>
  );
};

export default Jdbc;

import React from 'react';
import styles from "./aop.module.css";
import HCard from '../horizontalCard/HCard';
import HCard2 from '../horizontalCard/HCard2';

const Aop = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.subheading}>
          <h1>Spring </h1>
          <span> Search</span>
        </div>
        <p>Aspect Oriented Programming</p>
      </div>
      <div className={styles.info}>
        <HCard/>
        <HCard2/>
        <HCard/>
        <HCard2/>
      </div>
    </div>
  )
}

export default Aop;

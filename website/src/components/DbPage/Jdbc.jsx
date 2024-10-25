import React, { useEffect } from "react";
import styles from "./jdbc.module.css";

const Jdbc = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(styles.show);
              entry.target.classList.remove(styles.hidden);
            }, index * 200);
          } else {
            entry.target.classList.remove(styles.show);
            entry.target.classList.add(styles.hidden);
          }
        });
      },
      { threshold: 0.4 }
    );

    const showElements = document.querySelectorAll(`.${styles.snippet}`);
    showElements.forEach((ele) => observer.observe(ele));

    return () => {
      showElements.forEach((ele) => observer.unobserve(ele));
    };
  }, []);

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
          <div className={styles.snippet}>
            <img src="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, a
              id repellendus veniam, ducimus praesentium expedita voluptatem
              ipsam harum reiciendis cupiditate. Temporibus ducimus reiciendis
              dolor debitis! Incidunt aspernatur impedit distinctio?
            </p>
          </div>
          <div className={styles.snippet}>
            <img src="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, a
              id repellendus veniam, ducimus praesentium expedita voluptatem
              ipsam harum reiciendis cupiditate. Temporibus ducimus reiciendis
              dolor debitis! Incidunt aspernatur impedit distinctio?
            </p>
          </div>
          <div className={styles.snippet}>
            <img src="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, a
              id repellendus veniam, ducimus praesentium expedita voluptatem
              ipsam harum reiciendis cupiditate. Temporibus ducimus reiciendis
              dolor debitis! Incidunt aspernatur impedit distinctio?
            </p>
          </div>
          <div className={styles.snippet}>
            <img src="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, a
              id repellendus veniam, ducimus praesentium expedita voluptatem
              ipsam harum reiciendis cupiditate. Temporibus ducimus reiciendis
              dolor debitis! Incidunt aspernatur impedit distinctio?
            </p>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.heading}>
          <h1>Relational Database</h1>
          <h2>SQL</h2>
        </div>
        <div className={styles.data}>
          <div className={styles.snippet}>
            <img src="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, a
              id repellendus veniam, ducimus praesentium expedita voluptatem
              ipsam harum reiciendis cupiditate. Temporibus ducimus reiciendis
              dolor debitis! Incidunt aspernatur impedit distinctio?
            </p>
          </div>
          <div className={styles.snippet}>
            <img src="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, a
              id repellendus veniam, ducimus praesentium expedita voluptatem
              ipsam harum reiciendis cupiditate. Temporibus ducimus reiciendis
              dolor debitis! Incidunt aspernatur impedit distinctio?
            </p>
          </div>
          <div className={styles.snippet}>
            <img src="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, a
              id repellendus veniam, ducimus praesentium expedita voluptatem
              ipsam harum reiciendis cupiditate. Temporibus ducimus reiciendis
              dolor debitis! Incidunt aspernatur impedit distinctio?
            </p>
          </div>
          <div className={styles.snippet}>
            <img src="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, a
              id repellendus veniam, ducimus praesentium expedita voluptatem
              ipsam harum reiciendis cupiditate. Temporibus ducimus reiciendis
              dolor debitis! Incidunt aspernatur impedit distinctio?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jdbc;

import React, { useEffect } from "react";
import styles from "./infocard.module.css";

const InfoCard = (props) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(styles.show);
              entry.target.classList.remove(styles.hidden);
            }, index * 150);
          } else {
            entry.target.classList.remove(styles.show);
            entry.target.classList.add(styles.hidden);
          }
        });
      },
      { threshold: 0.5 }
    );

    const showElements = document.querySelectorAll(`.${styles.snippet}`);
    showElements.forEach((ele) => observer.observe(ele));

    return () => {
      showElements.forEach((ele) => observer.unobserve(ele));
    };
  }, []);

  return (
    <div>
      <div className={styles.snippet}>
        <img src="" />
        <p>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;

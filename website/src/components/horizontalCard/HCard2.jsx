import React, { useEffect } from "react";
import styles from "./hcard.module.css";

const HCard2 = (props) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
            entry.target.classList.remove(styles.hidden);

            const children = Array.from(entry.target.children);
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add(styles.show);
                child.classList.remove(styles.hidden);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    const showElements = document.querySelectorAll(`.${styles.card}`);
    showElements.forEach((ele) => observer.observe(ele));

    return () => {
      showElements.forEach((ele) => observer.unobserve(ele));
    };
  }, []);

  return (
    <div>
      <div className={`${styles.card} ${styles.hidden}`}>
        <div className={`${styles.info} ${styles.hidden}`}>
          <h2>{props.title}</h2>
          <br />
          <p>{props.text}</p>
        </div>
        <div className={`${styles.Img_Container} ${styles.hidden}`}>
        <img src={props.img} />
        </div>
      </div>
    </div>
  );
};

export default HCard2;

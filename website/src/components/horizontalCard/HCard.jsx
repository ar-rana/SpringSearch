import React, { useEffect } from "react";
import styles from "./hcard.module.css";
import blob from "../../assets/blob.svg";

const HCard = () => {
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
        <div className={`${styles.Img_Container} ${styles.hidden}`}>
          <img src={blob} />
        </div>
        <div className={`${styles.info} ${styles.hidden}`}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
            veniam repellendus qui ex voluptatem reprehenderit? At placeat,
            officiis beatae id doloribus porro perspiciatis nihil ad rerum
            commodi magni provident quo. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Enim veniam repellendus qui ex voluptatem
            reprehenderit? At placeat, officiis beatae id doloribus porro
            perspiciatis nihil ad rerum commodi magni provident quo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HCard;

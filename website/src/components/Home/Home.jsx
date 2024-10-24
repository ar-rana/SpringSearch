import React, { useEffect } from "react";
import styles from "./home.module.css";
import springLeaf from "../../assets/springLeaf.png";
import bootButton from "../../assets/bootButton.png";
import Card from "../card/Card";

const Home = () => {
  const springInfo =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis animi assumenda porro, magnam nobis ea voluptates! Ad necessitatibus accusantium nisi, natus, eaque suscipit ut doloremque tenetur ullam quibusdam quo alias.";
  const springBootInfo =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis animi assumenda porro, magnam nobis ea voluptates! Ad necessitatibus accusantium nisi, natus, eaque suscipit ut doloremque tenetur ullam quibusdam quo alias.";

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add(styles.show); 
//         }
//       });
//     });

//     const showElements = document.querySelectorAll(`.${styles.hidden}`);
//     showElements.forEach((ele) => observer.observe(ele));

//     return () => {
//       showElements.forEach((ele) => observer.unobserve(ele));
//     };
//   }, []);

  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.Img_Container}>
          <img src={springLeaf} height="350" width="350" />
        </div>
        <div className={styles.hero_text}>
          <h1>SpringSearch</h1>
          <div className={styles.subheading}>
            <h2>Learn </h2>
            <span> Spring</span>
          </div>
          <h2>Fundamentals</h2>
        </div>
      </div>
      <div className={styles.info}>
        <h1>What is Spring?</h1>
        <div className={styles.subInformation}>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            dolore accusantium pariatur laudantium cum voluptates enim ipsa rem
            quae! Voluptate accusantium rem cumque, laborum assumenda incidunt
            omnis modi praesentium vitae!
          </span>
        </div>
      </div>
      <div className={styles.info}>
        <h1>Difference Between Spring and SpringBoot</h1>
        <div className={styles.infoCard}>
          <Card front={"Spring"} back={springInfo} imgSrc={springLeaf} />
          <h1>v/s</h1>
          <Card
            front={"SpringBoot"}
            back={springBootInfo}
            imgSrc={bootButton}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

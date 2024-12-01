import React, { useEffect } from "react";
import styles from "./home.module.css";
import springLeaf from "../../assets/springLeaf.png";
import bootButton from "../../assets/bootButton.png";
import Card from "../card/Card";

const Home = () => {
  const springInfo =
    "Spring is a tool that helps to create a loosely coupled application. It requires a lot of boiler plate code to even run a small task with its main feature being dependency injection. ";
  const springBootInfo =
    "Spring Boot is an extension of Spring framework, it can be used to create a production read stand-alone application in very less time. Spring Boot is auto-configured thus its easier to use and comes with its own features like starter dependencies. Spring Boot is widely used in developing REST API's. ";

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
            Spring is an open-source light weight framework that allows java
            developer to build simple, reliable and scalable enterprise
            applications. This framework utilizes various techniques like Aspect
            Oriented Programming (AOP), Dependency Injection, Plain Old Java
            Objects to develop an application. Spring can be said as a bundle of
            sub-framework, also called layers like AOP, Spring ORM, Spring Web
            Flow and Spring MVC. These modules can be used separately to create
            web applications.
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

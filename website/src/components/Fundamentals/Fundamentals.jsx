import React from "react";
import styles from "./fundamentals.module.css";
import HCard from "../horizontalCard/HCard";
import HCard2 from "../horizontalCard/HCard2";
import di from "../../assets/DI.svg";
import ioc from "../../assets/IoC.svg";
import bean from "../../assets/bean.svg";
import aa from "../../assets/aa.svg";

const Fundamentals = () => {
  const data = [
    "IOC is a design principal where you give the control of object creation and management to someone else. The Spring framework gives this control to a container called the IoC container, this container keeps all the created objects. IoC is used in one of the most important features of Spring, dependency Injection.",
    "DI is a process whereby object define their dependecies only through constructor arguments, like this you can create an object of another class and inject it into the current class. Code is cleaner with the DI principle, and decoupling is more effective when objects are provided with their dependencies. ",
    `Beans is an object created by the Spring framework, it is stored within the IOC container and thus it is also assembled and managed by the Spring IoC. Beans can be create using multiple techniques like annotaions, XML configuration or in a seperate class using @Configuration, @Bean annotation.`,
    `Spring Boot Annotations are a form of metadata that provide information about the spring application they can be used to create beans using annotaions like "@Component, @Service, @Repository etc. Autowiring is a feature of Spring that enables you to inject object dependency implicitly. It internally uses constructor injection.`
  ];
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.subheading}>
          <h1>Spring </h1>
          <span> Search</span>
        </div>
        <p>Fundamentals</p>
      </div>
      <div>
        <HCard title={"Inversion of Control (IOC)"} text={data[0]} img={ioc}/>
        <HCard2 title={"Dependency Injection (DI)"} text={data[1]} img={di}/>
        <HCard title={"Beans"} text={data[2]} img={bean}/>
        <HCard2 title={"Autowiring & Annotations"} text={data[3]} img={aa}/>
      </div>
    </div>
  );
};

export default Fundamentals;

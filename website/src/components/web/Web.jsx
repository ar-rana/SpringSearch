import React from "react";
import styles from "./web.module.css";
import InfoCard from "../infoCard/InfoCard";
import Card from "../card/Card";
import springMVC from "../../assets/springMVC.png";
import springWevflux from "../../assets/springWebflux.png";

const Web = () => {
  const webText = [
    "Spring has multiple dependencied to create a fully functional and scalable applications. But in the background Spring MVC used old technologies like Java Servlets and other old primitive java technologies.",
    `Java Servlet API, It lets you define HTTP-specific classes. Although java Servlet API can handle nay type of request they are generally used in web applications. Servlets run independently on server side without any GUI of their own. Java servlet extensions make many applications possible.`,
    `Java Server Pages or jakrata server pages are java technology that allows uses to create dynamic web pages for a web application on the server side of the architecture. JSP technology lets uses add snippets of servlet code directly into a text based document.`,
  ];

  const archiType = [
    "It is a classic web framework used widely to create applications, it follows the MVC architecture (model-view-controller). Spring MVC handles requests synchronously which means one at a time and only one thread handles all the work, this may cause delays if there are too many requests at a time.",
    "Spring Webflux is another way of creating a web application, where Spring MVC handles requests in a single thread. WebFlux uses reactive web framework introduced in Spring 5 and works on a non-blocking asynchronous model. It is designed for apps that need to handle large number of request and respond fast."
  ];

  const RESText = [
    "There is more than one way to build and consume APIs. Some architecture types that you may come across are REST, GraphQL, gRPC. The most popular out of all these is REST, we will be discussing in brief about what is REST?. Representational state transfer, aka REST, was introduced in 2000 in rRoy Fielding’s dissertation. REST is an architectural style meant for building scalable web applications.",
    "Rest works in a client-server architecture, it is layered meaning that the client when requesting the data is only aware of the immediate application from which it is getting the request and not any other app/service/DB where that application may be communicating to. Singular things, like json data arrays, in the case of our application, are called resources in RESTful thinking.",
    "REST is stateless, it means one server will get requests from multiple clients and it also means that one server will get multiple requests from the same client as well. It treats all the clients for the same request in the same uniform manner.",
    "In short, REST is a set of guidelines that define how exchange between client and server architecture should happen and how data states should be exchanged between client and server. "
  ]

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.subheading}>
          <h1>Spring </h1>
          <span> Search</span>
        </div>
        <p>Web Apps & Rest</p>
      </div>
      <div className={styles.info}>
        <InfoCard text={webText[0]} />
        <InfoCard text={webText[1]} />
        <InfoCard text={webText[2]} />
      </div>
      <div className={styles.info}>
        <h1>Difference Between Spring MVC and Spring WebFlux</h1>
        <div className={styles.infoCard}>
          <Card imgSrc={springMVC} front={"Spring MVC"} back={archiType[0]}/>
          <h1>v/s</h1>
          <Card imgSrc={springWevflux} front={"Spring WebFlux"} back={archiType[1]}/>
        </div>
      </div>
      <div className={styles.info}>
        <h1>REST API</h1>
        <InfoCard text={RESText[0]} />
        <InfoCard text={RESText[1]} />
        <InfoCard text={RESText[2]} />
        <InfoCard text={RESText[3]} />
      </div>
    </div>
  );
};

export default Web;

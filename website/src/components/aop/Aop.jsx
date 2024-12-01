import React from "react";
import styles from "./aop.module.css";
import HCard3 from "../horizontalCard/HCard3";

const Aop = () => {
  const data = [
    "A point during the execution of a program, such as the execution of a method or the handling of an exception. In Spring AOP, a join point always represents a method execution.",
    "Action taken by an aspect at a particular join point. Different types of advice include 'around', 'before', and 'after' advice. Many AOP frameworks, including Spring, model an advice as an interceptor and maintain a chain of interceptors around the join point.",
    "A modularization of a concern that cuts across multiple classes. Transaction management is a good example of a crosscutting concern in enterprise Java applications. In Spring AOP, aspects are implemented by using regular classes or regular classes annotated with the @Aspect annotation.",
    "A predicate that matches join points. Advice is associated with a pointcut expression and runs at any join point matched by the pointcut (for example, the execution of a method with a certain name). The concept of join points as matched by pointcut expressions is central to AOP, and Spring uses the AspectJ pointcut expression language by default.",
    "An object being advised by one or more aspects. Also referred to as the 'advised object'. Since Spring AOP is implemented by using runtime proxies, this object is always a proxied object.",
    "Linking aspects with other application types or objects to create an advised object. This can be done at compile time (using the AspectJ compiler), load time, or at runtime. Spring AOP, like other pure Java AOP frameworks, performs weaving at runtime.",
    "An object created by the AOP framework in order to implement the aspect contracts (advice method executions and so on). In the Spring Framework, an AOP proxy is a JDK dynamic proxy or a CGLIB proxy.",
    "Declaring additional methods or fields on behalf of a type. Spring AOP lets you introduce new interfaces (and a corresponding implementation) to any advised object. An introduction is known as an inter-type declaration in the AspectJ community."
  ]
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
        <h1>Aspect Oriented Programming (AOP)</h1>
        <div className={styles.subInformation}>
          <span>
            AOP addresses the problem of cross-cutting concerns, which means
            that any kind of code that is repeated in diffrent methods and can't
            normally be comletely refactored into its own module.  AOP is
            modularization of an concern that cuts across multiple classes
            example logging, security, transition management, validation.
          </span>
        </div>
      </div>
      <div className={styles.info}>
        <HCard3 title={"Joint Point"} text={data[0]}/>
        <HCard3 title={"Aspect"} text={data[2]}/>
        <HCard3 title={"Advice"} text={data[1]}/>
        <HCard3 title={"Pointcut"} text={data[3]}/>
        <HCard3 title={"Target Object"} text={data[4]}/>
        <HCard3 title={"Weaving"} text={data[5]}/>
        <HCard3 title={"Proxy"} text={data[6]}/>
        <HCard3 title={"Introduction"} text={data[7]}/>
      </div>
    </div>
  );
};

export default Aop;

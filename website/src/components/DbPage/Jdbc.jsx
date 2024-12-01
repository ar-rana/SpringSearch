import React, { useEffect } from "react";
import styles from "./jdbc.module.css";
import InfoCard from "../infoCard/InfoCard";
import Codecard from "../CodeCard/Codecard";

function ParentComponent(props) {
  // Convert newlines to <br /> tags in the text
  const formattedText = props.text.split("\r\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return <InfoCard text={formattedText} />;
}

const Jdbc = () => {
  const JdbcText = `This code snippet is used to connect Java to a MySQL database through the 'DriverManager' class. Here instead of 'Statement' we can also use something called the 'PreparedStatement' to make the calls to the database more secure. After the read query is made to the database a 'ResultSet' Object is returned that stores the data returned by the database. 'Root' is the default username for MySQL database and we have to load the driver class 'com.mysql.cj.jdbc.Driver' which is the MYSQL JDBC driver. 'Class.forName("com.mysql.cj.jdbc.Driver")' call explicitly loads the driver class into memory which helps the 'DriverManager to manage connection.'`;

  const code = `
  import java.io.*;,
  String url = "mysql:jdbc://localhost:3306/students";
  String password = "YourPassword";
  String usernmae = "root";
                
  ResultSet resultset;
  String query = "Select * from students;";
                
  try {
    Class.forName("com.mysql.cj.jdbc.Driver");

    Conncetion con = DriverManager.getConnection(url, username, password);

    Statement st = con.createStatement();

    resultset = st.executeQuery(query);

    while (resultset.next()) {
      System.out.println(resultset.getString(1) + " " + resultset.getString(2) + " " resultset.getString(3));
    }

    } catch (Exception e) {
      e.preintStackTrace();
    }
  }`;

  const Text = [
    "Java Database Connectivity (JDBC) is an application programming interface (API) that is used to connect Java programming language to a database. It is a Java-based technology used for Java database connectivity. It is an enterprise application built using Java EE technology.",
    `Components of JDBC:\r\n
    1) JDBC API\r\n
       The java.sql package contains interfaces and classes of JDBC API. It provides various methods and interfaces for communication between the database and the application. It contains Java SE and Java EE platforms for WORA (Write Once Run Anywhere) functionality.\r\n
    \r\n
     2) JDBC Driver Manager\r\n
       It loads the database-specific driver in an application to establish a connection with the database. Every database will have its own driver; it makes database-specific calls to process user requests.\r\n
    \r\n
     3) JDBC Test Suite\r\n
       Used to test operations like CRUD(create, read, update, delete) operations performed by the JDBC Driver.\r\n
    \r\n  
     4) JDBC-ODBC Bridge Driver\r\n
       - It is used to connect the database driver to the database. It translates JDBC API calls to ODBC function calls. It is generally used in databases that have ODBC drivers embedded in them.\r\n`,
  ];

  const RDBText = [
    "Relational databases are a type of databases that follow a fixed schema, Relational databases are based on the relational model to represent related data into an tabular fashion. Here Data is store in form of rows and columns it ensures garbage or null values are not inserted into the DB and all other schema constrains are followed.",
    "Relational Databases follow a principal known as ACID properties, A for Atomicity, C for Consistency, I for Isolation and D for Durability. Relational Databases are used for various information needs like tracking inventories, Prodessing E-Commerce transactions and managing customer information",
    "A (Atomicity) : A transaction in a database either happens completely or it doesn't happen at all. \r\n C (Consistency) : At any given point of time the state of the database will be consistent, reads happening at the same time will get the same response. \r\n I (Isolation) : It ensures the concurrent transactions do not interfere with each other and the result should be such that they were executed sequentially. \r\n D (Durability) : Changes that have been committed to the database should remain even in the case of software and system failure.",
  ];

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
          <Codecard code={code} text={JdbcText} />
          <InfoCard text={Text[0]} />
          <ParentComponent text={Text[1]} />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.heading}>
          <h1>Relational Database</h1>
          <h2>SQL</h2>
        </div>
        <div className={styles.data}>
          <InfoCard text={RDBText[0]} />
          <InfoCard text={RDBText[1]} />
          <ParentComponent text={RDBText[2]} />
        </div>
      </div>
    </div>
  );
};

export default Jdbc;

import React from "react";
import styles from "./codecard.module.css";

const Codecard = () => {
  const obj = `{
        "uri": "",
        "data": [
            {
            "id": "57dafe43317467e7b0ef5276",
            "projectId": "54c17e92e4b0bc49e27d9398",
            "started": 1473969754283,
            "completed": 1473969762970,
            "diagnosticStatistics": {
                "data": [
                {
                    "key": "R^2",
                    "value": "1.000"
                }
                ]
            },
            "isCompleted": true,
            }
        ]
    }`;

  return (
    <div className={styles.container}>
      <div className={styles.code}>
        <pre>
          <code>{obj}</code>
        </pre>
      </div>
      <div className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea recusandae
        quia expedita enim ipsam repellat impedit iure. Labore maxime ipsum,
        quod delectus at, deleniti iure accusantium odit quas temporibus
        incidunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
        recusandae, delectus quaerat ab ut reprehenderit deleniti blanditiis
        unde, incidunt enim natus aliquid eligendi, assumenda quisquam facere
        non nostrum consequuntur maiores.
      </div>
    </div>
  );
};

export default Codecard;

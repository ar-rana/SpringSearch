import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className="container">
      <div className={`${styles.spacer} ${styles.layer1}`}>
        <div className={styles.footer}>
          <div className={styles.connect}>
            <p>Connect With Me:</p>
            <div className={styles.media}>
              <a href="https://github.com/ar-rana" target="_blank">
                <img
                  className={styles.img}
                  src="https://skillicons.dev/icons?i=github"
                  alt="Github"
                />
              </a>
              <a href="https://www.linkedin.com/in/-aryan-rana" target="_blank">
                <img
                  className={styles.img}
                  src="https://skillicons.dev/icons?i=linkedin"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
          <div className={styles.box}>
            <p>Hellos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

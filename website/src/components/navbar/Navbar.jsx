import React, { useState } from "react";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const navActive = () => {
    setActive((prev) => !prev);
  }

  return (
    <div className={style.nav_Container}>
      <div className={`${style.nav_responsive} ${active ? style.active : ""}`}>
        <ul>
          <li><a href="/aop">AOP</a></li>
          <li><a href="/webapprest">Web-App & REST</a></li>
          <li><a href="/jdbc">JDBC</a></li>
          <li><a href="/fundamentals">Fundamentals</a></li>
        </ul>
        <img onClick={navActive} className={`${style.nav_btn} ${active ? style.active : ""}`} src={menu}/> 
      </div>
      <div className={style.navbar}>
        <div className={style.leftItems}>
          <a href="/">
            <Button />
          </a>
        </div>
        <div className={style.rightItems}>
          <Link to="/aop">
            <button>AOP</button>
          </Link>
          <Link to="/webapprest">
            <button>Web-App & REST</button>
          </Link>
          <Link to="/jdbc">
            <button>JDBC</button>
          </Link>
          <Link to="/fundamentals">
            <button>Fundamentals</button>
          </Link>
        </div>
      </div>
      <div className={style.wave}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={style.fill}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;

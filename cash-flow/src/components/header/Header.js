import React from "react";
import styles from "./Header.module.css";
import Period from "../period/Period";

const Header = ({pageName}) => {
  return(
    <div className={styles.container}>
      <h1>{pageName}</h1>
      <Period period="01/05/24"/>
    </div>
  )
};

export default Header;

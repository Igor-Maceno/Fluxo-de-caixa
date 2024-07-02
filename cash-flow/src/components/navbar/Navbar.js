import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li>Fluxo de caixa</li>
        <li>Estacionamento</li>
        <li>Relatório</li>
        <li>Configurações</li>
        <li>Sair</li>
      </ul>
    </nav>
  );
};

export default Navbar;

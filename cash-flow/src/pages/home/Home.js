import React from "react";
import styles from "./Home.module.css";

//hooks
import { useState } from "react";

//components
import Header from "../../components/header/Header";

const Home = () => {
  const [value, setValue] = useState();
  const [category, SetCategory] = useState();
  const [type, SetType] = useState("Entrada");
  console.log("Valor: ", value);
  return (
    <div className={styles.container}>
      <Header pageName="Fluxo de caixa" />
      <form action="">
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => SetCategory(e.target.value)}
        />
        <input
          type="text"
          value={type}
          onChange={(e) => SetType(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Home;

import React from "react";
import Container from "react-bootstrap/Container";
import Tarjeta from "./Tarjeta";
// import "./Uno.scss";
import styles from "./Uno.module.scss";
import cx from "classnames";
import data from "./data";

function Uno() {
  return (
    <Container
      as="main"
      fluid
      className={cx(styles["contenedor"], "p-0", "m-0")}
    >
      <header className={cx(styles["header"])}>
        <h2 className={cx(styles["header__titulo-claro"])}>
          Realible, efficient delivery{" "}
          <span className={cx(styles["header__titulo-oscuro"])}>
            Powered by Technology
          </span>
        </h2>
        <p className={cx(styles["header__descripcion"])}>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <section className={cx(styles["tarjetas"])}>
        {data.map((datosTarjeta) => {
          return <Tarjeta key={datosTarjeta.id} {...datosTarjeta}></Tarjeta>;
        })}
      </section>
    </Container>
  );
}
export default Uno;

/** App.scss */
// .app {
//   background: red;
// }
/** App.jsx */

// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'import styles from './App.scss'class App extends Component {
//   render() {
//     return (
//       <div className={styles.app}>Hello App!</div>
//     )
//   }
// }

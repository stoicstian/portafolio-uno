import React from "react";
import Search from "./Search";
import Container from "react-bootstrap/Container";
import styles from "./Dos.module.scss";
import cx from "classnames";
import logo from "./img/logo.svg";
import heroMobile from "./img/hero-mobile.jpg";

function Dos(): JSX.Element {
  return (
    <Container
      as="main"
      fluid
      className={cx(styles["contenedor"], "p-0", "m-0")}
    >
      <img src={logo} alt="logo" className={cx(styles["logo"])} />
      <img src={heroMobile} alt="mujer" className={cx(styles["imagen"])} />
      <section className={cx(styles["presentacion"])}>
        <h1 className={cx(styles["presentacion__titulo"])}>
          WE'RE COMING SOON
        </h1>
        <p className={cx(styles["presentacion__descripcion"])}>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        {/* <Search></Search> */}
      </section>
    </Container>
  );
}

export default Dos;

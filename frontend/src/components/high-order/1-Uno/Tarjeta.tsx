import React from "react";
import styles from "./Tarjeta.module.scss";
import cx from "classnames";
import { IData } from "./data";

function Tarjeta({ id, titulo, descripcion, imagen }: IData): JSX.Element {
  let tarjetaColor = (tarjetaTitulo: string) => {
    console.log(tarjetaTitulo.toLowerCase);
    if (tarjetaTitulo.toLowerCase() === "supervisor") {
      return styles["tarjeta_color_cian"];
    } else if (tarjetaTitulo.toLowerCase() === "team builder") {
      return styles["tarjeta_color_rojo"];
    } else if (tarjetaTitulo.toLowerCase() === "calculator") {
      return styles["tarjeta_color_azul"];
    } else if (tarjetaTitulo.toLowerCase() === "karma") {
      return styles["tarjeta_color_naranja"];
    }
  };

  let tarjetaPush = (id: number): string => {
    // return styles["tarjeta_naranja"];
    if (id % 2 !== 0) {
      return styles["tarjeta_posicion_abajo"];
    } else {
      return "";
    }
  };

  return (
    <article
      className={cx(styles["tarjeta"], tarjetaColor(titulo), tarjetaPush(id))}
    >
      <h2 className={styles["tarjeta__titulo"]}>{titulo}</h2>
      <p className={cx(styles["tarjeta__descripcion"])}>{descripcion}</p>
      <img src={imagen} alt="error" className={cx(styles["tarjeta__imagen"])} />
    </article>
  );
}

export default Tarjeta;

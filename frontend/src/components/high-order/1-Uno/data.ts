import supervisor from "./img/icon-supervisor.svg";
import teamBuilder from "./img/icon-team-builder.svg";
import calculator from "./img/icon-calculator.svg";
import karma from "./img/icon-karma.svg";

export interface IData {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
}

let data: IData[] = [
  {
    id: 1,
    titulo: "Supervisor",
    descripcion: "Monitors activity to identify project roadblocks",
    imagen: supervisor,
  },

  {
    id: 2,
    titulo: "Team Builder",
    descripcion:
      "Scans our talent network to create the optimal team for your project",
    imagen: teamBuilder,
  },

  {
    id: 3,
    titulo: "Calculator",
    descripcion:
      "Uses data from past projects to provide better delivery estimates",
    imagen: calculator,
  },

  {
    id: 4,
    titulo: "Karma",
    descripcion: "Regularly evaluates our talent to ensure quality",
    imagen: karma,
  },
];

export default data;

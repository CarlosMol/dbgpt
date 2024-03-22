import routes from "./routes";

const menu = {
  items: [
    {
      icon: "mdi-chart-line",
      text: "Panel de Control",
      route: routes.dashboard,
    },
    {
      icon: "mdi-table-large",
      text: "Tablas",
      isGroup:true,
      subItems: [
        { icon:"mdi-table", text: "Estudiantes", route: routes.estudiantes },
        { icon:"mdi-table", text: "Profesores", route: routes.profesores },
        { icon:"mdi-table", text: "Materias", route: routes.materias },
        { icon:"mdi-table", text: "Matriculas", route: routes.matriculas },
        ],
    },
    {
      icon: "mdi-message-text-outline",
      text: "Asistente",
      route: routes.asistente,
    },
    // {
    //   icon: "mdi-message-text",
    //   text: "GPT",
    //   route: routes.chat,
    // },
  ],
};

export default menu;

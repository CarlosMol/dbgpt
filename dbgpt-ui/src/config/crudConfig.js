export default {
    Estudiantes: {
      form: require("@/static/forms/formEstudiantes.json"),
      service: require("@/api/EstudiantesService.js").default,
      headers: [
        { text: "ID", value: "ID" },
        { text: "Nombre", value: "Nombre" },
        { text: "Apellido", value: "Apellido" },
        { text: "Acciones", value: "actions", sortable: false },
      ],
    },
    Profesores: {
      form: require("@/static/forms/formProfesores.json"),
      service: require("@/api/ProfesoresService.js").default,
      headers: [
        { text: "ID", value: "ID" },
        { text: "Nombre", value: "Nombre" },
        { text: "Apellido", value: "Apellido" },
        { text: "Acciones", value: "actions", sortable: false },
      ],
    },
    Materias: {
      form: require("@/static/forms/formMaterias.json"),
      service: require("@/api/MateriasService.js").default,
      headers: [
        { text: "ID", value: "ID" },
        { text: "Nombre", value:"Nombre"},
        { text: "Descripción", value:"Descripcion"},
        { text: "Acciones", value: "actions", sortable: false },
      ],
    },
    Matriculas: {
      form: require("@/static/forms/formMatriculas.json"),
      service: require("@/api/MatriculasService.js").default,
      headers: [
        { text: "ID", value: "ID" },
        { text: "ID_Estudiante", value: "ID_Estudiante" },
        { text: "ID_Materia", value: "ID_Materia" },
        { text: "ID_Profesor", value: "ID_Profesor" },
        { text: "Fecha Matricula",value:"FechaMatricula"},
        { text: "Acciones", value: "actions", sortable: false },
      ],
    },
  };
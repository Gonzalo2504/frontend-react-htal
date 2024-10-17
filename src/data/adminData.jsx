import { getPacientes } from "../api/admin/adminRequest";

export const dataAdmin = [
      {
        label: "Pacientes",
        value: "pacientes",
        desc: `En esta seccion podras consultar, eliminar, editar y crear pacientes.`,
        btns: [
            {
              color : "blue",
              texto: "Ver Pacientes",
              onClick: getPacientes,
            },
            {
              color : "green",
              texto: "Crear Paciente",
              onClick: () => console.log("Crear paciente"),
            },
            {
              color : "yellow",
              texto: "Editar Paciente",
              onClick: () => console.log("Editar paciente"),
            },
            {
              color : "red",
              texto: "Borrar Paciente",
              onClick: () => console.log("Borrar paciente"),
            },
          ],
      },
      {
        label: "Medicos",
        value: "medicos",
        desc: `En esta seccion podras consultar, eliminar, editar y crear cuentas de medicos.`,
        btns: [
            {
              color : "blue",
              texto: "Ver Medicos",
              onClick: () => console.log("Crear paciente"),
            },
            {
              color : "green",
              texto: "Crear Medico",
              onClick: () => console.log("Crear paciente"),
            },
            {
              color : "yellow",
              texto: "Editar Medico",
              onClick: () => console.log("Editar paciente"),
            },
            {
              color : "red",
              texto: "Borrar Medico",
              onClick: () => console.log("Borrar paciente"),
            },
          ]      },
      {
        label: "Enfermeros",
        value: "enfermeros",
        desc: `En esta seccion podras consultar, eliminar, editar y crear cuentas de enfermeros.`,
        btns: [
            {
              color : "blue",
              texto: "Ver Enfermeros",
              onClick: () => console.log("Crear paciente"),
            },
            {
              color : "green",
              texto: "Crear Enfermero",
              onClick: () => console.log("Crear paciente"),
            },
            {
              color : "yellow",
              texto: "Editar Enfermero",
              onClick: () => console.log("Editar paciente"),
            },
            {
              color : "red",
              texto: "Borrar Enfermero",
              onClick: () => console.log("Borrar paciente"),
            },
          ]      }
    ];

/**
 * dataAdmin es un array de objetos que contiene la informacion de los diferentes
 * items que se muestran en el menu lateral de la pantalla de administrador.
 *
 * Cada objeto tiene las siguientes propiedades:
 * - label: string con el nombre del enlace a mostrar en la pantalla
 * - onClick: funcion que se llama cuando se selecciona el enlace y que debe
 *   devolver una promesa con los datos correspondientes a ese enlace
 * - value: string con el valor del enlace a mostrar en la pantalla
 * - desc: string con la descripcion del enlace a mostrar en la pantalla
 * - btns: array de objetos con los botones que se muestran en la pantalla para
 *   cada enlace. Cada objeto tiene las siguientes propiedades:
 *   - color: string con el color del boton (green, yellow, red)
 *   - texto: string con el texto del boton
 *   - onClick: funcion que se llama cuando se selecciona el boton y que debe
 *     devolver una promesa con los datos correspondientes a ese enlace
 *
 * El hook usePacientes utiliza este array para mostrar los pacientes correspondientes
 * a cada enlace en la pantalla de administrador.
 */
import { getMedicos, getPacientes } from "../api/admin/adminRequest";

export const dataAdmin = [
      {
        label: "Pacientes",
        onClick: getPacientes,
        value: "pacientes",
        desc: `En esta seccion podras consultar, eliminar, editar y crear pacientes.`,
        btns: [
            {
              color : "green",
              texto: "Crear Paciente",
              onClick: getPacientes,
            },
            {
              color : "yellow",
              texto: "Editar Paciente",
              onClick: getPacientes,
            },
            {
              color : "red",
              texto: "Borrar Paciente",
              onClick: getPacientes,
            },
          ],
      },
      {
        label: "Medicos",
        onClick: getMedicos,
        value: "medicos",
        desc: `En esta seccion podras consultar, eliminar, editar y crear cuentas de medicos.`,
        btns: [
            {
              color : "green",
              texto: "Crear Medico",
              onClick: getPacientes,
            },
            {
              color : "yellow",
              texto: "Editar Medico",
              onClick: getPacientes,
            },
            {
              color : "red",
              texto: "Borrar Medico",
              onClick: getPacientes,
            },
          ]      },
      {
        label: "Enfermeros",
        onClick: getPacientes,
        value: "enfermeros",
        desc: `En esta seccion podras consultar, eliminar, editar y crear cuentas de enfermeros.`,
        btns: [
            {
              color : "green",
              texto: "Crear Enfermero",
              onClick: getPacientes,
            },
            {
              color : "yellow",
              texto: "Editar Enfermero",
              onClick: getPacientes,
            },
            {
              color : "red",
              texto: "Borrar Enfermero",
              onClick: getPacientes,
            },
          ]      }
    ];

export default dataAdmin;

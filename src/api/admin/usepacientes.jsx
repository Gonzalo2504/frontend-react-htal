/**
 * Hook para obtener los pacientes de la base de datos y renderizarlos en la
 * pantalla de administrador.
 *
 * Recibe como parametro un array de objetos con los siguientes campos:
 * - label: string con el nombre del enlace a mostrar en la pantalla
 * - value: string con el valor del enlace a mostrar en la pantalla
 * - onClick: funcion que se llama cuando se selecciona el enlace y que debe
 *   devolver una promesa con los pacientes correspondientes a ese enlace
 *
 * El hook devuelve un objeto con los siguientes campos:
 * - response: array con los pacientes correspondientes a la seleccion actual
 * - selectedTab: string con el valor del enlace actualmente seleccionado
 * - setSelectedTab: funcion para cambiar el valor del enlace actualmente
 *   seleccionado
 *
 * El hook utiliza el hook de React useEffect para llamar a la funcion onClick
 * correspondiente al enlace seleccionado y obtener los pacientes correspondientes
 * a ese enlace. Cuando se selecciona un enlace diferente, se llama a la funcion
 * onClick correspondiente al nuevo enlace seleccionado y se actualiza el estado
 * del hook con los pacientes correspondientes a ese enlace.
 */
import { useState, useEffect } from "react";
export const usePacientes = (data) => {
    const [response, setPacientes] = useState([]);
    const [selectedTab, setSelectedTab] = useState(null);
  
    useEffect(() => {
      const fetchPacientes = async () => {
        const pacientesData = await data
          .find((item) => item.value === selectedTab)
          ?.onClick?.();
        setPacientes(pacientesData);
      };
      fetchPacientes();
    }, [selectedTab]);
  
    return { response, selectedTab, setSelectedTab };
  };

  export default usePacientes;

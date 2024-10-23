import { useState, useEffect } from 'react';

const useEnfermeros = (enfermeros) => {
  const [enfermerosProcesados, setEnfermerosProcesados] = useState([]);

  useEffect(() => {
    const procesarEnfermeros = () => {
      const enfermerosProcesados = enfermeros.map((enfermero) => ({
        id: enfermero.id,
        nombre: enfermero.nombre,
        apellido: enfermero.apellido,
        dni: enfermero.dni,
        email: enfermero.email,
        telefono: enfermero.telefono,
        usuario: enfermero.usuario,
        contrasena: enfermero.contrasena,
        rolId: enfermero.rol_id,
      }));
      setEnfermerosProcesados(enfermerosProcesados);
    };
    procesarEnfermeros();
  }, [enfermeros]);

  return enfermerosProcesados;
};

export default useEnfermeros;
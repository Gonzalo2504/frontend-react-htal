import { useState, useEffect } from 'react';

const useMedicos = (medicos) => {
  const [medicosProcesados, setMedicosProcesados] = useState([]);

  useEffect(() => {
    const procesarMedicos = () => {
      const medicosProcesados = medicos.map((medico) => ({
        id: medico.id,
        nombre: medico.nombre,
        apellido: medico.apellido,
        dni: medico.dni,
        especialidad: medico.especialidad,
        email: medico.email,
        telefono: medico.telefono,
        usuario: medico.usuario,
        contrasena: medico.contrasena,
        rolId: medico.rol_id,
      }));
      setMedicosProcesados(medicosProcesados);
    };
    procesarMedicos();
  }, [medicos]);

  return medicosProcesados;
};

export default useMedicos;
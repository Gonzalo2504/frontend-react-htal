import { useState, useEffect } from 'react';

const usePacientes = (pacientes) => {
  const [pacientesProcesados, setPacientesProcesados] = useState([]);

  useEffect(() => {
    const procesarPacientes = () => {
      const pacientesProcesados = pacientes.map((paciente) => ({
        id: paciente.id,
        nombre: paciente.nombre,
        apellido: paciente.apellido,
        dni: paciente.dni,
        fechaNacimiento: paciente.fecha_nacimiento,
        direccion: paciente.direccion,
        telefono: paciente.telefono,
        email: paciente.email,
        estadoAtencion: paciente.estado_atencion,
      }));
      setPacientesProcesados(pacientesProcesados);
    };
    procesarPacientes();
  }, [pacientes]);

  return pacientesProcesados;
};

export default usePacientes;
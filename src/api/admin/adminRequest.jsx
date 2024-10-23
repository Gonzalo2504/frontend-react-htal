import axios from "axios";

export const getPacientes = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/pacientes', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getMedicos = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/medicos/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getEnfermeros = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/enfermeros/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const crearPaciente = async (datos) => {
  const token = localStorage.getItem('token');
  const { nombre, apellido, dni, fecha_nacimiento, direccion, telefono, email, estado_atencion } = datos;
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/pacientes/', {
      nombre,
      apellido,
      dni,
      fecha_nacimiento,
      direccion,
      telefono,
      email,
      estado_atencion,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default { getPacientes, getMedicos, getEnfermeros, crearPaciente };


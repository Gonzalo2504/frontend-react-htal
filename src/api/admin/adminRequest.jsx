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




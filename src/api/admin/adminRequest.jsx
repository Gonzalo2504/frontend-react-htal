import token from "../../auth/auth";
import axios from "axios";

export const getPacientes = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/pacientes/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
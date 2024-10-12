import React, { useState } from "react";
import axios from "axios";
import { Card, Input, Button, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function CryptoLogin() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        usuario,
        contrasena,
      });

      const { access_token } = response.data;
      localStorage.setItem("token", access_token);

      // Decodificar el token para obtener el rol del usuario
      const decodedToken = JSON.parse(atob(access_token.split(".")[1]));
      const rol_id = decodedToken.rol_id;

      // Redirigir según el rol
      switch (rol_id) {
        case 1:
          navigate("/admin-dashboard");
          break;
        case 2:
          navigate("/medicos-dashboard");
          break;
        case 3:
          navigate("/enfermero-dashboard");
          break;
        default:
          setError("No se encontró el rol asociado");
      }
    } catch (error) {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card
        shadow={false}
        className="md:w-1/3 w-full md:px-24 md:py-14 py-8 border border-gray-300"
      >
        <CardHeader shadow={false} floated={false} className="text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-3xl lg:text-4xl"
          >
            LOGIN
          </Typography>
        </CardHeader>
        <CardBody>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 md:mt-12"
          >
            <div>
              <label htmlFor="email">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Usuario
                </Typography>
              </label>
              <Input
                id="usuario"
                color="gray"
                size="lg"
                type="text"
                name="usuario"
                placeholder="Ingrese su usuario..."
                className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
                labelProps={{
                  className: "hidden",
                }}
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="usuario">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Contraseña
                </Typography>
              </label>
              <Input
                id="password"
                color="gray"
                size="lg"
                type="password"
                name="password"
                placeholder="Ingrese su contraseña..."
                className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
                labelProps={{
                  className: "hidden",
                }}
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </div>
            {error && <p className="text-white">{error}</p>}
            <Button size="lg" color="gray" fullWidth type="submit">
              Ingresar
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}


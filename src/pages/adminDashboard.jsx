import React, { useState, useEffect } from "react";
import ComplexNavbar from "../components/nav";
import TabsDefault from "../components/pestañas";
import dataAdmin from "../data/adminData";
import {
  getPacientes,
  getMedicos,
  getEnfermeros,
} from "../api/admin/adminRequest";
import MUIDataTable from "mui-datatables";

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [activeTab, setActiveTab] = useState(" ");

  useEffect(() => {
    const fetchData = async () => {
      switch (activeTab) {
        case "pacientes":
          const pacientes = await getPacientes();
          const columnsPacientes = Object.keys(pacientes[0]).map((key) => ({
            name: key,
            selector: key,
          }));
          setColumns(columnsPacientes);
          setData(pacientes);
          break;
        case "medicos":
          const medicos = await getMedicos();
          const columnsMedicos = Object.keys(medicos[0]).map((key) => ({
            name: key,
            selector: key,
          }));
          setColumns(columnsMedicos);
          setData(medicos);
          break;
        case "enfermeros":
          const enfermeros = await getEnfermeros();
          const columnsEnfermeros = Object.keys(enfermeros[0]).map((key) => ({
            name: key,
            selector: key,
          }));
          setColumns(columnsEnfermeros);
          setData(enfermeros);
          break;
        default:
          console.log("No se encontró un caso válido");
      }
    };

    fetchData();
  }, [activeTab]);

  return (
    <div>
      <ComplexNavbar />
      <TabsDefault data={dataAdmin} setActiveTab={setActiveTab} />
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
      />
    </div>
  );
};

export default AdminDashboard;

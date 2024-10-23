import React, { useState, useEffect } from 'react';
import usePacientes from '../hooks/usePacientes';
import useMedicos from '../hooks/useMedicos';
import useEnfermeros from '../hooks/useEnfermero';
import ComplexNavbar from '../components/nav';
import TabsDefault from '../components/pestañas';
import AlertDefault from '../components/alerta';
import TableWithSearch from '../components/tabladedatos';
import dataAdmin from '../data/adminData';
import { getPacientes, getMedicos, getEnfermeros } from '../api/admin/adminRequest';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('pacientes');
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');

  const { pacientesProcesados, loadingPacientes } = usePacientes(getPacientes);
  const { medicosProcesados, loadingMedicos } = useMedicos(getMedicos);
  const { enfermerosProcesados, loadingEnfermeros } = useEnfermeros(getEnfermeros);

  useEffect(() => {
    const fetchData = async () => {
      switch (activeTab) {
        case 'pacientes':
          setData(pacientesProcesados);
          setMessage(`Pacientes: ${pacientesProcesados.length}`);
          break;
        case 'medicos':
          setData(medicosProcesados);
          setMessage(`Médicos: ${medicosProcesados.length}`);
          break;
        case 'enfermeros':
          setData(enfermerosProcesados);
          setMessage(`Enfermeros: ${enfermerosProcesados.length}`);
          break;
        default:
          break;
      }
    };
    fetchData();
  }, [activeTab, pacientesProcesados, medicosProcesados, enfermerosProcesados]);

  return (
    <div>
      <ComplexNavbar />
      <TabsDefault data={dataAdmin} setActiveTab={setActiveTab} />
      <AlertDefault message={message} />
      <TableWithSearch data={data} />
    </div>
  );
};

export default AdminDashboard;

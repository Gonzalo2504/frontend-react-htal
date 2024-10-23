import { AlertDefault } from '../components/alerta';
import { ComplexNavbar } from '../components/nav';
import { TabsDefault } from '../components/pestañas';
//import TableWithSearch from '../components/tabladedatos';
import dataAdmin from '../data/adminData';
import { useState, useEffect } from 'react';
import { getMedicos, getPacientes, getEnfermeros } from '../api/admin/adminRequest';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('pacientes');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      switch (activeTab) {
        case 'pacientes':
          const pacientes = await getPacientes();
          console.log('pacientes:', pacientes);
          setData(pacientes);
          break;
        case 'medicos':
          const medicos = await getMedicos();
          console.log('medicos:', medicos);
          setData(medicos);
          break;
        case 'enfermeros':
          const enfermeros = await getEnfermeros();
          console.log('enfermeros:', enfermeros);
          setData(enfermeros);
          break;
        default:
          break;
      }
      console.log('Fetched data:', data);
    };
    fetchData();
  }, [activeTab]);

  return (
    <div>
      <ComplexNavbar />
      <TabsDefault data={dataAdmin} setActiveTab={setActiveTab} />
      <AlertDefault message={activeTab} />
      {/* <TableWithSearch data={data} /> */}
    </div>
  );
};

export default AdminDashboard;


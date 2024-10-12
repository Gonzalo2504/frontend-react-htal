import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import { ButtonColors } from "./botonescrud";
  export function TabsDefaultAdmin() {
    const data = [
      {
        label: "Pacientes",
        value: "pacientes",
        desc: `En esta seccion podras consultar, eliminar, editar y crear pacientes.`,
        btns: ["Cargar Paciente", "Editar Paciente", "Borrar Paciente"],
      },
      {
        label: "Medicos",
        value: "medicos",
        desc: `En esta seccion podras consultar, eliminar, editar y crear cuentas de medicos.`,
        btns: ["Crear Medico", "Editar Medico", "Borrar Medico"],
      },
      {
        label: "Enfermeros",
        value: "enfermeros",
        desc: `En esta seccion podras consultar, eliminar, editar y crear cuentas de enfermeros.`,
        btns: ["Crear Enfermero", "Editar Enfermero", "Borrar Enfermero"],
      }
    ];
   
    return (
      <Tabs value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc, btns }) => (
            <TabPanel key={value} value={value} className="flex items-center justify-center">
              <div className="text-center">
                { desc }
                <div className="mt-4">
                  <ButtonColors texto1={btns[0]} texto2={btns[1]} texto3={btns[2]} />
                </div>
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }


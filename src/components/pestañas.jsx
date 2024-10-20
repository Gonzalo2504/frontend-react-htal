import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { ButtonColors } from "./botonescrud";
import TableWithSearch from "./tabladedatos";
import usePacientes from "../api/admin/usepacientes";
import useMedicos from "../api/admin/usemedicos";

export function TabsDefault({ data }) {
  const [response, setResponse] = useState(null);
  const [selectedTab, setSelectedTab] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedTab === 'pacientes') {
        const res = await usePacientes();
        setResponse(res);
      } else if (selectedTab === 'medicos') {
        const res = await useMedicos();
        setResponse(res);
      }
    };
    if (selectedTab) {
      fetchData();
    }
  }, [selectedTab]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <Tabs value="html" onChange={(value) => setSelectedTab(value)}>
      <TabsHeader>
        {data.map(({ label, onClick, value }) => (
          <Tab key={value} value={value} onClick={() => handleTabChange(value)}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc, btns }) => (
          <TabPanel
            key={value}
            value={value}
            className="flex items-center justify-center"
          >
            <div className="text-center">
              {desc}
              <div className="mt-4">
                <ButtonColors data={btns} />
              </div>
              {selectedTab === value && response && (
                <TableWithSearch data={response} />
              )}
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default TabsDefault;
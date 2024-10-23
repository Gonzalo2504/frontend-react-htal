// TabsDefault.js
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { ButtonColors } from "./botonescrud";
import { useState } from "react";

export const TabsDefault = ({ data, setActiveTab }) => {
  const [activeTab, setActiveTabLocal] = useState(data[0].value);

  const handleTabChange = (value) => { 
    setActiveTabLocal(value);
    setActiveTab(value); 
  };

  return (
    <Tabs>
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} onClick={() => handleTabChange(value)}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc, btns }) => (
          <TabPanel key={value} value={value} className="flex items-center justify-center">
            <div className="text-center">
              {desc}
              <div className="mt-4">
                <ButtonColors data={btns} />
              </div>
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default TabsDefault;
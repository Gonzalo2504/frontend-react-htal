import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import { ButtonColors } from "./botonescrud";
export function TabsDefault({ data }) {
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
              {desc}
              <div className="mt-4">
                <ButtonColors
                  data={btns}
                />
              </div>
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}   


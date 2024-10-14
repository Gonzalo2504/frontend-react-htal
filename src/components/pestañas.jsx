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
                  texto1={btns[0].texto}
                  texto2={btns[1].texto}
                  texto3={btns[2].texto}
                  onClick1={btns[0].onClick}
                  onClick2={btns[1].onClick}
                  onClick3={btns[2].onClick}
                />
              </div>
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}   


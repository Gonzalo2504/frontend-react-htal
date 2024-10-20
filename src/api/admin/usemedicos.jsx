import { useState, useEffect } from "react";
export const useMedicos = (data) => {
    const [response, setMedicos] = useState([]);
    const [selectedTab, setSelectedTab] = useState(null);
  
    useEffect(() => {
      const fetchMedicos = async () => {
        const medicosData = await data
          .find((item) => item.value === selectedTab)
          ?.onClick?.();
        setMedicos(medicosData);
      };
      fetchMedicos();
    }, [selectedTab]);
  
    return { response, selectedTab, setSelectedTab };
  };

export default useMedicos;
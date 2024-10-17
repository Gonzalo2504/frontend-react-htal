import { ComplexNavbar } from "../components/nav";
import { TabsDefault } from "../components/pestañas";
import { TableWithSearch } from "../components/tabladedatos";
import { dataAdmin } from "../data/adminData";

export default function AdminDashboard() {
    return (
        <div>
            <ComplexNavbar />
            <TabsDefault data={dataAdmin} /> 
            <TableWithSearch />           
        </div>
    );
}

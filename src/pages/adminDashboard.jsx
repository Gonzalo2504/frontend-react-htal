import { ButtonColors } from "../components/botonescrud";
import { ComplexNavbar } from "../components/nav";
import { TabsDefaultAdmin } from "../components/pestañas";

export default function AdminDashboard() {
    return (
        <div>
            <ComplexNavbar />
            <TabsDefaultAdmin />            
        </div>
    );
}

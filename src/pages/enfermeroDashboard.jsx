import { ComplexNavbar } from "../components/nav";
import { TabsDefault } from "../components/pestañas";
import { data } from "../data/enfermeroData";
export default function AdminDashboard() {
    return (
        <div>
            <ComplexNavbar />
            <TabsDefault data={data} />            
        </div>
    );
}

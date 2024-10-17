import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CryptoLogin } from "./pages/login.jsx";
import "./index.css";
import AdminDashboard from "./pages/adminDashboard.jsx";
import EnfermeroDashboard from "./pages/enfermeroDashboard.jsx";
/*import MedicoDashboard from './pages/medicoDashboard.jsx';
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CryptoLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/enfermero-dashboard" element={<EnfermeroDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

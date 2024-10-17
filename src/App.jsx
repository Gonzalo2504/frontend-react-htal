import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CryptoLogin } from "./pages/login.jsx";
import ProtectedRoute from "./auth/protectedRoute.jsx";
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
        <Route path="/admin-dashboard" element={<ProtectedRoute rolId="1">
              <AdminDashboard />
            </ProtectedRoute>} />
        <Route path="/enfermero-dashboard" element={<ProtectedRoute rolId="3">
              <EnfermeroDashboard />
            </ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;

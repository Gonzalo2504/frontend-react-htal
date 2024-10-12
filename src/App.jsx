import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CryptoLogin } from './pages/login.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para el login */}
        <Route path="/" element={<CryptoLogin />} />
      </Routes>
    </Router>
  );
}

export default App;


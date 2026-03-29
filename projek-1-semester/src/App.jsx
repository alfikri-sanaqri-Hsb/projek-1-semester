import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ProfilAlfikri from './pages/profilAlfikri.jsx'

function App() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="bg-purple-600 text-white p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Portofolio Alfikri</h1>
          <Link
            to="/alfikri-sanaqri"
            className="bg-white text-purple-600 px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Lihat Profil
          </Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<ProfilAlfikri />} />
        <Route path="/alfikri-sanaqri" element={<ProfilAlfikri />} />
      </Routes>
    </div>
  );
}

export default App;
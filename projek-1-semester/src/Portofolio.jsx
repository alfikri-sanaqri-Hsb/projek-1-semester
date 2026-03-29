import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ProfilAlfikri from './ProfilAlfikri.jsx'
import ProfilTeman from './ProfilTeman.jsx'

function Portofolio() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-purple-600 text-white p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Portofolio Tim</h1>
          <div className="space-x-4">
            <Link
              to="/portofolio/alfikri"
              className="bg-white text-purple-600 px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              Alfikri
            </Link>
            <Link
              to="/portofolio/teman"
              className="bg-white text-purple-600 px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              Teman Saya
            </Link>
          </div>
        </div>
      </nav>

      {/* Routes Portofolio */}
      <Routes>
        <Route path="alfikri" element={<ProfilAlfikri />} />
        <Route path="teman" element={<ProfilTeman />} />
        <Route
          path="*"
          element={
            <div className="text-center mt-16 text-gray-600">
              Silakan pilih portofolio di navbar.
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default Portofolio;
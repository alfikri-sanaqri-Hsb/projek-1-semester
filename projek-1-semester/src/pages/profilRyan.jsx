import React from "react";
import FotoRyan from "../assets/FotoRyan.jpeg"; // path foto

function ProfilRyan() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
        Portofolio Ryan Fikri Ramadhan
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
        {/* Foto */}
        <img
          src={FotoRyan}
          alt="Ryan"
          className="w-48 h-48 rounded-full object-cover border-4 border-blue-600"
        />

        {/* Info */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-semibold mb-2">Tentang Saya</h2>
          <p className="mb-4">
            Saya mahasiswa Universitas Brawijaya jurusan Teknologi Informasi. 
            Aktif di organisasi, lomba, dan komunitas.
          </p>

          <h2 className="text-xl font-semibold mb-2">Pengalaman</h2>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>EM UB 2026</li>
            <li>OSIS SMA: Koordinator Publikasi Informasi dan Humas</li>
            <li>Ketua Pelaksan Volunteer: Gap Year Mengajar</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Prestasi</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Juara 3 Lomba Tari Tradisional Randai Pesona Minangkabau</li>
            <li>Juara Harapan Lomba Video Cinematic Tingkat Kabupaten</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfilRyan;
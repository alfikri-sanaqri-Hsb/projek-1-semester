import React from "react";
import FotoAlfikri from "../assets/foto-alfikri.jpg"; // path foto

function ProfilAlfikri() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">
        Portofolio Alfikri Sanqri Hsb
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
        {/* Foto */}
        <img
          src={FotoAlfikri}
          alt="Alfikri"
          className="w-48 h-48 rounded-full object-cover border-4 border-purple-600"
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
            <li>OSIS SMP: Ketua Divisi Keagamaan 2 periode</li>
            <li>OSIS SMA: Tahun 1 anggota divisi kedisiplinan, Tahun 2 ketua divisi kedisiplinan</li>
            <li>Ketua Komunitas Rubik</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Prestasi</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Kompetisi DBL Riau 2023</li>
            <li>Olimpiade Matematika, Fisika, Bahasa Inggris</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfilAlfikri;
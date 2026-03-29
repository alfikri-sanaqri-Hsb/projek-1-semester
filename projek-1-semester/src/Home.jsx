import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-8">
      <h1 className="text-5xl font-bold text-purple-700 mb-6 text-center">
        Selamat Datang di Portofolio Mahasiswa
      </h1>
      <p className="text-gray-700 mb-8 text-center max-w-xl">
        Halaman ini menjelaskan tentang mahasiswa aktif di berbagai kegiatan akademik, organisasi, dan lomba. 
        Pilih portofolio untuk melihat pengalaman dan prestasi lebih lanjut.
      </p>

      <Link
        to="/portofolio"
        className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
      >
        Lanjut ke Portofolio
      </Link>
    </div>
  );
}

export default Home;
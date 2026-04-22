import React from "react";
import FotoAlfikri from "../assets/foto-alfikri.jpg";

function ProfilAlfikri() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="pt-20 p-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative bg-purple-600 h-40">
            <div className="absolute -bottom-16 left-8 flex items-center gap-6">

              <img
                src={FotoAlfikri}
                alt="Alfikri"
                className="w-40 h-40 object-cover rounded-lg border-4 border-white shadow-lg"
              />

              <div className="text-white">
                <h1 className="text-3xl font-bold">
                  Alfikri Sanqri Hsb
                </h1>
              </div>
            </div>

          </div>

          <div className="pt-24 px-8 pb-8">

            <h2 className="text-xl font-bold mb-2">Tentang Saya</h2>
            <p className="text-gray-600 mb-6">
              Saya mahasiswa Universitas Brawijaya yang aktif dalam organisasi,
              lomba, dan komunitas teknologi.
            </p>

            <h2 className="text-xl font-bold mb-2">Pengalaman</h2>
            <div className="text-gray-600 space-y-1 mb-6">
              <p>• OSIS SMP - Ketua Divisi Keagamaan (2 periode)</p>
              <p>• OSIS SMA - Ketua Divisi Kedisiplinan</p>
              <p>• Ketua Komunitas Rubik</p>
            </div>

            <h2 className="text-xl font-bold mb-2">Prestasi</h2>
            <div className="text-gray-600 space-y-1 mb-6">
              <p>• DBL Riau 2023</p>
              <p>• Olimpiade Matematika</p>
              <p>• Olimpiade Fisika</p>
              <p>• Olimpiade Bahasa Inggris</p>
            </div>

            <h2 className="text-xl font-bold mb-3">Kemampuan</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                Leadership
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                Teamwork
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                Problem Solving
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                Public Speaking
              </span>
            </div>

          </div>
        </div>

      </div> 
    </div>
  );
}

export default ProfilAlfikri;
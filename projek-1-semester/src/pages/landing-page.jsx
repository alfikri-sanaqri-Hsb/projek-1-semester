import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">
        Website Profil Kelompok
      </h1>

      <p className="mb-6">
        Selamat datang di website profil kami
      </p>

      <div className="flex gap-4 justify-center">
            <Link
                to="/alfikri"
                className="px-4 py-2 bg-gray-200 text-black rounded-md shadow hover:bg-blue-500 hover:text-white transition"
            >
                Alfikri
            </Link>

            <Link
                to="/alza"
                className="px-4 py-2 bg-gray-200 text-black rounded-md shadow hover:bg-green-500 hover:text-white transition"
            >
                Alza Boss
            </Link>

            <Link
                to="/ryan"
                className="px-4 py-2 bg-gray-200 text-black rounded-md shadow hover:bg-purple-500 hover:text-white transition"
            >
                Mister Rayen
            </Link>
            <Link
                to="/latihan-useEffect"
                className="px-4 py-2 bg-gray-200 text-black rounded-md shadow hover:bg-purple-500 hover:text-white transition"
            >
                Latihan useEffect
            </Link>
            </div>
    </div>
  );
}

export default LandingPage;
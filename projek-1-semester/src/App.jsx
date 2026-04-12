import { Routes, Route, Link } from "react-router-dom";

import LandingPage from "./pages/landing-page";
import ProfilAlfikri from "./pages/ProfilAlfikri";
import ProfilAlza from "./pages/ProfilAlza";
import ProfilRyan from "./pages/ProfilRyan";

function App() {
  return (
    <div>
          <nav className="p-4 bg-gray-800 text-white flex gap-4">
            <Link to="/" className="hover:text-yellow-400 transition">
              Home
            </Link>

            <Link to="/alfikri" className="hover:text-yellow-400 transition">
              Alfikri
            </Link>

            <Link to="/alza" className="hover:text-yellow-400 transition">
              Alza Boss
            </Link>

            <Link to="/ryan" className="hover:text-yellow-400 transition">
              Mister Rayen
            </Link>
          </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/alfikri" element={<ProfilAlfikri />} />
        <Route path="/alza" element={<ProfilAlza />} />
        <Route path="/ryan" element={<ProfilRyan />} />
      </Routes>
    </div>
  );
}

export default App;
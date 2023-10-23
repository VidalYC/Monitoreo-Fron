import LeftColumn from "./components/LeftColumn";
import Navbar from "./components/Navbar";
import RightColumn from "./components/RightColumn";
import './index.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";

function F() {
  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }
  const navigate = useNavigate();
  useEffect(() => {
    const t = localStorage.getItem("jwt-token");
    if (!t) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="relative">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md absolute top-1 right-4 z-10" onClick={handleLogout}>
        Cerrar
      </button>
      <main className="flex relative">
        <div className="flex flex-col flex-1 relative">
          <Navbar />
          <div className="grid md:grid-cols-3 grid-cols-1 w-full">
            <div className="col-span-2">
              <LeftColumn />
            </div>
            <div className="w-full">
              <RightColumn />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default F;

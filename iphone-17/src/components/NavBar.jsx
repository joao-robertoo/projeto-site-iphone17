import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between md:justify-center">

        {/* Botão hamburguer (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl cursor-pointer"
        >
          ☰
        </button>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#design" className="hover:text-gray-300 transition-all hover:scale-105">
            Design
          </a>
          <a href="#camera" className="hover:text-gray-300 transition-all hover:scale-105">
            Câmera
          </a>
          <a href="#performace" className="hover:text-gray-300 transition-all hover:scale-105">
            Performace
          </a>
          <a href="#cores" className="hover:text-gray-300 transition-all hover:scale-105">
            Cores
          </a>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-all hover:scale-105">
            Comprar
          </button>
        </div>

        {/* MENU MOBILE */}
        {open && (
          <div className="absolute top-full left-0 right-0 bg-black/90 flex flex-col items-center gap-6 py-6 md:hidden">
            <a onClick={() => setOpen(false)} href="#design">Design</a>
            <a onClick={() => setOpen(false)} href="#camera">Câmera</a>
            <a onClick={() => setOpen(false)} href="#performace">Performace</a>
            <a onClick={() => setOpen(false)} href="#cores">Cores</a>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full">
              Comprar
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;



import { useState } from "react";
import mockupfeminino from "../../public/mockup.png";
import { Link } from "react-router-dom";

import estampa1 from "../../public/estampas/1.jpg";

import estampa2 from "../../public/estampas/2.jpg";

import estampa3 from "../../public/estampas/3.jpg";

import estampa4 from "../../public/estampas/4.jpg";

import estampa5 from "../../public/estampas/5.jpg";

import estampa6 from "../../public/estampas/6.jpg";

const Portfolio = () => {
  // Estado para alternar entre modelo masculino e feminino
  const [model, setModel] = useState("masculino");

  // Estado para armazenar a estampa selecionada
  const [selectedEstampa, setSelectedEstampa] = useState("");

  // Dados de exemplo para as estampas
  const estampas = [
    { id: 1, name: "Estampa Floral", image: estampa1 },
    {
      id: 2,
      name: "Estampa Geométrica",
      image: estampa2,
    },
    {
      id: 3,
      name: "Estampa Animal Print",
      image: estampa3,
    },
    { id: 4, name: "Estampa Abstrata", image: estampa4 },
    {
      id: 5,
      name: "Estampa Minimalista",
      image: estampa5,
    },
    { id: 6, name: "Estampa Tropical", image: estampa6 },
  ];

  return (
    <div>
      <header className="bg-black text-white shadow-md fixed top-0 w-full z-10">
        <nav className="container mx-auto max-md:text-xs flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-4">
            <img
              src="./logo.png"
              alt="Logo WiiPrint"
              className="max-md:hidden h-14 w-48"
            />
          </div>
          <ul className="flex space-x-6 max-md:space-x-3">
            <li>
              <a
                href="#about-schedule"
                className="hover:text-cyan-400 transition"
              >
                <Link to="/">Sobre Nós</Link>
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-fuchsia-400 transition">
                Produtos
              </a>
            </li>
            <li>
              <Link to="portfolio" className="hover:text-yellow-400 transition">
                Artes & Estampas
              </Link>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300 transition">
                Contato
              </a>
            </li>
          </ul>
          <a
            href="https://wa.me/558582224466"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-400 text-black max-md:py-1 max-md:px-3 py-2 px-4 rounded-lg font-bold hover:bg-cyan-500 transition"
          >
            Fale Conosco
          </a>
        </nav>
      </header>
      <div className="mt-16 font-sans bg-gray-50 text-gray-800 py-10 px-4 md:px-10 lg:px-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Estampas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
              {estampas.map((estampa) => (
                <div
                  key={estampa.id}
                  className="border rounded-lg shadow-sm hover:shadow-md transition p-4 text-center cursor-pointer"
                  onClick={() => setSelectedEstampa(estampa.image)}
                >
                  <img
                    src={estampa.image}
                    alt={estampa.name}
                    className="w-full h-40 object-cover rounded-md "
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Modelo com Opção de Gênero */}
          <div className="relative">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-magenta-400">Modelo</h2>
              <div className="flex space-x-4">
                <button
                  onClick={() => setModel("masculino")}
                  className={`py-2 px-4 rounded-lg font-bold ${
                    model === "masculino"
                      ? "bg-cyan-400 text-black"
                      : "bg-gray-200 text-gray-600"
                  } hover:bg-cyan-500 transition`}
                >
                  Masculino
                </button>
                <button
                  onClick={() => setModel("feminino")}
                  className={`py-2 px-4 rounded-lg font-bold ${
                    model === "feminino"
                      ? "bg-fuchsia-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  } hover:bg-magenta-500 transition`}
                >
                  Feminino
                </button>
              </div>
            </div>
            <div
              className="border rounded-lg shadow-sm hover:shadow-md transition relative"
              style={{
                backgroundImage: selectedEstampa
                  ? `url(${selectedEstampa})`
                  : "none",
                backgroundSize: "25%",
                backgroundPosition: "center",
              }}
            >
              <img
                src={
                  model === "masculino"
                    ? "https://placehold.co/300x300?text=Modelo+Masculino"
                    : mockupfeminino
                }
                alt={`Modelo ${model}`}
                className="w-full h-full object-contain rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

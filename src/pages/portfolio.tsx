import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import mockupfeminino from "../../public/mockup.png";
import { Link } from "react-router-dom";

import estampa1 from "../../public/estampas/1.jpg";
import estampa2 from "../../public/estampas/2.jpg";
import estampa3 from "../../public/estampas/3.jpg";
import estampa4 from "../../public/estampas/4.jpg";
import estampa5 from "../../public/estampas/5.jpg";
import estampa6 from "../../public/estampas/6.jpg";
import estampa7 from "../../public/estampas/7.jpg";
import estampa8 from "../../public/estampas/8.jpg";
interface Estampa {
  id: number;
  name: string;
  image: string;
  letter: string;
}

const Portfolio: React.FC = () => {
  const [model, setModel] = useState<"masculino" | "feminino">("masculino");
  const [selectedEstampa, setSelectedEstampa] = useState<string | null>(null);
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const estampas: Estampa[] = [
    { id: 0, name: "Estampa Floral", image: estampa1, letter: "A" },
    { id: 1, name: "Estampa Geométrica", image: estampa2, letter: "B" },
    { id: 2, name: "Estampa Animal Print", image: estampa3, letter: "C" },
    { id: 3, name: "Estampa Abstrata", image: estampa4, letter: "D" },
    { id: 4, name: "Estampa Minimalista", image: estampa5, letter: "E" },
    { id: 5, name: "Estampa Tropical", image: estampa6, letter: "F" },
    { id: 5, name: "Estampa Tropical", image: estampa7, letter: "F" },
    { id: 5, name: "Estampa Tropical", image: estampa8, letter: "F" },
  ];

  const filteredEstampas = activeLetter
    ? estampas.filter((e) => e.letter === activeLetter)
    : estampas;

  const carouselItems = filteredEstampas.map((estampa) => (
    <div
      key={estampa.id}
      className={`rounded-lg max-md:w-[160px] max-md:h-[160px] w-[150px] h-[150px] mx-6 p-2 text-center cursor-pointer transition-transform duration-300 ${
        selectedEstampa === estampa.image ? "scale-110" : ""
      }`}
      onClick={() => setSelectedEstampa(estampa.image)}
    >
      <img
        src={estampa.image}
        alt={estampa.name}
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  ));

  const handleSlideChange = (e: { item: number }) => {
    const selectedIndex = e.item;
    const selectedItem = filteredEstampas[selectedIndex];
    if (selectedItem) setSelectedEstampa(selectedItem.image);
  };

  return (
    <div className="h-[100vh] bg-gray-50 overflow-hidden">
      <header className="max-md:text-xs bg-black text-white shadow-md fixed top-0 w-full z-10">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-4">
            <img
              src="./logo.png"
              alt="Logo WiiPrint"
              className="max-md:hidden h-14 w-48"
            />
          </div>
          <ul className="flex max-md:space-x-3 space-x-6">
            <li>
              <Link to="/" className="hover:text-cyan-400 transition">
                Sobre Nós
              </Link>
            </li>
            <li className="max-md:hidden">
              <a href="#products" className="hover:text-fuchsia-400 transition">
                Produtos
              </a>
            </li>
            <li>
              <Link to="portfolio" className="hover:text-yellow-400 transition">
                Artes & Estampas
              </Link>
            </li>
            <li className="max-md:hidden">
              <a href="#contact" className="hover:text-gray-300 transition">
                Contato
              </a>
            </li>
          </ul>
          <a
            href="https://wa.me/558582224466"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-400 text-black max-md:py-1  max-md:px-2 py-2 px-4 rounded-lg font-bold hover:bg-cyan-500 transition"
          >
            Fale Conosco
          </a>
        </nav>
      </header>

      <div className="flex flex-col items-center mt-20 px-4">
        <div className="flex flex-wrap max-md:hidden justify-center gap-2 my-4">
          {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letter) => (
            <button
              key={letter}
              onClick={() => setActiveLetter(letter)}
              className={`px-4 py-2 rounded ${
                activeLetter === letter
                  ? "bg-cyan-400 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {letter}
            </button>
          ))}
          <button
            onClick={() => setActiveLetter(null)}
            className="px-4 py-2 bg-red-400 text-white rounded"
          >
            Limpar
          </button>
        </div>

        <div className="flex max-md:flex-wrap-reverse gap-x-10 gap-y-4 w-full ">
          <div className="w-full">
            <h2 className="max-md:text-xl text-3xl font-bold text-cyan-400 mb-3 text-center">
              Estampas
            </h2>
            <div className="hidden md:grid grid-cols-3 gap-4">
              {filteredEstampas.map((estampa) => (
                <div
                  key={estampa.id}
                  className="border rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedEstampa(estampa.image)}
                >
                  <img
                    src={estampa.image}
                    alt={estampa.name}
                    className="w-full h-32 object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="block md:hidden">
              <AliceCarousel
                items={carouselItems}
                responsive={{
                  0: { items: 2 },
                  600: { items: 2 },
                }}
                disableDotsControls
                mouseTracking
                keyboardNavigation
                controlsStrategy="alternate"
                infinite
                onSlideChanged={handleSlideChange}
              />
            </div>
          </div>

          <div className="w-full max-w-[600px] max-md:mt-5">
            <div className="flex justify-between mt-4 gap-4">
              <h2 className="text-3xl font-bold text-fuchsia-400 mb-6 text-center">
                Modelo
              </h2>
              <div className="flex gap-4 h-10">
                <button
                  onClick={() => setModel("masculino")}
                  className={`py-2 px-4 rounded transition-colors ${
                    model === "masculino"
                      ? "bg-cyan-400"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  Masculino
                </button>
                <button
                  onClick={() => setModel("feminino")}
                  className={`py-2 px-4 rounded transition-colors ${
                    model === "feminino"
                      ? "bg-fuchsia-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  Feminino
                </button>
              </div>
            </div>

            <div
              className="w-full min-h-[300px] max-h-[500px] overflow-hidden rounded-lg shadow-md"
              style={{
                backgroundImage: selectedEstampa
                  ? `url(${selectedEstampa})`
                  : "none",
                backgroundSize: "28%",
              }}
            >
              <img
                src={
                  model === "masculino"
                    ? "https://placehold.co/300x300?text=Modelo+Masculino"
                    : mockupfeminino
                }
                alt={`Modelo ${model}`}
                className="w-full full object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

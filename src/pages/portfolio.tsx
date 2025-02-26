import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import instance from "../services/api";
import Swal from "sweetalert2";
import mockupfeminino from "../../public/mockup.png";

const Portfolio: React.FC = () => {
  // Estado do modelo (masculino ou feminino) e da estampa selecionada
  const [model, setModel] = useState<"masculino" | "feminino">("masculino");
  const [selectedEstampa, setSelectedEstampa] = useState<string | null>(null);

  // Estados para a navegação da estrutura de pastas (letras/temas) e imagens
  const [structure, setStructure] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentLetter, setCurrentLetter] = useState<string | null>(null);
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);
  const [images, setImages] = useState<any[]>([]);

  // Carrega a estrutura (letras e temas) ao montar o componente
  useEffect(() => {
    fetchStructure();
  }, []);

  const fetchStructure = async () => {
    try {
      setLoading(true);
      const response = await instance.get("estampas/getAll");
      setStructure(response.data.structure);
      setLoading(false);
    } catch (err) {
      setError("Erro ao buscar a estrutura");
      setLoading(false);
      Swal.fire("Erro", "Erro ao buscar a estrutura", "error");
    }
  };

  // Busca as imagens para uma letra e tema selecionados
  const fetchImages = async (letter: string, theme: string) => {
    try {
      setLoading(true);
      const response = await instance.get(`estampas/images/${letter}/${theme}`);
      setImages(response.data.images);
      setLoading(false);
    } catch (err) {
      setError("Erro ao buscar as imagens");
      setLoading(false);
      Swal.fire("Erro", "Erro ao buscar as imagens", "error");
    }
  };

  // Navegação na estrutura de pastas
  const handleLetterClick = (letter: string) => {
    setCurrentLetter(letter);
    setCurrentTheme(null);
    setImages([]);
    setSelectedEstampa(null);
  };

  const handleThemeClick = (theme: string) => {
    setCurrentTheme(theme);
    fetchImages(currentLetter as string, theme);
    setSelectedEstampa(null);
  };

  const handleBack = () => {
    if (currentTheme) {
      setCurrentTheme(null);
      setImages([]);
      setSelectedEstampa(null);
    } else if (currentLetter) {
      setCurrentLetter(null);
      setSelectedEstampa(null);
    }
  };

  // Renderiza a grid de estampas (desktop) e configura o AliceCarousel para mobile
  const stampGrid = (
    <div className="hidden md:grid sm:grid-cols-3 xl:grid-cols-5 gap-4">
      {images.map((img, index) => (
        <div
          key={index}
          className="border rounded-lg overflow-hidden cursor-pointer"
          onClick={() => setSelectedEstampa(img.base64 || img.image)}
        >
          <img
            src={img.base64 || img.image}
            alt={img.fileName || `Estampa ${index}`}
            className="w-full h-52 max-w-[300px] object-cover"
          />
        </div>
      ))}
    </div>
  );

  const carouselItems = images.map((img, index) => (
    <div
      key={index}
      className={`rounded-lg max-md:w-[160px] max-md:h-[160px] w-[150px] h-[150px] mx-6 p-2 text-center cursor-pointer transition-transform duration-300 ${
        selectedEstampa === (img.base64 || img.image) ? "scale-110" : ""
      }`}
      onClick={() => setSelectedEstampa(img.base64 || img.image)}
    >
      <img
        src={img.base64 || img.image}
        alt={img.fileName || `Estampa ${index}`}
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  ));

  const handleSlideChange = (e: { item: number }) => {
    const selectedItem = images[e.item];
    if (selectedItem)
      setSelectedEstampa(selectedItem.base64 || selectedItem.image);
  };

  return (
    <div className="h-[100vh] bg-gray-50 overflow-hidden">
      <div className="flex flex-col items-center mt-8 px-20">
        <div className="flex max-md:flex-wrap-reverse gap-x-10 gap-y-4 w-full ">
          {/* Painel esquerdo: navegação da estrutura e exibição das estampas */}
          <div className="w-full">
            <h2 className="max-md:text-xl text-3xl font-bold text-cyan-400 mb-3 text-center">
              Estampas
            </h2>

            {loading && <p>Carregando...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {/* Se nenhuma letra for selecionada, exibe a grid de letras */}
            {!loading && !currentLetter && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.keys(structure).map((letter) => (
                  <div
                    key={letter}
                    className="border rounded p-4 cursor-pointer hover:bg-gray-100 shadow-lg flex flex-col items-center"
                    onClick={() => handleLetterClick(letter)}
                  >
                    <h2 className="text-xl font-bold">Letra: {letter}</h2>
                    <p className="text-sm text-gray-600">
                      {structure[letter]
                        ? Object.keys(structure[letter]).length
                        : 0}{" "}
                      tema(s)
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Se uma letra estiver selecionada, mas nenhum tema */}
            {currentLetter && !currentTheme && !loading && (
              <div>
                <div className="mb-4">
                  <button
                    onClick={handleBack}
                    className="text-blue-500 hover:underline"
                  >
                    &larr; Voltar
                  </button>
                </div>
                <h2 className="text-2xl font-semibold mb-4">
                  Temas da Letra {currentLetter}
                </h2>
                {structure[currentLetter] &&
                Object.keys(structure[currentLetter]).length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.keys(structure[currentLetter]).map((theme) => (
                      <div
                        key={theme}
                        className="border rounded p-4 cursor-pointer hover:bg-gray-100 shadow flex flex-col items-center"
                        onClick={() => handleThemeClick(theme)}
                      >
                        <h3 className="text-lg font-semibold">Tema: {theme}</h3>
                        <p className="text-sm text-gray-600">
                          {structure[currentLetter][theme].length} arquivo(s)
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Nenhum tema encontrado.</p>
                )}
              </div>
            )}

            {/* Se letra e tema estiverem selecionados, exibe as estampas */}
            {currentLetter && currentTheme && !loading && (
              <div>
                <div className="mb-4">
                  <button
                    onClick={handleBack}
                    className="text-blue-500 hover:underline"
                  >
                    &larr; Voltar
                  </button>
                </div>
                <h2 className="text-2xl font-semibold mb-4">
                  Imagens de {currentLetter} - {currentTheme}
                </h2>
                {/* Grid para desktop */}
                <div className="hidden md:block">{stampGrid}</div>
                {/* Carousel para mobile */}
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
            )}
          </div>

          {/* Painel direito: exibição do mockup com modelo e estampa aplicada */}
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
                      ? "bg-fuchsia-400 hover:bg-fuchsia-500 text-white"
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
                backgroundSize: "24%",
                backgroundRepeat: "",
              }}
            >
              <img
                src={
                  model === "masculino"
                    ? "https://placehold.co/300x300?text=Modelo+Masculino"
                    : mockupfeminino
                }
                alt={`Modelo ${model}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

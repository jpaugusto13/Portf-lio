import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
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
            className="bg-cyan-400 text-black max-md:py-1  max-md:px-2 py-2 px-4 rounded-lg font-bold hover:bg-cyan-500 transition"
          >
            Fale Conosco
          </a>
        </nav>
      </header>

      <section
        className="h-96 bg-fixed bg-cover bg-center flex items-end"
        style={{
          backgroundImage:
            "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.hdqwalls.com%2Fwallpapers%2Fabstraction-vector-graphics-texture-jd.jpg&f=1&nofb=1&ipt=4d422f816ee3d1d4b0e0e5a57a901c05b65d22e1ae4637eac07a6822f304aea1&ipo=images')",
        }}
      >
        <div className="text-white w-full text-center pb-10">
          <h2 className="text-4xl font-bold">
            Bem-vindo à WiiPrint-Sublimações
          </h2>
          <p className="mt-4 text-xl">
            Excelência em sublimação e impressão digital, com agilidade e
            qualidade garantida.
          </p>
          <a
            href="#about-schedule"
            className="mt-6 inline-block bg-cyan-400 text-black py-3 px-6 rounded-lg hover:bg-cyan-500 transition"
          >
            Saiba Mais
          </a>
        </div>
        <div className="mt-6 animate-bounce">
          <span className="text-white text-2xl font-bold">↓</span>
        </div>
      </section>

      <section
        id="about-schedule"
        className="py-12 px-4 md:px-10 lg:px-20 bg-white"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6">
            <h3 className="text-3xl font-bold mb-4">Sobre Nós</h3>
            <p className="text-gray-700 leading-relaxed">
              A{" "}
              <span className="font-semibold text-cyan-400">
                WiiPrint-Sublimações
              </span>
              é especializada em sublimação, impressão digital e serviços de
              calandra. Trabalhamos com{" "}
              <span className="font-semibold">máquinas de alta qualidade</span>,
              garantindo precisão, agilidade e excelência em todos os nossos
              produtos.
            </p>
            <img
              src="https://placehold.co/400x300"
              alt="Placeholder para apresentação"
              className="rounded-lg shadow-md mt-6"
            />
          </div>

          <div className="p-6">
            <h3 className="text-3xl font-bold mb-4 text-magenta-400">
              Horários
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>
                <span className="font-semibold">Segunda-feira:</span> 08:00 até
                as 18:00
              </li>
              <li>
                <span className="font-semibold">Terça-feira:</span> 08:00 até as
                18:00
              </li>
              <li>
                <span className="font-semibold">Quarta-feira:</span> 08:00 até
                as 18:00
              </li>
              <li>
                <span className="font-semibold">Quinta-feira:</span> 08:00 até
                as 18:00
              </li>
              <li>
                <span className="font-semibold">Sexta-feira:</span> 08:00 até as
                18:00
              </li>
              <li>
                <span className="font-semibold">Sábado:</span> Fechado
              </li>
              <li>
                <span className="font-semibold">Domingo:</span> Fechado
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="shadow-lg bg-black text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-cyan-400">
              WiiPrint-Sublimações
            </h2>
            <p className="text-gray-400 mt-4">
              Avenida Padre José Holanda do Vale - N 1270
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">Redes Sociais</h3>
            <a
              href="https://www.instagram.com/wiiprint.sublimacao/"
              className="text-yellow-400 hover:underline inline-flex items-center mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-2xl mr-2"></i>
              @wiiprint-sublimacao
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/main";
import Portfolio from "../pages/portfolio";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

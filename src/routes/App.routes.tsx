import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "../pages/portfolio";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

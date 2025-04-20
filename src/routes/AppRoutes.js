import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../components/layout/Layout";
import ShowcaseButtons from "../pages/showcase/ShowcaseButtons";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="showcase/buttons" element={<ShowcaseButtons />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

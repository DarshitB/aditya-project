import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../layout/Layout";
import ShowcaseButtons from "../pages/showcase/ShowcaseButtons";
import ShowcaseTextbox from "../pages/showcase/ShowcaseTextbox";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="showcase/buttons" element={<ShowcaseButtons />} />
        <Route path="showcase/textbox" element={<ShowcaseTextbox />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

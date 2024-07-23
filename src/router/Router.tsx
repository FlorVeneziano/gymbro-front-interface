import { Route, Routes } from "react-router-dom";
import Layout from "../layout/LayoutLng";
import useAuthenticate from "../hooks/useAuth";
import Navbar from "../layout/NavBar/Navbar";
import AllRutines from "../Components/AllRutines/AllRutines";
import Rutine from "../Components/Rutine/Rutine";
import useSetConfig from "../hooks/useSetConfig";

const Router = () => {
  useAuthenticate();
  useSetConfig();

  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route element={<Layout />}>
          <Route path="/" element={<AllRutines />} />
          <Route path="/routine" element={<Rutine />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;

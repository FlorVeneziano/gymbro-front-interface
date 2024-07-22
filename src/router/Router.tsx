import { Route, Routes } from "react-router-dom";
import Layout from "../layout/LayoutLng";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}></Route>
    </Routes>
  );
};

export default Router;

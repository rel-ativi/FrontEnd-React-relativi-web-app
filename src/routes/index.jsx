<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "../pages/cadastro";
=======
import { Routes, Route } from "react-router-dom";
import { Cadastro } from "../pages/cadastro";
>>>>>>> develop
import { Dashboard } from "../pages/dashboard";
import { Landing } from "../pages/landing";
import { Login } from "../pages/login";
import { Loja } from "../pages/loja";

function Router() {
  return (
    <Routes>
      <Route path={"/"} index element={<Landing />} />
      <Route path={"/cadastro"} element={<Cadastro />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/loja"} element={<Loja />} />
      <Route path={"/dashboard"} element={<Dashboard />} />
    </Routes>
  );
}

export default Router;

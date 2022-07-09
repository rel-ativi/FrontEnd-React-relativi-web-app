import { Routes, Route } from "react-router-dom";
import Cadastro from "../pages/cadastro";

import { Dashboard } from "../pages/dashboard";
import { Landing } from "../pages/landing";
import Login from "../pages/login";
import { Loja } from "../pages/loja";

import Teste from "../pages/teste-erase-me";

function Router() {
  return (
    <Routes>
      <Route path={"/"} index element={<Landing />} />
      <Route path={"/cadastro"} element={<Cadastro />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/loja"} element={<Loja />} />
      <Route path={"/dashboard"} element={<Dashboard />} />
      <Route path={"/teste"} element={<Teste />} />{" "}
      {/* so' para visualizar testes, route/teste sera apagada */}
    </Routes>
  );
}

export default Router;

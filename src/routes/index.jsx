import { Route, Routes } from "react-router-dom";

import Cadastro from "../pages/cadastro";
import Login from "../pages/login";

import { Dashboard } from "../pages/dashboard";
import { Landing } from "../pages/landing";
import { Loja } from "../pages/loja";

import Teste from "../pages/teste-erase-me";

function Router() {
  const verificaToken = (pagina) => {
    const token = localStorage.getItem("@relativi:token");
    return token === null ? pagina : <Loja />;
  };

  return (

    <Routes>
      <Route path={"/"} index element={verificaToken(<Landing />)} />
      <Route path={"/cadastro"} element={verificaToken(<Cadastro />)} />
      <Route path={"/login"} element={verificaToken(<Login />)} />
      <Route path={"/loja"} element={verificaToken(<Loja />)} />
      <Route path={"/dashboard"} element={<Dashboard />} />
      <Route path={"/teste"} element={<Teste />} />{" "}
      {/* so' para visualizar testes, route/teste sera apagada */}
    </Routes>

  );
}

export default Router;

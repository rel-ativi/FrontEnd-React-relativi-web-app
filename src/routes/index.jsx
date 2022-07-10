import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
import { Cadastro } from "../pages/cadastro";
import { Dashboard } from "../pages/dashboard";
import { Landing } from "../pages/landing";
import { Login } from "../pages/login";
import { Loja } from "../pages/Loja";
import {} from "react-router-dom";

function Router() {
  const verificaToken = (component) => {
    const token = localStorage.getItem("@relativi:token");
    return token ? <Loja /> : component;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/loja"} element={<Loja />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/"} index element={verificaToken(<Landing />)} />
        <Route path={"/cadastro"} element={verificaToken(<Cadastro />)} />
        <Route path={"/login"} element={verificaToken(<Login />)} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

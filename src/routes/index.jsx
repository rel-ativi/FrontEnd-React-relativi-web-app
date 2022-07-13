import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import Cadastro from "../pages/cadastro";
import Login from "../pages/login";
import SobreNos from "../pages/sobreNos";

import { Dashboard } from "../pages/dashboard";
import { Landing } from "../pages/landing";

import { useEffect } from "react";

import { notificarErro } from "../components/toasts";

import Loja from "../pages/loja";

export default function Router() {
  const token = localStorage.getItem("@relativi:token") || "";
  const navigate = useNavigate();

  useEffect(() => {
    const localToken = localStorage.getItem("@relativi:token") || "";
    if (!!localToken) {
      const decifrar = JSON.parse(atob(localToken.split(".")[1]));

      if (decifrar.exp * 1000 < new Date().getTime()) {
        localStorage.clear();
        navigate("/");
        notificarErro("Sua sessão expirou");
      }
    }
  }, [navigate]);

  return (
    <Routes>
      <Route
        path={"/"}
        index
        element={!!token ? <Navigate to={"/loja"} /> : <Landing />}
      />
      <Route
        path={"/cadastro"}
        element={!!token ? <Navigate to={"/loja"} /> : <Cadastro />}
      />
      <Route
        path={"/login"}
        element={!!token ? <Navigate to={"/loja"} /> : <Login />}
      />
      <Route
        path={"/loja"}
        element={!!token ? <Loja /> : <Navigate to={"/login"} />}
      />
      <Route
        path={"/dashboard"}
        element={!!token ? <Dashboard /> : <Navigate to={"/login"} />}
      />
      <Route path={"/sobrenos"} element={<SobreNos />} />
    </Routes>
  );
}

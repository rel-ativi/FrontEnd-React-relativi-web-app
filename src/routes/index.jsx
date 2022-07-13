import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import Cadastro from "../pages/cadastro";
import Login from "../pages/login";

import { Dashboard } from "../pages/dashboard";
import { Landing } from "../pages/landing";

import Loja from "../pages/loja";
import { useEffect, useState } from "react";
import { notificarErro } from "../components/toasts";

function Router() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const tokenLocal = localStorage.getItem("@relativi:token");

    if (tokenLocal) {
      const decifrar = JSON.parse(atob(tokenLocal.split(".")[1]));

      !(decifrar.exp * 1000 < new Date().getTime())
        ? setToken(tokenLocal)
        : navigate("/login") &&
          localStorage.clear() &&
          notificarErro("Sua sessão expirou");
    }
  }, [navigate, token]);

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
    </Routes>
  );
}

export default Router;

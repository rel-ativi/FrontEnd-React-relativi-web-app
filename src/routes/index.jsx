import { Route, Routes } from "react-router-dom"

import Cadastro from "../pages/cadastro"
import Login from "../pages/login"
import SobreNos from "../pages/sobreNos"

import { Dashboard } from "../pages/dashboard"
import { Landing } from "../pages/landing"
import { Loja } from "../pages/loja"
import { SobreProjeto } from "../pages/sobreProjeto"

function Router() {
  return (
    <Routes>
      <Route path={"/"} index element={<Landing />} />
      <Route path={"/cadastro"} element={<Cadastro />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/loja"} element={<Loja />} />
      <Route path={"/dashboard"} element={<Dashboard />} />
      <Route path={"/sobrenos"} element={<SobreNos />} />
      <Route path={"/sobreprojeto"} element={<SobreProjeto />} />
    </Routes>
  )
}

export default Router

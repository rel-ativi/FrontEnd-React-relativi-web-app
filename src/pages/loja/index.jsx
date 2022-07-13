//ignorar isto, so' testando
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../../components/header";
import Footer from "../../components/footer";

import { useState } from "react";
import ModalAgenda from "../../components/modalAgenda";

export default function Loja() {
  const { atividades, perfilUsuario } = useSelector((state) => state);

  const [agenda, mostrarAgenda] = useState(false);

  return (
    <>
      <Header
        atividades={atividades}
        perfilUsuario={perfilUsuario}
        mostrarAgenda={mostrarAgenda}
        naLoja
      />
      {agenda && <ModalAgenda mostrarAgenda={mostrarAgenda} />}
      <br></br>
      <Link to="/">Landing</Link>
      <br></br>
      <Link to="/cadastro">Cadastro</Link>
      <br></br>
      <Link to="/login">Login</Link>
      <br></br>
      <Link to="/dashboard">Dashboard</Link>
      <Footer />
    </>
  );
}

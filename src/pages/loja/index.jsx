//ignorar isto, so' testando
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../../components/header";
import Footer from "../../components/footer";
import { CardLista } from "../../components/cardListas";

export default function Loja() {
  const { atividades, perfilUsuario } = useSelector((state) => state);

  return (
    <>
      <Header atividades={atividades} perfilUsuario={perfilUsuario} naLoja />
      <CardLista atividade={atividades[0]} />
      <CardLista atividade={atividades[0]} favorita />
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

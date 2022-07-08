//ignorar isto, so' testando
import { Link } from "react-router-dom";
import Header from "../../components/header";

export function Loja() {
  return (
    <>
    <Header></Header>
      <br></br>
      <Link to="/">Landing</Link>
      <br></br>
      <Link to="/cadastro">Cadastro</Link>
      <br></br>
      <Link to="/login">Login</Link>
      <br></br>
      <Link to="/dashboard">Dashboard</Link>
    </>
  );
}

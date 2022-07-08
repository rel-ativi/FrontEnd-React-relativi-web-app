//ignorar isto, so' testando
import { Link } from "react-router-dom";

export function Landing() {
  return (
    <>
      Isto e' a landing
      <br />
      <Link to="/cadastro">Cadastro</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/loja">Loja</Link>
      <br />
      <Link to="/dashboard">Dashboard</Link>
    </>
  );
}

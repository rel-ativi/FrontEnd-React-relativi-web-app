//ignorar isto, so' testando
import { Link } from "react-router-dom";

export function Landing() {
  return (
    <>
      Isto e' a landing
      <br></br>
      <Link to="/cadastro">Cadastro</Link>
      <br></br>
      <Link to="/login">Login</Link>
      <br></br>
      <Link to="/loja">Loja</Link>
      <br></br>
      <Link to="/dashboard">Dashboard</Link>
    </>
  );
}

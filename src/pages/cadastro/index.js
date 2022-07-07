//ignorar isto, so' testando
import { Link } from "react-router-dom";
export function Cadastro() {
  return (
    <>
      Isto e' o Cadastro
      <br></br>
      <Link to="/">Landing</Link>
      <br></br>
      <Link to="/Login">Login</Link>
      <br></br>
      <Link to="/loja">Loja</Link>
      <br></br>
      <Link to="/dashboard">Dashboard</Link>
    </>
  );
}

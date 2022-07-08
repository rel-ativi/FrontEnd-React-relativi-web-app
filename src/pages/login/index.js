//ignorar isto, so' testando
import { Link } from "react-router-dom";
export function Login() {
  return (
    <>
      Isto e' o Login
      <br></br>
      <Link to="/cadastro">Cadastro</Link>
      <br></br>
      <Link to="/">Landing</Link>
      <br></br>
      <Link to="/loja">Loja</Link>
      <br></br>
      <Link to="/dashboard">Dashboard</Link>
    </>
  );
}

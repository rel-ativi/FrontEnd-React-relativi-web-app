//ignorar isto, so' testando
import { Link } from "react-router-dom";
import FormEdicaoUser from "../../components/formEdicaoUser";

export function Dashboard() {
  return (
    <>
      Isto e' o Dashboard
      <br></br>
      <Link to="/">Landing</Link>
      <br></br>
      <Link to="/login">Login</Link>
      <br></br>
      <Link to="/cadastro">Cadastro</Link>
      <br></br>
      <Link to="/loja">Loja</Link>
      
      <FormEdicaoUser/>
    </>
  );
}

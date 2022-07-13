//ignorar isto, so' testando
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

export function Loja() {
  return (
    <>
      Isto e' a loja
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

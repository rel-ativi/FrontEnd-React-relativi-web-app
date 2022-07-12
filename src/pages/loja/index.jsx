//ignorar isto, so' testando
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalConfirmarAgendamento from "../../components/modalConfirmarAgendamento";
export function Loja() {
  const [calendario, mostrarCalendario] = useState(true);
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
      {/* teste provisorio do modal */}
      {calendario && (
        <ModalConfirmarAgendamento mostrarCalendario={mostrarCalendario} />
      )}
    </>
  );
}

import { useSelector } from "react-redux";
import Botao from "../botao";
import { EstiloPerfil } from "./style";

export default function Perfil({ mostrarForm, mostrarPerfil }) {
  const { perfilUsuario } = useSelector((state) => state);
  return (
    <EstiloPerfil>
      <h4>Nome:</h4>
      <p>{perfilUsuario?.name}</p>
      <h4>Telefone:</h4>
      <p>{perfilUsuario?.phone}</p>
      <h4>Cartão:</h4>
      <p>{perfilUsuario?.payment_info.card}</p>
      <div>
        <div>
          <h4>Validade:</h4>
          <p>{perfilUsuario?.payment_info.expiration}</p>
        </div>
        <div>
          <h4>Código Segurança:</h4>
          <p>{perfilUsuario?.payment_info.sec_code}</p>
        </div>
      </div>
      <h4>Sobre:</h4>
      <p>{perfilUsuario?.bio}</p>
      <Botao
        cor="azul"
        larguraFixa="80%"
        onClick={() => {
          mostrarForm(true);
          mostrarPerfil(false);
        }}
      >
        editar
      </Botao>
    </EstiloPerfil>
  );
}

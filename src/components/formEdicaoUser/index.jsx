import HeaderCardsDash from "../headerCardsDash";
import {
  MdAccountCircle,
  MdOutlineSmartphone,
  MdOutlineCreditCard,
  MdCalendarToday,
  MdLock,
  MdArticle,
} from "react-icons/md";

import Input from "../input";
import Botao from "../botao";
import { EstiloFormEdicaoUser } from "./style";

export default function FormEdicaoUser() {
  return (
    <>
      <HeaderCardsDash icone={MdAccountCircle} eFechavel={true}>
        Editar Seu Perfil
      </HeaderCardsDash>
      <EstiloFormEdicaoUser>
        <Input
          type="text"
          placeholder="nome da pessoa API"
          label="Nome:"
          icone={MdAccountCircle}
        />
        <Input
          type="tel"
          placeholder="digite seu telefone"
          label="Telefone:"
          icone={MdOutlineSmartphone}
        />
        <Input
          type="tel"
          placeholder="digite seu telefone"
          label="Pagamento:"
          icone={MdOutlineCreditCard}
        />
        <div className="pagamento">
          <Input type="number" placeholder="validade" icone={MdCalendarToday} />
          <Input type="number" placeholder="código" icone={MdLock} />
        </div>
        <Input
          type="number"
          placeholder="conte um pouco sobre você"
          icone={MdArticle}
        />
        <Botao larguraFixa="80%" cor="azul">
          salvar
        </Botao>
      </EstiloFormEdicaoUser>
    </>
  );
}

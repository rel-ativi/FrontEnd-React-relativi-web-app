import HeaderCardsDash from "../headerCardsDash";
import { MdOutlineAccountCircle } from "react-icons/md";

import Input from "../input";
import Botao from "../botao";
import { EstiloFormEdicaoUser } from "./style";

export default function FormEdicaoUser() {
  return (
    <>
      <HeaderCardsDash icone={MdOutlineAccountCircle} eFechavel ={true}>
        Editar Seu Perfil
      </HeaderCardsDash>
      <EstiloFormEdicaoUser>
        <Input
          type="text"
          placeholder="nome da pessoa API"
          label="Nome:"
          icone={MdOutlineAccountCircle}
        />
        <Input
          type="tel"
          placeholder="digite seu telefone"
          label="Telefone:"
          icone={MdOutlineAccountCircle}
        />
        <Input
          type="tel"
          placeholder="digite seu telefone"
          label="Pagamento:"
          icone={MdOutlineAccountCircle}
        />
        <div className="pagamento">
          <Input
            type="number"
            placeholder="validade"
            icone={MdOutlineAccountCircle}
          />
          <Input
            type="number"
            placeholder="código"
            icone={MdOutlineAccountCircle}
          />
        </div>
        <Input
          type="number"
          placeholder="conte um pouco sobre você"
          icone={MdOutlineAccountCircle}
        />
        <Botao larguraFixa="80%" cor="azul">
          salvar
        </Botao>
      </EstiloFormEdicaoUser>
    </>
  );
}

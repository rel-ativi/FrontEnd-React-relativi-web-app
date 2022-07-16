import {
  MdAccountCircle,
  MdArticle,
  MdLock,
  MdOutlineCreditCard,
  MdOutlineSmartphone,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useForm, useInput } from "lx-react-form";

import Botao from "../botao";
import Input from "../input";

import { EstiloForm } from "./style";
import { alteraPerfilUsuarioThunk } from "../../store/modules/perfilUsuario/thunks";

export default function FormPerfil({ mostrarPerfil, mostrarForm }) {
  const dispatch = useDispatch();

  const { perfilUsuario } = useSelector((state) => state);

  const nome = useInput({
    name: "name",
    initialValue: perfilUsuario?.name,
  });

  const telefone = useInput({
    name: "phone",
    initialValue: perfilUsuario?.phone,
    validation: "telefone",
    maxLength: 15,
    mask: "telefone",
  });

  const cartao = useInput({
    name: "card",
    initialValue: perfilUsuario?.payment_info.card,
    minLength: 16,
  });

  const expiracao = useInput({
    name: "expiration",
    initialValue: perfilUsuario?.payment_info.expiration,
  });

  const codigo = useInput({
    name: "sec_code",
    initialValue: perfilUsuario?.payment_info.sec_code,
  });

  const sobre = useInput({
    name: "bio",
    initialValue: perfilUsuario?.bio,
  });

  const form = useForm({
    clearFields: true,
    formFields: [nome, telefone, cartao, expiracao, codigo, sobre],
    submitCallback: (formData) => {
      const { name, phone, card, expiration, sec_code, bio } = formData;

      const atualizada = {
        name,
        phone,
        payment_info: { card, expiration, sec_code },
        bio,
      };

      dispatch(alteraPerfilUsuarioThunk(atualizada));
      mostrarPerfil(true);
      mostrarForm(false);
    },
  });

  return (
    <EstiloForm onSubmit={form.handleSubmit}>
      <Input
        type="text"
        label="Nome:"
        icone={MdAccountCircle}
        textoAuxiliar={nome.error}
        placeholder="Digite seu nome"
        {...nome.inputProps}
      />
      <Input
        type="tel"
        label="Telefone:"
        icone={MdOutlineSmartphone}
        value={perfilUsuario?.phone}
        textoAuxiliar={telefone.error}
        placeholder="digite seu telefone"
        {...telefone.inputProps}
      />
      <Input
        type="text"
        label="Pagamento:"
        textoAuxiliar={cartao.error}
        placeholder="digite o número do cartão"
        icone={MdOutlineCreditCard}
        {...cartao.inputProps}
      />
      <div className="pagamento">
        <Input
          type="month"
          label="Data de Expiração:"
          textoAuxiliar={expiracao.error}
          placeholder="escolha uma data"
          {...expiracao.inputProps}
        />

        <Input
          type="number"
          label="Código de Segurança:"
          textoAuxiliar={codigo.error}
          placeholder="escolha uma data"
          icone={MdLock}
          {...codigo.inputProps}
        />
      </div>
      <Input
        type="text"
        label="Sobre:"
        textoAuxiliar={sobre.error}
        placeholder="conte um pouco sobre você"
        icone={MdArticle}
        {...sobre.inputProps}
      />

      <Botao larguraFixa="80%" cor="azul" type="submit">
        salvar
      </Botao>
    </EstiloForm>
  );
}

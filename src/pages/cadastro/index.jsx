import { useForm, useInput, useSelect } from "lx-react-form";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import changeImageThunk from "../../store/modules/ImagesReel/thunks";

import Select from "../../components/select";
import Botao from "../../components/botao";
import Input from "../../components/input";
import { LogoHorizontal, LogoQuadrado } from "../../components/logo";
import { EstiloCadastro } from "./styles";

function Cadastro() {
  const imagem = useSelector((store) => store.imagem);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(changeImageThunk()), 5000);
  }, [imagem]);

  const name = useInput({ name: "name" });
  const email = useInput({ name: "email", validation: "email" });
  const password = useInput({ name: "password", validation: "senha" });
  const confirmarPass = useInput({
    name: "passwordConf",
    same: password.value,
  });
  const type = useSelect({ name: "type" });

  const form = useForm({
    clearFields: true,
    formFields: [name, email, password, type],
    submitCallback: (formData) => {
      //mandar pra api
      console.log(formData);
    },
  });

  return (
    <EstiloCadastro>
      <div className="background">
        <img className="backgroundImage" src={imagem} alt="imagem de fundo" />
        <div className="logoMobile">
          <LogoQuadrado largura={"5rem"} />
        </div>
        <div className="logoDesktop">
          <LogoHorizontal largura={"15rem"} />
        </div>
      </div>
      <div className="containerCadastro">
        <section>
          <h3>Sobre {<Link to={"/"}>nós</Link>}</h3>
          <h3>Sobre o {<Link to={"/"}>projeto</Link>}</h3>
        </section>
        <form onSubmit={form.handleSubmit}>
          <Input
            type="text"
            nome="nome"
            placeholder="Digite seu nome"
            textoAuxiliar={name.error}
            {...name.inputProps}
          />
          <Input
            type="email"
            nome="email"
            placeholder="Digite seu email"
            textoAuxiliar={email.error}
            {...email.inputProps}
          />
          <Input
            type="password"
            nome="password"
            placeholder="Digite sua senha"
            textoAuxiliar={password.error}
            {...password.inputProps}
          />
          <Input
            type="password"
            nome="confPassword"
            placeholder="confirme sua senha"
            textoAuxiliar={confirmarPass.error}
            {...confirmarPass.inputProps}
          />
          <Select
            nome="select tipo"
            opcoes={["Selecione tipo de conta", `Usuario`, `Profissional`]}
            textoAuxiliar={type.error}
            {...type.inputProps}
          />
          <div className="containerBotao">
            <Botao type="submit">Cadastrar</Botao>
            <p>Já tem uma conta?</p>
            <Link to={"/login"}>Fazer Login</Link>
          </div>
        </form>
      </div>
    </EstiloCadastro>
  );
}

export default Cadastro;

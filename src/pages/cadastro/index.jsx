import { useForm, useInput, useSelect } from "lx-react-form";
import { MdOutlineAccountCircle, MdEmail, MdPassword } from "react-icons/md";
import { Link } from "react-router-dom";

import Select from "../../components/select";
import Botao from "../../components/botao";
import Input from "../../components/input";
import Background from "../../components/background";

import { LogoHorizontal } from "../../components/logo";
import { EstiloCadastro } from "./styles";

export default function Cadastro() {
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
    <Background>
      <EstiloCadastro>
        <div className="background">
          <div className="logoMobile">
            <LogoHorizontal largura={"10rem"} />
          </div>
          <div className="logoTablet">
            <LogoHorizontal largura="20rem" />
          </div>
          <div className="logoDesktop">
            <LogoHorizontal largura="30rem" />
          </div>
        </div>
        <div className="containerCadastro">
          <section>
            {
              <Link to={"/"}>
                Sobre <span>nós</span>
              </Link>
            }
            {
              <Link to={"/"}>
                Sobre o <span>projeto</span>
              </Link>
            }
          </section>
          <form onSubmit={form.handleSubmit}>
            <Input
              type="text"
              nome="nome"
              placeholder="digite seu nome"
              textoAuxiliar={name.error}
              icone={MdOutlineAccountCircle}
              {...name.inputProps}
            />
            <Input
              type="email"
              nome="email"
              placeholder="digite seu email"
              textoAuxiliar={email.error}
              icone={MdEmail}
              {...email.inputProps}
            />
            <Input
              type="password"
              nome="password"
              placeholder="digite sua senha"
              textoAuxiliar={password.error}
              icone={MdPassword}
              {...password.inputProps}
            />
            <Input
              type="password"
              nome="confPassword"
              placeholder="confirme sua senha"
              textoAuxiliar={confirmarPass.error}
              icone={MdPassword}
              {...confirmarPass.inputProps}
            />
            <Select
              nome="select tipo"
              opcoes={["selecione tipo de conta", `Usuario`, `Profissional`]}
              textoAuxiliar={type.error}
              {...type.inputProps}
            />
            <div className="containerBotao">
              <Botao larguraFixa="80%" type="submit">
                cadastrar
              </Botao>
              <p>Já tem uma conta?</p>
              <Link to={"/login"}>Fazer Login</Link>
            </div>
          </form>
        </div>
      </EstiloCadastro>
    </Background>
  );
}

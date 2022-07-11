import { useForm, useInput, useSelect } from "lx-react-form";
import { MdEmail, MdOutlineAccountCircle, MdPassword } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import Background from "../../components/background";
import Botao from "../../components/botao";
import Input from "../../components/input";
import Select from "../../components/select";
import API from "../../services/API";

import { LogoHorizontal } from "../../components/logo";
import { notificarErro, notificarSucesso } from "../../components/toasts";
import { EstiloCadastro } from "./styles";

export default function Cadastro() {
  const navigate = useNavigate();

  const name = useInput({ name: "name" });
  const email = useInput({ name: "email", validation: "email" });
  const password = useInput({ name: "password", validation: "senha" });
  const confirmarPass = useInput({
    name: "passwordConf",
    same: password.value,
  });
  const type = useSelect({ name: "type" });

  const criarPerfil = (rota, dados, token, mensagem) => {
    API.post(rota, dados, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((_) => {
        notificarSucesso(mensagem);
        navigate("/login");
      })
      .catch((erro) => {
        console.log(erro);
        notificarErro(erro);
      });
  };

  const perfilProfissional = (dadosUsuario, token) => {
    const { id, email, name } = dadosUsuario;

    const perfilPro = {
      userId: id,
      email,
      name,
      phone: "",
      bio: "",
      docs: [],
      bank_info: {},
    };

    criarPerfil(
      "/prousers",
      perfilPro,
      token,
      "Conta Profissional criada com sucesso!"
    );
  };

  const perfilUsuario = (dadosUsuario, token) => {
    const { id, email, name } = dadosUsuario;

    const perfil = {
      userId: id,
      email,
      name,
      phone: "",
      bio: "",
      payment_info: {},
      activities: [],
      activities_history: [],
      activities_favorites: [],
    };

    criarPerfil("/profiles", perfil, token, "Perfil criado com sucesso");
  };

  const form = useForm({
    clearFields: true,
    formFields: [name, email, password, type],

    submitCallback: (formData) => {
      const { type } = formData;

      API.post(`users`, formData)
        .then((response) => {
          const token = response.data.accessToken;

          localStorage.setItem("@relativi:token", JSON.stringify(token));

          type === "profissional"
            ? perfilProfissional(response.data.user, token)
            : perfilUsuario(response.data.user, token);
        })
        .catch((erro) => {
          console.log(erro);
          notificarErro(erro);
        });
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
              opcoes={["selecione tipo de conta", `Usuário`, `Profissional`]}
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

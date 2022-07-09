import { useForm, useInput, useSelect } from "lx-react-form";
import { MdOutlineAccountCircle, MdEmail, MdPassword } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import Select from "../../components/select";
import Botao from "../../components/botao";
import Input from "../../components/input";
import Background from "../../components/background";

import { LogoHorizontal } from "../../components/logo";
import { EstiloCadastro } from "./styles";

import { toast } from "react-toastify";
import API from "../../services/API";

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

  function Cadastrar(data) {
    const msgSucesso = (mensagem) => toast.success(mensagem);
    const msgErro = (mensagem) => toast.error(mensagem);

    const dataSemType = Object.fromEntries(
      Object.entries(data).filter(([key]) => key !== "type")
    );

    API.post(`users`, dataSemType)
      .then((response) => {
        console.log(response);
        const token = response.data.accessToken;

        if (data.type === "profissional") {
          const id = response.data.user.id;
          const novaDataCrua = { ...response.data.user };
          const novaData = Object.fromEntries(
            Object.entries(novaDataCrua).filter(([key]) => key !== "id")
          );
          novaData.userId = id;
          novaData.phone = "";
          novaData.bio = "";
          novaData.docs = [];
          novaData.bank_info = {};

          API.post(`prousers`, novaData, {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then((response) => {
              console.log(response);
              msgSucesso("Conta Profissional criada com sucesso!");
              navigate("/login");
            })
            .catch((erro) => {
              msgErro(erro);
            });
        } else if (data.type === `usuário`) {
          const id = response.data.user.id;
          const novaDataCrua = { ...response.data.user };
          const novaData = Object.fromEntries(
            Object.entries(novaDataCrua).filter(([key]) => key !== "id")
          );
          novaData.userId = id;
          novaData.phone = "";
          novaData.bio = "";
          novaData.payment_info = {};
          novaData.activities = [];
          novaData.activities_history = [];
          novaData.activities_favorites = [];

          API.post(`/profiles`, novaData, {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then((response) => {
              console.log(response);
              msgSucesso("Perfil criado com sucesso");
              navigate("/login");
            })
            .catch((erro) => {
              console.log(erro);
              msgErro(erro);
            });
        }
      })
      .catch((erro) => {
        console.log(erro);
        msgErro(erro);
      });
  }

  const form = useForm({
    clearFields: true,
    formFields: [name, email, password, type],
    submitCallback: (formData) => {
      console.log(formData);
      Cadastrar(formData);
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

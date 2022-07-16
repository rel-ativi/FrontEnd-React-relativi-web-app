import { useForm, useInput } from "lx-react-form";
import { MdOutlineAccountCircle, MdOutlinePassword } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Background from "../../components/background";
import Botao from "../../components/botao";
import Input from "../../components/input";
import API from "../../services/API";
import buscaProfissionaisThunk from "../../store/modules/listaProfissionais/thunks";
import buscaPerfilProfissionalThunk from "../../store/modules/perfilProUsers/thunks";

import { LogoHorizontal, LogoQuadrado } from "../../components/logo";
import { notificarErro, notificarInfo } from "../../components/toasts";
import {
  buscaAtividadesProThunk,
  buscaAtividadesThunk,
} from "../../store/modules/atividades/thunks";
import { buscaPerfilUsuarioThunk } from "../../store/modules/perfilUsuario/thunks";
import { Main } from "./style";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logarUsuario = (credenciais) => {
    notificarInfo("Verificando Credenciais...");
    API.post("/login", credenciais)
      .then((response) => {
        localStorage.setItem("@relativi:token", response.data.accessToken);
        localStorage.setItem("@relativi:userId", response.data.user.id);
        return response.data;
      })
      .then((res) => {
        if (res.user.type === "profissional") {
          dispatch(buscaAtividadesProThunk());
          dispatch(buscaPerfilProfissionalThunk());
          navigate("/dashboard");
        } else {
          dispatch(buscaAtividadesThunk());
          dispatch(buscaProfissionaisThunk());
          dispatch(buscaPerfilUsuarioThunk());
          navigate("/loja");
        }
      })
      .catch((_) => {
        notificarErro("Credenciais Inválidas");
      });
  };

  const email = useInput({
    name: "email",
    validation: "email",
  });
  const password = useInput({
    name: "password",
  });

  const form = useForm({
    clearFields: true,
    formFields: [email, password],
    submitCallback: (formData) => {
      logarUsuario(formData);
    },
  });

  return (
    <Background>
      <ToastContainer />
      <Main>
        <div className="container">
          <div className="logoMobile">
            <LogoQuadrado largura={"7rem"} />
          </div>
          <div className="logoTablet">
            <LogoHorizontal largura={"20rem"} />
          </div>
          <div className="logoDesktop">
            <LogoHorizontal largura={"30rem"} />
          </div>
          <aside>
            <nav>
              <Link to="/sobrenos">
                Sobre <span>nós</span>
              </Link>
              <Link to="/sobreprojeto">
                Sobre o <span>projeto</span>
              </Link>
            </nav>
            <div className="containerForm">
              <form onSubmit={form.handleSubmit}>
                <Input
                  type="email"
                  placeholder="digite seu email"
                  textoAuxiliar={email.error}
                  icone={MdOutlineAccountCircle}
                  {...email.inputProps}
                />

                <Input
                  type="password"
                  placeholder="digite sua senha"
                  textoAuxiliar={password.error}
                  icone={MdOutlinePassword}
                  {...password.inputProps}
                />

                <Botao larguraFixa="80%">login</Botao>
              </form>
              <p>ainda não tem uma conta?</p>
              <Link to="/cadastro">Cadastre-se</Link>
            </div>
          </aside>
        </div>
      </Main>
    </Background>
  );
}

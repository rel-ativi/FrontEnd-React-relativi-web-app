import { useForm, useInput } from "lx-react-form";
import { MdOutlineAccountCircle, MdOutlinePassword } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import Background from "../../components/background";
import Botao from "../../components/botao";
import Input from "../../components/input";
import API from "../../services/API";

import { LogoHorizontal, LogoQuadrado } from "../../components/logo";
import { Main } from "./style";
import { notificarErro } from "../../components/toast";

export default function Login() {
  const navigate = useNavigate();
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
      API.post("/login", formData)
        .then((response) => {
          localStorage.setItem(
            "@relativi:token",
            JSON.stringify(response.data.accessToken)
          );

          return response.data;
        })
        .then((res) => {
          res.user.type === "prouser"
            ? navigate("/dashboard")
            : navigate("/loja");
        })
        .catch((err) => {
          console.log(err);
          notificarErro("Credenciais inválidas..");
        });
    },
  });

  return (
    <Background>
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

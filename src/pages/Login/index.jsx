import "./style.css";
import api from "../../services/api";
import { useForm, useInput } from "lx-react-form";
//import { Link } from "react-router-dom";

function Login() {
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
      api
        .post("/login", formData)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem(
            "@relativi/Token",
            JSON.stringify(response.data.accessToken)
          );
        })
        // .then(()=> <Link to="/home" />)

        .catch((err) => console.log(err));
    },
  });

  return (
    <div>
      <p>Login</p>
      <aside>
        <div>
          <p>
            Sobre <caption> nós</caption>
          </p>
          <p>
            Sobre <caption>o projeto</caption>
          </p>
        </div>
        <div className="containerForm">
          <form onSubmit={form.handleSubmit}>
            <input
              type="email"
              placeholder="digite seu email"
              {...email.inputProps}
            />
            {email.error && <p>{email.error}</p>}
            <input
              type="password"
              placeholder="digite sua senha"
              {...password.inputProps}
            />
            {password.error && <p>{password.error}</p>}

            <button>login</button>
          </form>
          <p>ainda não tem uma conta?</p>
          <p className="btnCadastro">cadastre-se</p>
        </div>
      </aside>
    </div>
  );
}

export default Login;

import { useForm, useInput, useSelect } from "lx-react-form";
import { useEffect, useState } from "react";
import { Logo } from "../../styles/global";
import "./style.css";

/* import { Link } from "react-router-dom"; */

function Cadastro() {
  const todasImg = [
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80",
    "https://images.unsplash.com/photo-1495791185843-c73f2269f669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1583166614297-a97b68d5cead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80",
  ];

  const [imagem, setImagem] = useState(todasImg[0]);

  const escolheImagem = () => {
    const index = Math.floor(Math.random() * todasImg.length);
    return todasImg[index] !== imagem ? todasImg[index] : escolheImagem();
  };

  useEffect(() => {
    setTimeout(() => setImagem(escolheImagem), 5000);
  }, [imagem]);

  const name = useInput({ name: "name" });
  const email = useInput({ name: "email", validation: "email" });
  const password = useInput({ name: "password", validation: "senha" });
  const confirmarPass = useInput({
    name: "passwordConf",
    same: password.value,
  });
  const tipo = useSelect({ name: "type" });

  const form = useForm({
    clearFields: true,
    formFields: [name, email, password, tipo],
    submitCallback: (formData) => {
      //mandar pra api (redux)
      console.log(formData);
    },
  });

  return (
    <>
      <div className="background">
        <img className="backgroundImage" src={imagem} alt="imagem de fundo" />
        <img src="/logo192.png" className="logo" alt="Logo" />
        <Logo className="logo2">
          rel<span>ativi</span>
        </Logo>
      </div>
      <div className="containerCadastro">
        <section>
          <h3>Sobre {/* <Link to={""}>nós</Link> */}</h3>
          <h3>
            Sobre o{" "}
            {/* <Link to={"https://github.com/rel-ativi"}>projeto</Link> */}
          </h3>
        </section>
        <form onSubmit={form.handleSubmit}>
          <input
            type="text"
            {...name.inputProps}
            placeholder="Digite seu nome"
          />
          {name.error && <p>{name.error}</p>}

          <input
            type="email"
            {...email.inputProps}
            placeholder="Digite seu e-mail"
          />
          {email.error && <p>{email.error}</p>}

          <input
            type="password"
            {...password.inputProps}
            placeholder="Digite sua senha"
          />
          {password.error && <p>{password.error}</p>}

          <input
            type="password"
            {...confirmarPass.inputProps}
            placeholder="Confirme sua senha"
          />
          {confirmarPass.error && <p>{confirmarPass.error}</p>}

          <select {...tipo.inputProps}>
            <option value="">Selecione uma opção</option>
            <option value="Profissional">Conta profissional</option>
            <option value="User">Conta de usuario</option>
          </select>
          {tipo.error && <p>{tipo.error}</p>}

          <button type="submit">Cadastrar</button>
          <p>Já tem uma conta?</p>
          {/* <Link to={""}>Fazer Login</Link> */}
        </form>
      </div>
    </>
  );
}

export default Cadastro;

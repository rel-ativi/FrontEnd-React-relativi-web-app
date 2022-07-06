import { useForm, useInput } from "lx-react-form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cadastro() {
  const [imagem, setImagem] = useState("");

  const escolheImagem = () => {
    const todasImg = ["imagem1", "imagem2", "imagem3"];
    const index = Math.floor(Math.random() * todasImg.length);
    return todasImg[index];
  };

  useEffect(() => {
    const muda = setTimeout(() => setImagem(escolheImagem), 3000);
    return () => {
      clearTimeout(muda);
    };
  }, []);

  const name = useInput({ name: "name" });
  const email = useInput({ name: "email", validation: "email" });
  const password = useInput({ name: "password", validation: "senha" });
  const confirmarPass = useInput({
    name: "passwordConf",
    same: password.value,
  });
  const tipo = useInput({ name: "type" });

  const form = useForm({
    clearFields: true,
    formFields: [name, email, confirmarPass, tipo],
    submitCallback: (formData) => {
      //mandar pra api (redux)
      console.log(formData);
    },
  });

  return (
    <>
      <div>
        <img src={imagem} alt="imagem de fundo" />
        {/* <img src="logo" alt="relativi logo"/> */}
      </div>
      <div>
        <section>
          <h3>
            Sobre <Link to={""}>nós</Link>
          </h3>
          <h3>
            Sobre o <Link to={"https://github.com/rel-ativi"}>projeto</Link>
          </h3>
        </section>
        <form onSubmit={form.handleSubmit}></form>
      </div>
    </>
  );
}

export default Cadastro;

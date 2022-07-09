import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Cadastrar(data) {
  const msgSucesso = (mensagem) => toast.success(mensagem);
  const msgErro = (mensagem) => toast.error(mensagem);

  /*   const navigate = useNavigate(); */

  const dataSemType = Object.fromEntries(
    Object.entries(data).filter(([key]) => key !== "type")
  );

  const baseURL = "https://rel-ativi.herokuapp.com/";

  axios
    .post(`${baseURL}users`, dataSemType)
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

        axios
          .post(`${baseURL}prousers`, novaData, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            console.log(response);
            msgSucesso("Conta Profissional criada com sucesso!");
            /* navigate("/login"); */
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

        axios
          .post(`${baseURL}profiles`, novaData, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            console.log(response);
            msgSucesso("Perfil criado com sucesso");
            /* navigate("/login"); */
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

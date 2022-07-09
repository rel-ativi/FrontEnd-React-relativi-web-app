import axios from "axios";

export function Cadastrar(data) {
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
            /* toastify sucesso aqui */
            /* redireciona pra login */
          })
          .catch((erro) => {
            console.log(erro);
            /* toastify erro aqui */
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
            /* toastify sucesso aqui */
            /* redireciona pra login */
          })
          .catch((erro) => {
            console.log(erro);
            /* toastify erro aqui */
          });
      }
    })
    .catch((erro) => {
      console.log(erro);
      /* Toastify erro */
    });
}

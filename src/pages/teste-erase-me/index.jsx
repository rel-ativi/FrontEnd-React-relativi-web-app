import { useEffect } from "react";
import { useState } from "react";
import ListaDeCardsLoja from "../../components/listaDeCardsLoja";
import API from "../../services/API";

/* const array = [
  {
    img_url: "https://c.tenor.com/dlJSiLUJNmsAAAAC/math-calculate.gif",
    name: "Capoeira do Marcelo",
    duration_text: "1 hora",
    users_limit: 10,
    schedule: {
      recurrent: true,
      days: "Sabado",
      time_text: "20h",
      start_date: 1658597785566,
    },
    address: {
      line_1: "Rua aleatoria,420",
      line_2: "Jardim das Flores",
      city: "Guarulhos",
      state: "SP",
      zip_code: "cep",
    },
  },
  {
    img_url: "https://c.tenor.com/dlJSiLUJNmsAAAAC/math-calculate.gif",
    name: "Capoeira do Marcelo",
    duration_text: "1 hora",
    users_limit: 10,
    schedule: {
      recurrent: true,
      days: "Sabado",
      time_text: "20h",
      start_date: 1658597785566,
    },
    address: {
      line_1: "Rua aleatoria,420",
      line_2: "Jardim das Flores",
      city: "Guarulhos",
      state: "SP",
      zip_code: "cep",
    },
  },
  {
    img_url: "https://c.tenor.com/dlJSiLUJNmsAAAAC/math-calculate.gif",
    name: "Yoga com Henrique",
    duration_text: "1 hora",
    users_limit: 10,
    schedule: {
      recurrent: false,
      days: "Sabado",
      time_text: "20h",
      start_date: 1658597785566,
    },
    address: {
      line_1: "Rua aleatoria,420",
      line_2: "Jardim das Flores",
      city: "Guarulhos",
      state: "SP",
      zip_code: "cep",
    },
  },
]; */

export default function Teste() {
  const [lista, setLista] = useState([]);

  const token = localStorage.getItem("@relativi:token");

  API.get("/activities", {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => {
      setLista(response.data);
      /* console.log(response); */
    })
    .catch((error) => console.log(error));

  return <ListaDeCardsLoja array={lista} />;
}

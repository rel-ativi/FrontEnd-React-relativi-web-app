import CardAtividadeLoja from "../../components/cardAtividadeLoja";
import ListaDeCardsLoja from "../../components/listaDeCardsLoja";

const array = [
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
];

export default function Teste() {
  return <ListaDeCardsLoja array={array} />;
}

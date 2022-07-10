/* const objRecebido = {
    "userId": id do criador,
    "prouserId": id do perfil publico do criador, 
    "name": "nome da atividade",
    "type": " tipo de atividade",
    "price": número,
    "users_limit": número limite de pessoas,
    "img_url": "url da imagem",
    "duration_text": "duração em formato texto", 
    "duration_ms": numero duração em milisegundos,
    "description": "descrição da atividade",
    "users": [usuários inscritos],
    "schedule": {
      "recurrent": boleano se atividade é recorrente,
      "days": [ nome dos dias que as atividades ocorrem ],
      "time_text": "horário de inicio em texto", 
      "start_date": número representando a data
    },
    "address": {
      "line_1": "rua, número e complemento",
      "line_2": " bairro",
      "city": "cidade",
      "state": "estado",
      "zip_code": "cep"
    },
    "id": numero id 
}, 
Importante para cards: name, schedule, address, duration_text, users_limit
*/

import { CardLoja } from "./style";

import { MdCalendarToday } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { MdGrade } from "react-icons/md";
import { MdRoom } from "react-icons/md";
import { MdQueryBuilder } from "react-icons/md";
import { MdPermIdentity } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdLaunch } from "react-icons/md";

export default function CardAtividadeLoja({ obj }) {
  /* Aula recorrente */
  /*  const obj = {
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
  }; */

  /* Aula com data fixa */
  /*   const obj = {
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
  }; */

  const trim = (string, max) => {
    return string.substring(0, max);
  };

  const enderecoCru = `${obj.address.line_1} - ${obj.address.city}`;
  const endereco = trim(enderecoCru, 29) + `...`;

  const resolveDia = () => {
    if (obj.schedule.recurrent === true) {
      const diaCru = obj.schedule.days;
      const dia = `${diaCru}s - ${obj.schedule.time_text}`;
      return dia;
    } else {
      const diaCru = String(new Date(obj.schedule.start_date));
      const diaNum = diaCru.slice(8, 10);
      const mesEng = diaCru.slice(4, 7);
      const mesPt = () => {
        return mesEng === "Feb"
          ? "Fev"
          : mesEng === "Apr"
          ? "Abr"
          : mesEng === "May"
          ? "Mai"
          : mesEng === "Aug"
          ? "Ago"
          : mesEng === "Sep"
          ? "Set"
          : mesEng === "Oct"
          ? "Out"
          : "Dez";
      };
      const dia = `dia ${diaNum} de ${mesPt()}`;
      return dia;
    }
  };

  const ativaModal = () => {
    console.log("modal");
    /* ativar modal aqui */
  };

  return (
    <CardLoja>
      <div className="imagem">
        <img src={obj.img_url} alt={obj.name} />
        <MdLaunch size={"40px"} onClick={() => ativaModal()} />
      </div>
      <div className="info-container">
        <div className="title">
          <h3 className="nome">{obj.name}</h3>
          <MdDateRange size={"40px"} />
        </div>
        <div className="info">
          <div className="info-line rating">
            <MdGrade />
            <h4>4.9</h4>
          </div>
          <div className="info-line">
            <MdCalendarToday />
            <p>{resolveDia()}</p>
          </div>
          <div className="info-line">
            <MdRoom />
            <p>{endereco}</p>
          </div>
          <div className="info-line">
            <section className="time-limit">
              <MdQueryBuilder />
              <p>{obj.schedule.time_text}</p>
              <MdPermIdentity />
              <p>{obj.users_limit}</p>
            </section>
            <div className="favourite">
              <MdFavorite />
            </div>
          </div>
        </div>
      </div>
    </CardLoja>
  );
}

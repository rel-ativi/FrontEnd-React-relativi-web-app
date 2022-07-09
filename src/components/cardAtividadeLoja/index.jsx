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
import { FaBeer } from "react-icons/fa";

export default function CardAtividadeLoja() {
  /*   const obj1 = {
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

  const obj = {
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
  };

  const trim = (string, max) => {
    return string.substring(0, max);
  };

  const enderecoCru = `${obj.address.line_1} - ${obj.address.city}`;
  const endereco = trim(enderecoCru, 25) + `...`;

  const resolveDia = () => {
    if (obj.schedule.recurrent === true) {
      const diaCru = obj.schedule.days;
      if (diaCru.length > 7) {
        const index = diaCru.indexOf("-");
        const dia1 = diaCru.slice(0, index);
        const dia2 = diaCru.slice(index + 1);
        const dia = `ás ${dia1}s - ${dia2}s - ${obj.schedule.time_text}`;
        return dia;
      } else {
        const dia = `aos ${diaCru}s - ${obj.schedule.time_text}`;
        return dia;
      }
    } else {
      const diaCru = String(new Date(obj.schedule.start_date));
      const diaNum = diaCru.slice(8, 10);
      const mesEng = diaCru.slice(4, 7);
      const mesPt = () => {
        return mesEng === "Feb"
          ? "Fev"
          : mesEng === "Apr"
          ? "Abr"
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

  return (
    <CardLoja>
      <img src={obj.img_url} alt={obj.name} />
      <FaBeer />
      {/* icon modal */}
      <div className="info-container">
        <div className="title">
          <h3 className="nome">{obj.name}</h3>
          <FaBeer />
          {/* icon calendario */}
        </div>
        <div className="info">
          <div className="info-line">
            <FaBeer />
            {/* icon rating */}
            <h4>Rating</h4>
          </div>
          <div className="info-line">
            <FaBeer />
            {/* icon calendar */}
            <p>{resolveDia()}</p>
          </div>
          <div className="info-line">
            <FaBeer />
            {/* icon mapa */}
            <p>{endereco}</p>
          </div>
          <div className="info-line">
            <section className="time-limit">
              <FaBeer />
              {/* icon clock */}
              <p>{obj.schedule.time_text}</p>
              <FaBeer />
              {/* icon profile */}
              <p>{obj.users_limit}</p>
            </section>
            <FaBeer />
            {/* icon heart */}
          </div>
        </div>
      </div>
    </CardLoja>
  );
}
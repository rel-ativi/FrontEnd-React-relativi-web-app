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
  const trim = (string, max) => {
    return string.substring(0, max);
  };

  const enderecoCru = `${obj.address.line_1} - ${obj.address.city}`;
  const endereco = trim(enderecoCru, 29) + `...`;

  const resolveDia = () => {
    if (obj.schedule.recurrent === true) {
      const diaCru = obj.schedule.days;
      const dia = `${diaCru} - ${obj.schedule.time_text}`;
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
      const dia = `${diaNum} de ${mesPt()} - ${obj.schedule.time_text}`;
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

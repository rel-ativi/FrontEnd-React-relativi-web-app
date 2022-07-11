import { ModalBackgroundDescricao, ModalDescricaoContainer } from "./style";
import Botao from "../botao";

import { MdLogout } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdCalendarToday } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { MdGrade } from "react-icons/md";
import { MdRoom } from "react-icons/md";
import { MdQueryBuilder } from "react-icons/md";
import { MdPermIdentity } from "react-icons/md";

export default function ModalAtividadeLoja({ obj }) {
  const trim = (string, max) => {
    return string.substring(0, max);
  };

  const endereco = `${obj.address.line_1} - ${obj.address.line_2} - ${obj.address.city} - ${obj.address.state}`;

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

  /*   const vagas = obj.users_limit - obj.users.length;

  const resolveVagas = () => {
    return vagas > 1
      ? `${vagas} restantes`
      : vagas === 0
      ? `Sem vagas restantes`
      : `Apenas uma vaga restante!`;
  }; */

  const abreConfirmacao = () => {
    console.log("modal conf");
  };

  const fechaModal = () => {
    console.log("fecha modal");
  };

  return (
    <ModalBackgroundDescricao>
      <ModalDescricaoContainer>
        <div className="imagem">
          <img src={obj.img_url} alt={obj.name} />
          <MdLogout
            size={"40px"}
            onClick={() => {
              fechaModal();
            }}
          />
        </div>
        <div className="info-container">
          <div className="title">
            <h3>{obj.name}</h3>
            <MdFavorite size={"40px"} />
          </div>
          <div className="info">
            <div className="info-line rating">
              <MdGrade />
              <h4>4.9</h4>
            </div>
            <p>{obj.description}</p>
            <div className="info-preco">
              <div>
                <MdCalendarToday />
                <p>com: Instrutor</p>
              </div>
              <div>
                <MdPermIdentity />
                <h3>
                  R$ 50,00/<span>aula</span>
                </h3>
              </div>
            </div>

            <div className="info-line">
              <MdCalendarToday />
              <p>{resolveDia()}</p>
            </div>
            <div className="info-line">
              <MdRoom size={"16px"} />
              <p>{endereco}</p>
            </div>
            <div className="info-summary">
              <div className="info-line section">
                <MdQueryBuilder />
                <p>{obj.duration_text}</p>
              </div>
              <div className="info-line section">
                <MdPermIdentity />
                <p>{obj.users_limit} pessoas / valor!!! restantes</p>
              </div>
            </div>
            <div className="button-container">
              <MdDateRange size={"30px"} />
              <Botao
                onClick={() => {
                  abreConfirmacao();
                }}
              >
                Agendar
              </Botao>
            </div>
          </div>
        </div>
      </ModalDescricaoContainer>
    </ModalBackgroundDescricao>
  );
}

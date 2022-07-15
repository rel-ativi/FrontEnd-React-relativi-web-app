import {
  MdCalendarToday,
  MdClose,
  MdDateRange,
  MdFavorite,
  MdFavoriteBorder,
  MdGrade,
  MdLibraryAdd,
  MdOutlineAvTimer,
  MdPeopleAlt,
  MdPermIdentity,
  MdRoom,
} from "react-icons/md";

import Botao from "../botao";

import { useDispatch, useSelector } from "react-redux";
import { alteraPerfilUsuarioThunk } from "../../store/modules/perfilUsuario/thunks";
import { EstiloModalAtividade, ModalAtividadeBackground } from "./style";

export default function ModalAtividade({
  atividade,
  mostrarModalAtividade,
  mostrarCalendario,
}) {
  const dispatch = useDispatch();

  const { perfilUsuario, listaProfissionais } = useSelector((state) => state);

  const pro = listaProfissionais?.find(
    (pro) => pro.id === atividade?.prouserId
  );

  const agendadas = perfilUsuario?.activities.map((atvd) => atvd.activity);

  const resolveDia = () => {
    if (atividade?.schedule.recurrent === true) {
      const diaCru = atividade?.schedule.days;
      const dia = `${diaCru} - ${atividade?.schedule.time_text}`;
      return dia;
    } else {
      const diaCru = String(new Date(atividade?.schedule.start_date));
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
      const dia = `${diaNum} de ${mesPt()} - ${atividade.schedule.time_text}`;
      return dia;
    }
  };

  const adicionaFavorita = (id) => {
    const favoritas = perfilUsuario?.activities_favorites;

    const atualizada = {
      activities_favorites: [...favoritas, id],
    };

    dispatch(alteraPerfilUsuarioThunk(atualizada));
  };

  const removeFavorita = (id) => {
    const favoritas = perfilUsuario?.activities_favorites;

    const atualizada = {
      activities_favorites: favoritas.filter((atvd) => atvd !== id),
    };

    dispatch(alteraPerfilUsuarioThunk(atualizada));
  };

  const iconeFavorita = (id) => {
    const favoritas = perfilUsuario?.activities_favorites;

    return favoritas?.includes(id) ? (
      <MdFavorite
        onClick={() => {
          removeFavorita(id);
        }}
      />
    ) : (
      <MdFavoriteBorder
        onClick={() => {
          adicionaFavorita(id);
        }}
      />
    );
  };

  const agendar = () => {
    mostrarCalendario(true);
    mostrarModalAtividade(false);
  };

  return (
    <ModalAtividadeBackground>
      <EstiloModalAtividade url={atividade.img_url}>
        <figure className="imagem">
          {/* <img src={atividade.img_url} alt={atividade.name} /> */}
          <MdClose
            size={"40px"}
            onClick={() => {
              mostrarModalAtividade(false);
            }}
          />
        </figure>
        <section>
          <div className="title">
            <h3>{atividade.name}</h3>
            {iconeFavorita(atividade?.id)}
          </div>
          <div className="info">
            <div>
              <MdGrade />
              <p>4.9</p>
            </div>

            <p>{atividade?.description}</p>

            <section>
              <div>
                <MdPermIdentity />
                <p>com: {pro?.name.split(" ")[0]}</p>
              </div>
              <div>
                <p>
                  <span>R$ {atividade?.price?.toFixed(2)} /aula</span>
                </p>
              </div>
            </section>

            <div>
              <MdCalendarToday />
              <p>{resolveDia()}</p>
            </div>
            <div className="info-line">
              <MdRoom size={"16px"} />
              <p>
                {atividade.address.line_1}
                <br />
                {atividade.address.line_2} - {atividade.address.city}
                <br />
                {atividade.address.state}
              </p>
            </div>
            <section>
              <div className="info-line section">
                <MdOutlineAvTimer />
                <p>{atividade.duration_text}</p>
              </div>
              <div className="info-line section">
                <MdPeopleAlt />
                <p>{atividade.users_limit} pessoas</p>
              </div>
            </section>
            <div className="button-container">
              {agendadas?.includes(atividade?.id) ? (
                <Botao
                  onClick={() => {
                    agendar();
                  }}
                >
                  <MdDateRange />
                  Editar Agendamento
                </Botao>
              ) : (
                <Botao
                  onClick={() => {
                    agendar();
                  }}
                >
                  <MdLibraryAdd />
                  Agendar
                </Botao>
              )}
            </div>
          </div>
        </section>
      </EstiloModalAtividade>
    </ModalAtividadeBackground>
  );
}

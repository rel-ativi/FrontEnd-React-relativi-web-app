import { EstiloCardLoja } from "./style";

import {
  MdCalendarToday,
  MdFavorite,
  MdFavoriteBorder,
  MdGrade,
  MdLaunch,
  MdLibraryAdd,
  MdOutlineAvTimer,
  MdPeopleAlt,
  MdRoom,
} from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";

import { alteraPerfilUsuarioThunk } from "../../store/modules/perfilUsuario/thunks";

export default function CardLoja({
  atividade,
  setAtividadeAtual,
  mostrarModalAtividade,
  mostrarCalendario,
}) {
  const dispatch = useDispatch();

  const { perfilUsuario } = useSelector((state) => state);

  const endereco = `${atividade.address.line_1} - ${atividade.address.city}`;

  const resolveDia = () => {
    if (atividade.schedule.recurrent === true) {
      const diaCru = atividade.schedule.days;
      const dia = `${diaCru} - ${atividade.schedule.time_text}`;
      return dia;
    } else {
      const diaCru = String(new Date(atividade.schedule.start_date));
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

  const expandir = () => {
    setAtividadeAtual(atividade);
    mostrarModalAtividade(true);
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

  const agendar = (atvd) => {
    setAtividadeAtual({ ...atvd });
    mostrarCalendario(true);
  };

  return (
    <EstiloCardLoja url={atividade.img_url}>
      <figure>
        <MdLaunch onClick={() => expandir()} />
      </figure>
      <section>
        <div className="title">
          <h3>{atividade.name}</h3>
          <MdLibraryAdd onClick={() => agendar(atividade)} />
        </div>
        <div className="info">
          <div>
            <MdGrade />
            <p>4.9</p>
          </div>
          <div>
            <MdCalendarToday />
            <p>{resolveDia()}</p>
          </div>
          <div>
            <MdRoom />
            <p>{endereco}</p>
          </div>
          <div>
            <MdOutlineAvTimer />
            <span>{atividade.duration_text}</span>
            <MdPeopleAlt />
            <span>{atividade.users_limit} pessoas</span>
          </div>
          <div>{iconeFavorita(atividade.id)}</div>
        </div>
      </section>
    </EstiloCardLoja>
  );
}

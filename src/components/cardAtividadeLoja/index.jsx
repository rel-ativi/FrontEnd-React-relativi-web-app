import { CardLoja } from "./style";

import { MdCalendarToday } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import { MdGrade } from "react-icons/md";
import { MdRoom } from "react-icons/md";
import { MdOutlineAvTimer } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdLaunch } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";

import { alteraPerfilUsuarioThunk } from "../../store/modules/perfilUsuario/thunks";

export default function CardAtividadeLoja({
  obj,
  setAtividadeEmFoco,
  setMostrarModalDescricao,
  favoritos,
  setFavoritos,
}) {
  const dispatch = useDispatch;
  /*   const { perfilUsuario } = useSelector((state) => state);
  const { perfilProfissional } = useSelector((state) => state); */

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

  const ativaModalDescricao = () => {
    setAtividadeEmFoco(obj);
    setMostrarModalDescricao(true);
  };

  const ativaCompra = () => {
    console.log("modalCompra");
  };

  const gerarIconeFavorito = () => {
    const checker = favoritos.includes(obj.id);
    return checker ? (
      <MdFavorite
        onClick={() => {
          favoritar();
        }}
      />
    ) : (
      <MdFavoriteBorder
        onClick={() => {
          favoritar();
        }}
      />
    );
  };

  const favoritar = () => {
    const checker = favoritos.includes(obj.id);
    const novoPerfil = { activities_favorites: favoritos };
    if (!checker) {
      setFavoritos([...favoritos, obj.id]);
      dispatch(alteraPerfilUsuarioThunk(novoPerfil));
    } else {
      const novosFavoritos = favoritos.filter((el) => el !== obj.id);
      setFavoritos([...novosFavoritos]);
      dispatch(alteraPerfilUsuarioThunk(novoPerfil));
    }
  };

  /*   const nomeDoPro = () => {
    const encontraPro = perfilProfissional.filter(
      (el) => el.userId === obj.userId
    );
    return encontraPro.nome;
  }; */

  return (
    <CardLoja>
      <div className="imagem">
        <img src={obj.img_url} alt={obj.name} />
        <MdLaunch size={"40px"} onClick={() => ativaModalDescricao()} />
      </div>
      <div className="info-container">
        <div className="title">
          <h3 className="nome">{obj.name}</h3>
          <MdLibraryAdd size={"40px"} onClick={() => ativaCompra()} />
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
              <MdOutlineAvTimer />
              <p>{obj.duration_text}</p>
              <MdPeopleAlt />
              <p>{obj.users_limit} pessoas</p>
            </section>
            <div className="favourite">{gerarIconeFavorito()}</div>
          </div>
        </div>
      </div>
    </CardLoja>
  );
}

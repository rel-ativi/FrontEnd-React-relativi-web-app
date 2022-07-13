import Botao from "../botao";
import { ModalBackgroundDescricao, ModalDescricaoContainer } from "./style";

import {
  MdCalendarToday,
  MdClose,
  MdFavorite,
  MdFavoriteBorder,
  MdGrade,
  MdLibraryAdd,
  MdOutlineAvTimer,
  MdPeopleAlt,
  MdPermIdentity,
  MdRoom,
} from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { alteraPerfilUsuarioThunk } from "../../store/modules/perfilUsuario/thunks";

export default function ModalAtividadeLoja({
  obj,
  mostrarModalDescricao,
  setMostrarModalDescricao,
  favoritos,
  setFavoritos,
}) {
  const dispatch = useDispatch();
  const { listaProfissionais } = useSelector((state) => state);
  if (obj === undefined) {
    return null;
  }

  const endereco = () =>
    `${obj.address.line_1} - ${obj.address.line_2} - ${obj.address.city} - ${obj.address.state}`;

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

  const abreConfirmacao = () => {
    console.log("modal conf");
  };

  const fechaModal = () => {
    setMostrarModalDescricao(false);
  };

  const gerarIconeFavorito = () => {
    const checker = favoritos.includes(obj.id);
    return checker ? (
      <MdFavorite
        size={"30px"}
        onClick={() => {
          favoritar();
        }}
      />
    ) : (
      <MdFavoriteBorder
        size={"30px"}
        onClick={() => {
          favoritar();
        }}
      />
    );
  };

  const nomeDoPro = () => {
    const value = obj.prouserId;
    const encontraPro = listaProfissionais.filter((el) => el.userId === value);
    return encontraPro[0].name;
  };

  const favoritar = () => {
    const checker = favoritos.includes(obj.id);
    if (!checker) {
      setFavoritos([...favoritos, obj.id]);
      const novoPerfil = { activities_favorites: favoritos };
      dispatch(alteraPerfilUsuarioThunk(novoPerfil));
    } else {
      const novosFavoritos = favoritos.filter((el) => el !== obj.id);
      setFavoritos([...novosFavoritos]);
      const novoPerfil = { activities_favorites: favoritos };
      dispatch(alteraPerfilUsuarioThunk(novoPerfil));
    }
  };

  return mostrarModalDescricao ? (
    <ModalBackgroundDescricao>
      <ModalDescricaoContainer>
        <div className="imagem">
          <img src={obj.img_url} alt={obj.name} />
          <MdClose
            size={"40px"}
            onClick={() => {
              fechaModal();
            }}
          />
        </div>
        <div className="info-container">
          <div className="title">
            <h3>{obj.name}</h3>
            {gerarIconeFavorito()}
          </div>
          <div className="info">
            <div className="info-line rating">
              <MdGrade />
              <h4>4.9</h4>
            </div>
            <p>{obj.description}</p>
            <div className="info-preco">
              <div>
                <MdPermIdentity />
                <p>com: {nomeDoPro()}</p>
              </div>
              <div>
                <h3>
                  R$ {obj.price},00 <span>/aula</span>
                </h3>
              </div>
            </div>

            <div className="info-line">
              <MdCalendarToday />
              <p>{resolveDia()}</p>
            </div>
            <div className="info-line">
              <MdRoom size={"16px"} />
              <p>{endereco()}</p>
            </div>
            <div className="info-summary">
              <div className="info-line section">
                <MdOutlineAvTimer />
                <p>{obj.duration_text}</p>
              </div>
              <div className="info-line section">
                <MdPeopleAlt />
                <p>{obj.users_limit} pessoas</p>
              </div>
            </div>
            <div className="button-container">
              <Botao
                onClick={() => {
                  abreConfirmacao();
                }}
              >
                <MdLibraryAdd size={"30px"} />
                Agendar
              </Botao>
            </div>
          </div>
        </div>
      </ModalDescricaoContainer>
    </ModalBackgroundDescricao>
  ) : null;
}

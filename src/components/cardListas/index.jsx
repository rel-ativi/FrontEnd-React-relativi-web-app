import { MdAspectRatio, MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { alteraPerfilUsuarioThunk } from "../../store/modules/perfilUsuario/thunks";
import { EstiloCard } from "./style";

export function CardLista({
  favorita,
  atividade,
  mostrarAgenda,
  setAtividadeAtual,
  mostrarModalAtividade,
}) {
  const dispatch = useDispatch();

  const { perfilUsuario, listaProfissionais } = useSelector((state) => state);

  const removeFavorita = (id) => {
    const favoritas = perfilUsuario?.activities_favorites;
    const atualizada = {
      activities_favorites: favoritas.filter((atvd) => atvd !== id),
    };

    dispatch(alteraPerfilUsuarioThunk(atualizada));
  };

  const resumoAtvd = () => {
    const pro = listaProfissionais?.find(
      (pro) => pro.id === atividade?.prouserId
    );
    const data = new Date(atividade?.schedule.start_date);

    return {
      id: atividade?.id,
      nome: atividade?.name,
      data: `${data.getDate()}/${data.getMonth()}`,
      horario: data.getHours(),
      pro: pro.name,
    };
  };

  return (
    <EstiloCard>
      <p>{resumoAtvd().nome}</p>
      <p>{resumoAtvd().data}</p>
      <p>{resumoAtvd().horario}h</p>
      <div>
        <MdAspectRatio
          onClick={() => {
            setAtividadeAtual(resumoAtvd().id);
            mostrarModalAtividade(true);
            mostrarAgenda(false);
          }}
        />
        {favorita && (
          <MdFavoriteBorder
            onClick={() => {
              removeFavorita(resumoAtvd().id);
            }}
          />
        )}
      </div>
      <p>{resumoAtvd().pro}</p>
    </EstiloCard>
  );
}

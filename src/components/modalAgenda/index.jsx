import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { CardLista } from "../cardListas";
import { BackgoundModal, EstiloAgenda } from "./style";

export default function ModalAgenda({
  mostrarAgenda,
  setAtividadeAtual,
  mostrarModalAtividade,
}) {
  const agenda = useRef();
  const { perfilUsuario, atividades } = useSelector((state) => state);

  const agendaAtividades = () => {
    const listaIds = perfilUsuario?.activities?.map((atv) => atv.activity);
    return atividades.filter((atv) => listaIds.includes(atv.id));
  };

  useEffect(() => {
    const clicouFora = (event) => {
      const target = event.target;
      if (!agenda.current?.contains(target)) {
        mostrarAgenda(false);
      }
    };
    document.addEventListener("mousedown", clicouFora);

    return () => {
      document.removeEventListener("mousedown", clicouFora);
    };
  }, [mostrarAgenda]);

  return (
    <BackgoundModal>
      <EstiloAgenda ref={agenda}>
        <small>clique ou toque fora para fechar</small>
        {agendaAtividades()?.map((atvd) => (
          <CardLista
            atividade={atvd}
            key={atvd.id}
            mostrarAgenda={mostrarAgenda}
            setAtividadeAtual={setAtividadeAtual}
            mostrarModalAtividade={mostrarModalAtividade}
          />
        ))}
      </EstiloAgenda>
    </BackgoundModal>
  );
}

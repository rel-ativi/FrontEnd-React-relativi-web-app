import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { EstiloModalAgendar, FundoPreto } from "./style";

import Botao from "../botao";
import { useDispatch, useSelector } from "react-redux";
import { alteraPerfilUsuarioThunk } from "../../store/modules/perfilUsuario/thunks";

export default function ModalConfirmarAgendamento({
  mostrarCalendario,
  atividadeAtual,
  ...rest
}) {
  const calendario = useRef();
  const dispatch = useDispatch();
  const { perfilUsuario } = useSelector((state) => state);

  const [value, onChange] = useState(new Date());
  const [editar, mostrarEditar] = useState(false);

  const agendadas = perfilUsuario?.activities.map((atvd) => atvd.activity);

  const agendar = () => {
    const atualizada = {
      activities: [
        ...perfilUsuario?.activities,
        { activity: atividadeAtual?.id, when: value },
      ],
    };

    dispatch(alteraPerfilUsuarioThunk(atualizada));
    mostrarCalendario(false);
  };

  const desagendar = () => {
    const atualizada = {
      activities: perfilUsuario?.activities.filter(
        (atvd) => atvd.activity !== atividadeAtual?.id
      ),
    };

    dispatch(alteraPerfilUsuarioThunk(atualizada));
    mostrarCalendario(false);
  };

  useEffect(() => {
    const clicouFora = (event) => {
      const target = event.target;
      if (!calendario.current?.contains(target)) {
        mostrarCalendario(false);
        mostrarEditar(false);
      }
    };
    document.addEventListener("mousedown", clicouFora);

    return () => {
      document.removeEventListener("mousedown", clicouFora);
    };
  }, [mostrarCalendario]);

  return (
    <FundoPreto>
      <EstiloModalAgendar {...rest} ref={calendario}>
        <p>Escolhas uma data de início e confirme seu agendamento</p>
        <Calendar onChange={onChange} value={value} />
        {editar ? (
          <>
            <p className="rosa">
              Se cancelar o agendamento o valor de{" "}
              <span>R${atividadeAtual?.price?.toFixed(2)}</span> será estornado
              do seu método de pagamento.
            </p>
            <Botao larguraFixa="70%" onClick={agendar}>
              confirmar nova data
            </Botao>
            <Botao
              cor="branca"
              tamanho="p"
              larguraFixa="70%"
              onClick={desagendar}
            >
              cancelar agendamento
            </Botao>
          </>
        ) : (
          <>
            {agendadas?.includes(atividadeAtual?.id) ? (
              <>
                <p className="rosa">
                  Clique editar para escolher uma nova data
                </p>
                <Botao
                  larguraFixa="60%"
                  onClick={() => {
                    mostrarEditar(true);
                  }}
                >
                  editar
                </Botao>
              </>
            ) : (
              <>
                <p className="rosa">
                  Ao clicar confimar o valor de{" "}
                  <span>R${atividadeAtual?.price?.toFixed(2)}</span> será
                  cobrado do seu método de pagamento
                </p>
                <Botao larguraFixa="60%" onClick={agendar}>
                  confirmar
                </Botao>
              </>
            )}
          </>
        )}
      </EstiloModalAgendar>
    </FundoPreto>
  );
}

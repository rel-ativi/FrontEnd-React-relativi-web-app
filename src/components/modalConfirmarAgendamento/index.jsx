import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { EstiloModalAgendar, FundoPreto } from "./style";

import Botao from "../botao";

export default function ModalConfirmarAgendamento({
  mostrarCalendario,
  ...rest
}) {
  const calendario = useRef();
  const [value, onChange] = useState(new Date());

  let valorProvisorio = 50;

  useEffect(() => {
    const clicouFora = (event) => {
      const target = event.target;
      if (!calendario.current?.contains(target)) {
        mostrarCalendario(false);
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
        <p className="rosa">
          Ao clicar confimar o valor de{" "}
          <span>R${valorProvisorio.toFixed(2)}</span> será cobrado do seu método
          de pagamento
        </p>
        <Botao larguraFixa="60%">confirmar</Botao>
      </EstiloModalAgendar>
    </FundoPreto>
  );
}

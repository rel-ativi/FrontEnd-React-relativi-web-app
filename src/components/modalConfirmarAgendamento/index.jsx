import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { EstiloModalAgendar, FundoPreto } from "./style";

import Botao from "../botao";

export default function ModalConfirmarAgendamento({ ...rest }) {
  const [value, onChange] = useState(new Date());
  let valorProvisorio = 50;
  return (
    <FundoPreto>
      <EstiloModalAgendar {...rest}>
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

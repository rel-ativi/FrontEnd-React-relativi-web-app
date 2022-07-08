import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { GoCalendar, GoKebabHorizontal } from "react-icons/go";

import ModalCalendario from "./modalHeaderCalendario";

import ModalLenbreSe from "./modalHeaderLenbreSe";

import { HeaderConteiner } from "./style";

// import "./style.css";

function Header() {
  const initialState = {
    email: "tytyereer@kenzie.com.br",
    nome: "Leticia matos dos Santos",
    password: "123",
  };

  const dadosUserAtividadesTest = [
    {
      nome: "atividades",
      data: "10/05",
      horario: "20h",
      professor: "hugo"
    },
    {
      nome: "atividades",
      data: "10/05",
      horario: "19h",
      professor: "hugo"
    },
    {
      nome: "atividades",
      data: "10/05",
      horario: "20h",
      professor: "hugo"
    },
  ];

  const [modalLenbreSe, setModalLenbreSe] = useState(false);
  const [modalCalendario, setCalendario] = useState(false);

  const nomeDoUsuario = initialState.nome.split(" ")[0];

  return (
    <HeaderConteiner>
      <div className="divHeader">
        <span>
          Relative
        </span>
        <span>
          {" "}
          <BiLogOut />
        </span>
      </div>
      <div className="divHeader">
        <span>Ola,</span>
        <span>
          <GoCalendar
            onClick={() => {
              if (modalCalendario === true) {
                setCalendario(false);
              } else {
                setCalendario(true);
              }
            }}
          />
        </span>
      </div>
      <div className="divHeader">
        <span>{nomeDoUsuario}</span>
        <span>
          <GoKebabHorizontal />
        </span>
      </div>
      <ModalLenbreSe
        modalLenbreSe={modalLenbreSe}
        setModalLenbreSe={setModalLenbreSe}
        dadosUserAtividadesTest={dadosUserAtividadesTest}
      ></ModalLenbreSe>
      <div className="sectionCalendario">
        {modalCalendario && (
          <ModalCalendario
            dadosUserAtividadesTest={dadosUserAtividadesTest}
            setCalendario={setCalendario}
          ></ModalCalendario>
        )}
      </div>
    </HeaderConteiner>
  );
}

export default Header;

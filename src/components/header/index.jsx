import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { GoCalendar, GoKebabHorizontal } from "react-icons/go";
import { AiFillCalendar } from "react-icons/ai";
import { IoArrowDownCircleSharp } from "react-icons/io5";
import { HiArrowCircleDown } from "react-icons/hi";


import ModalCalendario from "./modalHeaderCalendario";

import ModalLenbreSe from "./modalHeaderLenbreSe";

import { HeaderConteiner } from "./style";

import { LogoTexto, LogoIcone } from "../logo/index";

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
      professor: "hugo",
    },
    {
      nome: "atividades",
      data: "10/05",
      horario: "19h",
      professor: "hugo",
    },
    {
      nome: "atividades",
      data: "10/05",
      horario: "20h",
      professor: "hugo",
    },
  ];

  const [modalLenbreSe, setModalLenbreSe] = useState(false);
  const [modalCalendario, setCalendario] = useState(false);

  const nomeDoUsuario = initialState.nome.split(" ")[0];

  return (
    <HeaderConteiner>
      <header>
        <section className="mobile">
          <div className="divHeaderMobile">
            {/* <div className="container"> */}
            <span>
              <span className="TextAlinharMargin">
                <LogoTexto cor={"inversa"} largura={"90px"}></LogoTexto>
              </span>
            </span>
            <span>
              {" "}
              <BiLogOut className="textRed" />
            </span>
          </div>
          <div className="divHeaderMobile">
            <span className="ola">Ola,</span>
            <span>
              <GoCalendar
                className="textRed"
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
          <div className="divHeaderMobile">
            <span className="textRed">{nomeDoUsuario}</span>
            <span className="textRed">
              <GoKebabHorizontal />
            </span>
          </div>
          
          <div className="divLenbreSe">
          <div>
            <AiFillCalendar />
            Lenbre-se
          </div>

          <span
            onClick={() => {
              if (modalLenbreSe === true) {
                setModalLenbreSe(false);
              } else {
                setModalLenbreSe(true);
              }
            }}
          >
            <IoArrowDownCircleSharp />
          </span>
        </div>

        </section>

        <section className="desktop">
          <div className="headerDesktop">
            <div className="LogoDesktop">
              <LogoIcone cor={"inversa"} largura={"50px"}></LogoIcone>
              <br />
              <LogoTexto cor={"inversa"} largura={"50px"}></LogoTexto>
            </div>

            <div className="parteSuperiorHeaderDesktop">
              <div>
                <span className="olaDesktop">ola,</span>
                <span className="nomeUsuario"> juliana</span>
              </div>

              <div className="selecionarOpicoes">
                <div className="alinarTexto">
                  <span>
                    <GoCalendar
                      className="textRed"
                      onClick={() => {
                        if (modalCalendario === true) {
                          setCalendario(false);
                        } else {
                          setCalendario(true);
                        }
                      }}
                    />
                  </span>
                  <span className="ajustarCorDesktop">agenda</span>
                </div>

                <div className="alinarTexto">
                  <span>
                    <GoKebabHorizontal className="textRed" />
                  </span>
                  <span className="ajustarCorDesktop">dashboard</span>
                </div>

                <div className="alinarTexto">
                  <span>
                    <BiLogOut className="textRed" />
                  </span>
                  <span className="ajustarCorDesktop">sair</span>
                </div>
              </div>
            </div>
          </div>

          <div></div>
          <div className="parteInferiorHeaderDesktop">
            <div className="informacoesProximaAulaDesktop">
              <span className="textInformacoesDesktop">Lembre-se! Você tem:</span>
              <span className="textInformacoesDesktop">Aula de Ballet 1º Ano - Se...</span>
              <span className="textInformacoesDesktop">em:</span>
              <span className="textInformacoesDesktop">11/07/2022</span>
              <span className="textInformacoesDesktop">às:</span>
              <span className="textInformacoesDesktop">20h</span>
              <span className="textInformacoesDesktop">com:</span>
              <span className="textInformacoesDesktop">Hugo</span>
              <span className="textInformacoesDesktop"><HiArrowCircleDown/></span>

            </div>
          </div>
        </section>



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
        {/* </div> */}
      </header>
    </HeaderConteiner>
  );
}

export default Header;

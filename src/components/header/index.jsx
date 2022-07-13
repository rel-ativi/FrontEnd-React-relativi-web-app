import { useEffect, useState } from "react";
import {
  MdAspectRatio,
  MdDeveloperBoard,
  MdLogout,
  MdToday,
  MdViewModule,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LogoQuadrado, LogoTexto } from "../logo/index";
import { EstiloHeader } from "./style";

export default function Header({
  naLoja,
  naDash,
  setAtividadeAtual,
  mostrarModalAtividade,
}) {
  const { atividades, perfilUsuario, perfilProfissional } = useSelector(
    (state) => state
  );
  const [usuario, setUsuario] = useState({ name: "nome" });
  const [tipo, setTipo] = useState("");

  const navigate = useNavigate();

  const agendaAtividades = () => {
    const listaIds = perfilUsuario?.activities?.map((atv) => atv.activity);
    return atividades.filter((atv) => listaIds.includes(atv.id));
  };

  const proximaAtividade = () => {
    const data = new Date(agendaAtividades()[0]?.schedule.start_date);

    return {
      id: agendaAtividades()[0]?.id,
      nome: agendaAtividades()[0]?.name,
      data: `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`,
      horario: data.getHours(),
    };
  };

  const logout = () => {
    localStorage.clear();

    navigate("/");
  };

  useEffect(() => {
    if (!!perfilUsuario.name) {
      setUsuario({ ...perfilUsuario });
      setTipo("usuario");
    } else {
      setUsuario({ ...perfilProfissional });
      setTipo("profissional");
    }
  }, [perfilUsuario, perfilProfissional]);

  return (
    <>
      {usuario?.name ? (
        <>
          <EstiloHeader>
            <div className="container">
              <div className="logoMobile">
                <LogoTexto cor="inversa" largura="7rem" />
              </div>
              <div className="logoTablet">
                <LogoTexto cor="inversa" largura="10rem" />
              </div>
              <div className="logoDesktop">
                <LogoQuadrado cor="inversa" largura="5rem" />
              </div>
              <p>
                Olá, <span>{usuario.name.split(" ")[0]}</span>
              </p>
              <div className="interacao">
                <div onClick={logout}>
                  <MdLogout />
                  <span>sair</span>
                </div>
                {tipo === "usuario" && (
                  <>
                    {naLoja && (
                      <>
                        <div>
                          <MdToday />
                          <span>agenda</span>
                        </div>
                        <div>
                          <MdDeveloperBoard />
                          <span>dashboard</span>
                        </div>
                      </>
                    )}
                    {naDash && (
                      <div>
                        <MdViewModule /> <span>voltar para lista</span>
                      </div>
                    )}
                  </>
                )}
              </div>
              {tipo === "usuario" && (
                <div className="lembrete">
                  <p>Lembre-se! Você tem:</p>
                  <span>{proximaAtividade().nome}</span>
                  <p>em:</p>
                  <span>{proximaAtividade().data}</span>
                  <p>às:</p>
                  <span>{proximaAtividade().horario}h</span>
                  <MdAspectRatio
                    onClick={() => {
                      setAtividadeAtual(proximaAtividade().id);
                      mostrarModalAtividade(true);
                    }}
                  />
                </div>
              )}
            </div>
          </EstiloHeader>
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
    </>
  );
}

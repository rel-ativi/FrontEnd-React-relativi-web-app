import { useEffect, useState } from "react";
import {
  MdAspectRatio,
  MdDeveloperBoard,
  MdExpandLess,
  MdExpandMore,
  MdLogout,
  MdToday,
  MdViewModule,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LogoQuadrado, LogoTexto } from "../logo/index";
import { EstiloHeader, LembreteMobile, LembreteMobileFechado } from "./style";

export default function Header({
  naLoja,
  naDash,
  mostrarAgenda,
  setAtividadeAtual,
  mostrarModalAtividade,
}) {
  const { atividades, perfilUsuario, perfilProfissional, listaProfissionais } =
    useSelector((state) => state);

  const [lembreteMobile, mostrarLembreteMobile] = useState(false);
  const [usuario, setUsuario] = useState({ name: "nome" });
  const [tipo, setTipo] = useState("");

  const navigate = useNavigate();

  const agendaAtividades = () => {
    const listaIds = perfilUsuario?.activities?.map((atv) => atv.activity);
    return atividades.filter((atv) => listaIds.includes(atv.id));
  };

  const proximaAtividade = () => {
    const atividade = agendaAtividades()[0];
    const pro = listaProfissionais?.find(
      (pro) => pro.id === atividade?.prouserId
    );
    const data = new Date(atividade?.schedule.start_date);

    return {
      id: atividade?.id,
      nome: atividade?.name,
      data: `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`,
      horario: data.getHours(),
      pro: pro?.name.split(" ")[0],
      atvd: atividade,
    };
  };

  const logout = () => {
    localStorage.removeItem("@relativi:token");
    localStorage.removeItem("@relativi:userId");
    localStorage.removeItem("@relativi:profileId");

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
                        <div
                          onClick={() => {
                            mostrarAgenda(true);
                          }}
                        >
                          <MdToday />
                          <span>agenda</span>
                        </div>
                        <div
                          onClick={() => {
                            navigate("/dashboard");
                          }}
                        >
                          <MdDeveloperBoard />
                          <span>dashboard</span>
                        </div>
                      </>
                    )}
                    {naDash && (
                      <div
                        onClick={() => {
                          navigate("/");
                        }}
                      >
                        <MdViewModule /> <span>voltar para lista</span>
                      </div>
                    )}
                  </>
                )}
              </div>
              {tipo === "usuario" && perfilUsuario?.activities.length > 0 && (
                <div className="lembrete">
                  <p>Lembre-se! Você tem:</p>
                  <span>{proximaAtividade().nome}</span>
                  <p>em:</p>
                  <span>{proximaAtividade().data}</span>
                  <p>às:</p>
                  <span>{proximaAtividade().horario}h</span>
                  <p>com:</p>
                  <span>{proximaAtividade().pro}</span>
                  <MdAspectRatio
                    onClick={() => {
                      setAtividadeAtual(proximaAtividade().atvd);
                      mostrarModalAtividade(true);
                    }}
                  />
                </div>
              )}
            </div>
          </EstiloHeader>
          {tipo === "usuario" &&
            perfilUsuario?.activities.length > 0 &&
            !naDash && (
              <>
                {lembreteMobile ? (
                  <LembreteMobile>
                    <div>
                      <MdToday /> <p>Lembre-se!</p>{" "}
                      <MdExpandLess
                        onClick={() => {
                          mostrarLembreteMobile(false);
                        }}
                      />
                    </div>
                    <div>
                      <p>Você tem:</p>
                      <span>{proximaAtividade().nome}</span>
                      <p>em:</p>
                      <span>{proximaAtividade().data}</span>
                      <p>às:</p>
                      <span>{proximaAtividade().horario}h</span>
                      <p>com:</p>
                      <span>{proximaAtividade().pro}</span>
                      <MdAspectRatio
                        onClick={() => {
                          setAtividadeAtual(proximaAtividade().atvd);
                          mostrarLembreteMobile(false);
                          mostrarModalAtividade(true);
                        }}
                      />
                    </div>
                  </LembreteMobile>
                ) : (
                  <LembreteMobileFechado>
                    <MdToday /> <p>Lembre-se!</p>{" "}
                    <MdExpandMore
                      onClick={() => {
                        mostrarLembreteMobile(true);
                      }}
                    />
                  </LembreteMobileFechado>
                )}
              </>
            )}
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
    </>
  );
}

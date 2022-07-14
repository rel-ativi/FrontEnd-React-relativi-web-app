import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Botao from "./../botao";

import { ContainerFlex } from "../../styles/global";
import { Card } from "./styles";

export default function Filtro({ setListaAtividades }) {
  const { atividades } = useSelector((state) => state);
  const [filtros, setFiltros] = useState([
    "todos",
    "artes marciais",
    "danças",
    "fitness",
    "funcional",
    "wellness",
    "outros",
  ]);

  const tiposAtividades = Array.from(
    new Set(atividades.map((obj) => obj.type))
  );

  tiposAtividades.unshift("todos");

  useEffect(() => {
    filtros.length === 0 && setFiltros(tiposAtividades);
  }, [filtros.length, tiposAtividades]);

  const filtrar = (str) => {
    if (str === "todos") {
      setListaAtividades([...atividades]);
    } else {
      const result = atividades.filter((obj) => obj.type === str);
      setListaAtividades([...result]);
    }
  };

  return (
    <Card>
      <ContainerFlex alignItems="center" gap="4px">
        {filtros.length > 1 ? (
          <>
            {filtros?.map((str) => (
              <Botao
                larguraFixa="130px"
                tamanho="p"
                key={str}
                onClick={() => filtrar(str)}
              >
                {str}
              </Botao>
            ))}
          </>
        ) : (
          <p>carregando...</p>
        )}
      </ContainerFlex>
    </Card>
  );
}

import { ContainerFlex } from "../../styles/global";
import { ContainerSelect } from "./style";

export default function Select({
  nome,
  label,
  opcoes,
  textoAuxiliar,
  ...rest
}) {
  return (
    <ContainerSelect>
      {label && <label htmlFor={nome}>{label}</label>}
      <ContainerFlex alignItems="center" justifyContent="center">
        <select id={nome} name={nome} {...rest}>
          {opcoes.map((str) => (
            <option key={str.toLowerCase()} value={str.toLowerCase()}>
              {str}
            </option>
          ))}
        </select>
      </ContainerFlex>
      {textoAuxiliar && <small>{textoAuxiliar}</small>}
    </ContainerSelect>
  );
}

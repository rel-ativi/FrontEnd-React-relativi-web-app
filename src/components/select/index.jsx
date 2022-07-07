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
      <select id={nome} name={nome} {...rest}>
        {opcoes.map((str) => (
          <option key={str.toLowerCase()} value={str.toLowerCase()}>
            {str}
          </option>
        ))}
      </select>
      {textoAuxiliar && <small>{textoAuxiliar}</small>}
    </ContainerSelect>
  );
}

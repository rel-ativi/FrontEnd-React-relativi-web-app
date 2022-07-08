import { ContainerInput } from "./style";

export default function Input({
  nome,
  label,
  placeholder,
  textoAuxiliar,
  icone: Icone,
  ...rest
}) {
  return (
    <ContainerInput>
      {label && <label htmlFor={nome}>{label}</label>}
      <div>
        <input id={nome} name={nome} placeholder={placeholder} {...rest} />
<<<<<<< HEAD
        {/* <Icone /> */}
=======
        {Icone && <Icone />}
>>>>>>> develop
      </div>
      {textoAuxiliar && <small>{textoAuxiliar}</small>}
    </ContainerInput>
  );
}

import { ContainerFlex } from "../../styles/global";
import CardAtividadeLoja from "../cardAtividadeLoja";
import { ContainerLoja } from "./style";

export default function ListaDeCardsLoja({ array }) {
  return (
    <ContainerLoja>
      {array.map((atividade, index) => (
        <CardAtividadeLoja obj={atividade} key={index} />
      ))}
    </ContainerLoja>
  );
}

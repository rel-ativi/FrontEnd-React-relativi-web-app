import { ContainerFlex } from "../../styles/global";
import CardAtividadeLoja from "../cardAtividadeLoja";

export default function ListaDeCardsLoja({ array }) {
  return (
    <ContainerFlex flexWrap="wrap" gap="40px">
      {array.map((atividade, index) => (
        <CardAtividadeLoja obj={atividade} key={index} />
      ))}
    </ContainerFlex>
  );
}

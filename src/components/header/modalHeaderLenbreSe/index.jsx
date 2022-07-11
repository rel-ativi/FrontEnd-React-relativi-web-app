// import { AiFillCalendar } from "react-icons/ai";
// import { IoArrowDownCircleSharp } from "react-icons/io5";

function ModalLenbreSe({ setModalLenbreSe, modalLenbreSe, dadosUserAtividadesTest }) {
  console.log(dadosUserAtividadesTest)

  if (modalLenbreSe === false) {
    return (
      <div>

      </div>
    );
  }
  
  const ProximaAtividade = {
      nome: "atividades",
      data: "10/05",
      horario: "20h",
      professor: "hugo"
    }

  return (
    <div className="divLenbreSeAtivado">
      
    <p className="textInformacoes">você tem: <span className="alinharTextoAtivado">{ProximaAtividade.nome}</span></p>
    <p className="textInformacoes">você tem: <span className="alinharTextoAtivado">{ProximaAtividade.data}</span></p>
    <p className="textInformacoes">você tem: <span className="alinharTextoAtivado">{ProximaAtividade.horario}</span></p>
    <p className="textInformacoes">você tem: <span className="alinharTextoAtivado">{ProximaAtividade.professor}</span></p>

    </div>

  );
}
export default ModalLenbreSe;

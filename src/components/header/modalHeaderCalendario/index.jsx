// import "./style.css";
import { BsFillArrowDownRightSquareFill } from "react-icons/bs";


function ModalCalendario({ setCalendario, dadosUserAtividadesTest }) {
  return dadosUserAtividadesTest.map((item,index) => {
    return (
      <section className="conteiner-calendario-atividades" key={index}>
        <p className="text-calendario">
            <span>{item.nome}</span>
            <span>{item.data}</span>
            <span>{item.horario}</span>
            <span> <BsFillArrowDownRightSquareFill/></span>
            </p>
      </section>
    );
  });
}
export default ModalCalendario;

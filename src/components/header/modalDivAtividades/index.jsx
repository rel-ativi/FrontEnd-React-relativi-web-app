// import "./style.css";
import { BsFillArrowDownRightSquareFill } from "react-icons/bs";


function ModalCalendario({ setCalendario, dadosUserAtividadesTest }) {
  const cards = dadosUserAtividadesTest.map((item,index) => {
    return (
      <section className="conteiner-calendario-atividades" key={index}>

        <section className="mobileAtividadesModal">
          <p className="text-calendario">
            <span>{item.nome}</span>
            <span>{item.data}</span>
            <span>{item.horario}</span>
            <span> <BsFillArrowDownRightSquareFill/></span>
            </p>
        </section>



        <section className="desktopAtividadesModal">

          <div className="desktopModalAtividades">
            <span>{item.nome}</span>
            <span> <BsFillArrowDownRightSquareFill/></span>
        </div>

        <div >
            <span className="ajustarTextModalAtividadesMeioDesktop">{item.professor}</span>

        </div>

        <div >
            <span className="ajustarTextModalAtividadesMeioDesktop">{item.data}</span>
            <span className="ajustarTextModalAtividadesFimDesktop">{item.horario}</span>
            
        </div>
        

        
        </section>




      </section>

      
    );
  })
  
  return (
    <div>
    {cards}
    </div>
    )
  
  
  
  
  
  
  ;
}
export default ModalCalendario;

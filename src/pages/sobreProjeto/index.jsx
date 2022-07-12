import Footer from "../../components/footer"
import Background from "../../components/background"
import { EstiloSobreProjeto } from "./style"

export function SobreProjeto() {
  return (
    <Background>
      <EstiloSobreProjeto>
        {/* <header /> componente header  */}
        <div className='container'>
          <h1>
            Sobre o rel<span>ativi</span>
          </h1>
          <p>
            O projeto rel<span>ativi</span> surgiu a partir da percepção de que
            existem poucas opções para que profissionais das áreas de saúde e
            bem-estar divulguem seus serviços de maneira prática, eficiente e
            organizada.
          </p>
          <p>
            Além disso percebemos tambémm a necessidade de oferecer às pessoas
            uma alternativa ao vínculo contratual, tradicional em instituições
            que oferecem esse tipo de atividades, onde muitas pessoas ficam
            reféns de mensalidades e nem sempre conseguem usufruir integralmente
            da estrutura, seja por falta de tempo ou por falta de
            disponibilidade recorrente.
          </p>
          <p>
            Pensando nesses dois viés, nosso projeto se propõe a oferecer aos
            profissionais uma plataforma completa para divulgar, ofertar e gerir
            seus serviços; sejam eles dança, luta, pilates, cuidados pessoais,
            treinos, workshops, etc. E para quem busca uma maneira prática e
            descomplicada de praticar exercícios, sem compromisso com
            mensalidades, nós oferecemos uma aplicação capaz de mostrar as
            atividades disponíveis nas proximidades, bem como o número de vagas
            disponíveis para cada aula, agendamento e remarcação de horários das
            atividades e serviços.
          </p>
          <p>
            Vem ser rel<span>ativi</span>!
          </p>
        </div>
      </EstiloSobreProjeto>
      <Footer />
    </Background>
  )
}

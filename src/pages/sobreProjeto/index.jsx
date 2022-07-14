import { Link, useNavigate } from "react-router-dom";

import Footer from "../../components/footer";
import Background from "../../components/background";
import Botao from "../../components/botao";

import { LogoHorizontal, LogoQuadrado } from "../../components/logo";
import { EstiloSobreProjeto, HeaderConteiner } from "./style";

export default function SobreProjeto() {
  const navigate = useNavigate();

  return (
    <Background>
      <HeaderConteiner>
        <div className="container">
          <div className="logoMobile">
            <Link to="/">
              <LogoHorizontal cor={"inversa"} largura="7rem" />
            </Link>
          </div>
          <div className="logoDesktop">
            <Link to="/">
              <LogoQuadrado cor={"inversa"} largura="5rem" />
            </Link>
          </div>
          <p>
            Sobre o <span>Projeto</span>
          </p>
          <Botao tamanho="p" larguraFixa="5rem" onClick={() => navigate(-1)}>
            Voltar
          </Botao>
        </div>
      </HeaderConteiner>
      <EstiloSobreProjeto>
        <div className="container">
          <div>
            <h1>
              Sobre o{" "}
              <span>
                rel<span>ativi</span>
              </span>
            </h1>
            <p>
              O projeto{" "}
              <span>
                rel<span>ativi</span>
              </span>{" "}
              surgiu a partir da percepção de que existem poucas opções para que
              profissionais das áreas de saúde e bem-estar divulguem seus
              serviços de maneira prática, eficiente e organizada.
            </p>
          </div>
          <div>
            <p>
              Além disso percebemos tambémm a necessidade de oferecer às pessoas
              uma alternativa ao vínculo contratual, tradicional em instituições
              que oferecem esse tipo de atividades, onde muitas pessoas ficam
              reféns de mensalidades e nem sempre conseguem usufruir
              integralmente da estrutura, seja por falta de tempo ou por falta
              de disponibilidade recorrente.
            </p>
          </div>
          <div>
            <p>
              Pensando nesses dois vieses, nosso projeto se propõe a oferecer
              aos profissionais uma plataforma completa para divulgar, ofertar e
              gerir seus serviços; sejam eles dança, luta, pilates, cuidados
              pessoais, treinos, workshops, etc. E para quem busca uma maneira
              prática e descomplicada de praticar exercícios, sem compromisso
              com mensalidades, nós oferecemos uma aplicação capaz de mostrar as
              atividades disponíveis nas proximidades, bem como o número de
              vagas disponíveis para cada aula, agendamento e remarcação de
              horários das atividades e serviços.
            </p>
          </div>
          <p>
            Vem ser{" "}
            <span>
              rel<span>ativi</span>!
            </span>
          </p>
        </div>
      </EstiloSobreProjeto>
      <Footer />
    </Background>
  );
}

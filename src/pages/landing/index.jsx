import { useNavigate } from "react-router-dom";

import Botao from "../../components/botao";
import Background from "../../components/background";

import { LogoHorizontal, LogoQuadrado } from "../../components/logo";
import { EstiloLanding } from "./style";

export function Landing() {
  const navigate = useNavigate();

  const redirecionaLogin = () => {
    navigate("/login", { replace: true });
  };

  return (
    <Background>
      <EstiloLanding>
        <div className="container">
          <div>
            <p>
              re<span>aja</span>
            </p>
            <p>
              re<span>laxe</span>
            </p>
            <p>
              re<span>bole</span>
            </p>
            <p>
              res<span>pire</span>
            </p>
            <p>
              re<span>alize</span>
            </p>
          </div>
          <section>
            <div className="logoMobile">
              <LogoQuadrado largura="7rem" />
            </div>
            <div className="logoTablet">
              <LogoHorizontal largura="20rem" />
            </div>
            <div className="logoDesktop">
              <LogoHorizontal largura="30rem" />
            </div>
            <div>
              <p>
                Bem-vindo(a)<span>!</span>
              </p>
              <p>
                Aqui você encontra saúde e bem estar com praticidade e
                planejamento!
              </p>
              <Botao tamanho="gg" larguraFixa="90%" onClick={redirecionaLogin}>
                iniciar
              </Botao>
            </div>
          </section>
        </div>
      </EstiloLanding>
    </Background>
  );
}

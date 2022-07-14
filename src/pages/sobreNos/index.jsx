import Botao from "../../components/botao";
import { LogoHorizontal, LogoQuadrado } from "../../components/logo";
import { Div, HeaderConteiner } from "./style";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SobreNos = ({ navigation, route }) => {
  const devs = [
    {
      nome: "Hugo Ernesto",
      img: "https://ca.slack-edge.com/TQZR39SET-U02TWAT4E1G-f59c76dd2a13-512",
      cargo: "Product Owner",
      texto:
        "Desenvolvedor Full-Stack (em desenvolvimento), atuou como Product Owner no projeto avaliando e colaborando com diversas features.",
      linkedin: "https://www.linkedin.com/in/hbler/",
      github: "https://github.com/Hbler",
    },
    {
      nome: "Kamila Mattos",
      img: "https://media-exp2.licdn.com/dms/image/C4D03AQGDqzT-VTurOA/profile-displayphoto-shrink_200_200/0/1643838668664?e=1663200000&v=beta&t=7vjMfM4lFb3k3hvnr_1Z1VBfdGg1-OJwQDb0A-99QKo",
      cargo: "Scrum Master",
      texto:
        "Desenvolvedora Full-Stack (em desenvolvimento), atuou como Scrum Master no projeto, e com a criação de componentes e páginas.",
      linkedin: "https://www.linkedin.com/in/kamila-mattos-09256a157/",
      github: "https://github.com/KamilaMattos",
    },
    {
      nome: "Andre Perregil",
      img: "https://media-exp2.licdn.com/dms/image/C4D03AQEMaEttwiAW7w/profile-displayphoto-shrink_200_200/0/1657728631045?e=1663200000&v=beta&t=BwlRqc7WCjHGdirG_WJ_CKlUkHkRxAimlad-RtP2nNk",
      cargo: "Tech Leader",
      texto:
        "Desenvolvedor Full-stack (em aprendizado), foi o Tech Lead nesse projeto, dando suporte geral tecnico a' equipe de desenvolvimento.",
      linkedin: "https://www.linkedin.com/in/andre-perregil-60aa51198/",
      github: "https://github.com/AndrePerregil",
    },
    {
      nome: "Bruno Prado Gomes",
      img: "https://media-exp2.licdn.com/dms/image/C4D03AQGQrhr19j2A2w/profile-displayphoto-shrink_200_200/0/1643328660166?e=1663200000&v=beta&t=pWuSsAFLYGBiTP3iYuIsUtRB0XCSSJnv86NPS_OZcro",
      cargo: "Quality Assurance",
      texto:
        "Desenvolvedor Full-Stack ,em desenvolvimento, na kenzie academy, principal participação no projeto o header e os modais nele presentes.",
      linkedin: "https://www.linkedin.com/in/bruno-prado-gomes-8756611a1/",
      github: "https://github.com/Bruno-BPG",
    },
    {
      nome: "Enrico Freitas",
      img: "https://media-exp2.licdn.com/dms/image/C5603AQFEJUzZX5mLgw/profile-displayphoto-shrink_200_200/0/1643828012922?e=1663200000&v=beta&t=5dYhecgNDf_rCasvzlHGcc7ZSI-pvJl4FH7CdqvOpxA",
      cargo: "Quality Assurance",
      texto:
        "Responsável pela garantia de qualidade do código, criação de páginas, componentes e estilização!  ",
      linkedin: "https://www.linkedin.com/in/enrico-freitas/",
      github: "https://github.com/Enr1coFreitas",
    },
    {
      nome: "Raquel Silva",
      img: "https://media-exp2.licdn.com/dms/image/C4E03AQHpkGQS0PebHQ/profile-displayphoto-shrink_200_200/0/1655321005014?e=1663200000&v=beta&t=sEXwxUMTHscfoXjy2swHeBE-JqnPklekVpIAwThWn2k",
      cargo: "Quality Assurance",
      texto:
        "Desenvolvedora Front-End, em formação no Back-End, responsável por códigos,  revisões e decisões do layout.",
      linkedin: "https://www.linkedin.com/in/raquel-de-s%C3%A1-silva/",
      github: "https://github.com/raqueldesa",
    },
  ];

  const arrayDevs = Array.from(new Set(devs.map((obj) => obj)));

  const navigate = useNavigate();

  return (
    <>
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
            Sobre <span>nós</span>
          </p>
          <Botao tamanho="p" larguraFixa="5rem" onClick={() => navigate(-1)}>
            Voltar
          </Botao>
        </div>
      </HeaderConteiner>
      <Div>
        <div className="container">
          {arrayDevs.map((str) => (
            <div className="cards" key={str.nome}>
              <img src={str.img} alt="imgPerfil"></img>
              <p className="paragrafoNome">{str.nome}</p>
              <p className="paragrafoCargo">{str.cargo}</p>
              <p className="paragrafoTexto">{str.texto}</p>
              <div className="links">
                <a href={str.github} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href={str.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Div>
    </>
  );
};

export default SobreNos;

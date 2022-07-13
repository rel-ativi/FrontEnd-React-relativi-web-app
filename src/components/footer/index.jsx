import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { EstiloFooter } from "./style";

const integrantesProjeto = [
  {
    nome: "Andre Perregil",
    cargo: "Tech Leader",
    gitHub: "https://github.com/AndrePerregil",
    linkedin: "https://www.linkedin.com/in/andre-perregil-60aa51198/",
  },
  {
    nome: "Bruno Gomes",
    cargo: "Quality Assurance",
    gitHub: "https://github.com/Bruno-BPG",
    linkedin: "",
  },
  {
    nome: "Enrico Freitas",
    cargo: "Quality Assurance",
    gitHub: "https://github.com/Enr1coFreitas",
    linkedin: "https://www.linkedin.com/in/enrico-freitas-138b7a193/",
  },
  {
    nome: "Hugo Ernesto",
    cargo: "Product Owner",
    gitHub: "https://github.com/Hbler",
    linkedin: "https://www.linkedin.com/in/hbler/",
  },
  {
    nome: "Kamila Mattos",
    cargo: "Scrum Master",
    gitHub: "https://github.com/KamilaMattos",
    linkedin: "https://www.linkedin.com/in/kamila-mattos-09256a157/",
  },
  {
    nome: "Raquel Silva",
    cargo: "Quality Assurance",
    gitHub: "https://github.com/raqueldesa",
    linkedin: "https://www.linkedin.com/in/raquel-de-s%C3%A1-silva/",
  },
];

const gitHubProjeto = "https://github.com/rel-ativi";

export default function Footer() {
  const navigate = useNavigate();

  const redirecionaSobreNos = () => {
    navigate("/sobrenos", { replace: true });
  };

  const redirecionaSobreProjeto = () => {
    navigate("/sobreprojeto", { replace: true });
  };

  return (
    <EstiloFooter>
      <div className="container">
        <section>
          <h4>
            Sobre <span onClick={redirecionaSobreNos}>Nós</span>
          </h4>
          <ul>
            {integrantesProjeto.map((integrante, index) => (
              <li key={index}>
                <p>{integrante.nome} </p>
                <span>{integrante.cargo}</span>
                <div>
                  <a
                    href={integrante.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>

                  <a href={integrante.gitHub} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h4>
            Sobre o <span onClick={redirecionaSobreProjeto}>Projeto</span>
            <a href={gitHubProjeto} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </h4>
        </section>
      </div>
    </EstiloFooter>
  );
}

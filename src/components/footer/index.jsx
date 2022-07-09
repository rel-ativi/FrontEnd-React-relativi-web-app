import { FaGithub } from "react-icons/fa"
import { TiSocialLinkedinCircular } from "react-icons/ti"

import { Link } from "react-router-dom"

const integrantesProjeto = [
  {
    nome: "André Perregil",
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
]

export default function Footer() {
  return (
    <>
      <div>
        <p>
          Sobre <span>Nós</span>
        </p>
        <ul>
          {integrantesProjeto.map((integrante, index) => (
            <li key={index}>
              <p>
                {integrante.nome} <Link to={integrante.gitHub}>{FaGithub}</Link>
                <Link to={integrante.linkedin}>{TiSocialLinkedinCircular}</Link>
              </p>
              <span>{integrante.cargo}</span>
            </li>
          ))}
        </ul>
        <p>
          Sobre o <span>Projeto</span>
        </p>
      </div>
    </>
  )
}

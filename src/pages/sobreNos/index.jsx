import { Div } from "./style";
import { HeaderConteiner } from "./style";
import { LogoIcone } from "../../components/logo";
import Botao from "../../components/botao";

import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SobreNos = ({ navigation, route }) => { 

    const devs = [
        {
            nome: "Hugo Ernesto",
            img: "https://ca.slack-edge.com/TQZR39SET-U02TWAT4E1G-f59c76dd2a13-512",
            cargo: "Product Owner",
            texto: "Pequena descrição sobre o dev e o principal papel no projeto. txttxtxtxtxtxtx",
            linkedin: "https://www.linkedin.com/in/hbler/",
            github: "https://github.com/Hbler"
        },
        {
            nome: "Kamila Mattos",
            img: "https://media-exp2.licdn.com/dms/image/C4D03AQGDqzT-VTurOA/profile-displayphoto-shrink_200_200/0/1643838668664?e=1663200000&v=beta&t=7vjMfM4lFb3k3hvnr_1Z1VBfdGg1-OJwQDb0A-99QKo",
            cargo: "Scrum Master",
            texto: "Pequena descrição sobre o dev e o principal papel no projeto. txttxtxtxtxtxtx",
            linkedin: "https://www.linkedin.com/in/kamila-mattos-09256a157/",
            github: "https://github.com/KamilaMattos"
        },
        {
            nome: "Andre Perregil",
            img: "https://media-exp2.licdn.com/dms/image/C4D03AQEMaEttwiAW7w/profile-displayphoto-shrink_200_200/0/1657728631045?e=1663200000&v=beta&t=BwlRqc7WCjHGdirG_WJ_CKlUkHkRxAimlad-RtP2nNk",
            cargo: "Tech Leader",
            texto: "Pequena descrição sobre o dev e o principal papel no projeto. txttxtxtxtxtxtx",
            linkedin: "https://www.linkedin.com/in/andre-perregil-60aa51198/",
            github: "https://github.com/AndrePerregil"
        },
        {
            nome: "Bruno Prado Gomes",
            img: "https://media-exp2.licdn.com/dms/image/C4D03AQGQrhr19j2A2w/profile-displayphoto-shrink_200_200/0/1643328660166?e=1663200000&v=beta&t=pWuSsAFLYGBiTP3iYuIsUtRB0XCSSJnv86NPS_OZcro",
            cargo: "Quality Assurance",
            texto: "Pequena descrição sobre o dev e o principal papel no projeto. txttxtxtxtxtxtx",
            linkedin: "https://www.linkedin.com/in/bruno-prado-gomes-8756611a1/",
            github: "https://github.com/Bruno-BPG"
        },
        {
            nome: "Enrico Freitas",
            img: "https://media-exp2.licdn.com/dms/image/C5603AQFEJUzZX5mLgw/profile-displayphoto-shrink_200_200/0/1643828012922?e=1663200000&v=beta&t=5dYhecgNDf_rCasvzlHGcc7ZSI-pvJl4FH7CdqvOpxA",
            cargo: "Quality Assurance",
            texto: "Responsável pela garantia de qualidade do código, criação de páginas, componentes e estilização!  ",
            linkedin: "https://www.linkedin.com/in/enrico-freitas/",
            github: "https://github.com/Enr1coFreitas"
        },
        {
            nome: "Raquel Silva",
            img: "https://media-exp2.licdn.com/dms/image/C4E03AQHpkGQS0PebHQ/profile-displayphoto-shrink_200_200/0/1655321005014?e=1663200000&v=beta&t=sEXwxUMTHscfoXjy2swHeBE-JqnPklekVpIAwThWn2k",
            cargo: "Quality Assurance",
            texto: "Pequena descrição sobre o dev e o principal papel no projeto. txttxtxtxtxtxtx",
            linkedin: "https://www.linkedin.com/in/raquel-de-s%C3%A1-silva/",
            github: "https://github.com/raqueldesa"
        }
    ]

    const arrayDevs = Array.from(
        new Set(devs.map((obj) => obj))
    );
    
    const navigate = useNavigate();


    return (
        <>
        <HeaderConteiner>
            <div className="container">
                <LogoIcone cor={"inversa"} largura={"60px"}></LogoIcone>
                <p>Sobre <span>nós</span></p>
                <Botao tamanho="p" larguraFixa="120px" key={"voltar"} onClick={() => navigate(-1)}>Voltar</Botao>

            </div>
        </HeaderConteiner>
            <Div>
                <div className="container">
                    {arrayDevs.map((str) => (
                        <div className="cards">
                            <img key={str.img} src={str.img} alt="imgPerfil"></img>
                            <p className="paragrafoNome" key={str.nome}>{str.nome}</p>
                            <p key={str.cargo} className="paragrafoCargo">{str.cargo}</p>
                            <p key={str.texto} className="paragrafoTexto">{str.texto}</p>
                            <div className="links">
                                <a href={str.github} target="_blank" rel="noopener"><FaGithub/></a>
                                <a href={str.linkedin} target="_blank" rel="noopener"><FaLinkedin/></a>
                            </div>
                        </div>
                    ))}

                </div>
            </Div>
        </>
    )
}

export default SobreNos;
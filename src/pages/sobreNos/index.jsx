import { useState } from "react";
import { Div } from "./style";

import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SobreNos = () => { 

    const devs = [
        {
            nome: "Hugo Ernesto",
            img: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
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
            img: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
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
            texto: "Pequena descrição sobre o dev e o principal papel no projeto. txttxtxtxtxtxtx",
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

    const [ dev, setDev ] = useState([]);

    const arrayDevs = Array.from(
        new Set(devs.map((obj) => obj))
    );
    
    console.log(arrayDevs)

    return (
        <header>
            <Div>
                {arrayDevs.map((str) => (
                    <div className="cards">
                        <img key={str.img} src={str.img} alt="imgPerfil"></img>
                        <p key={str.nome}>{str.nome}</p>
                        <p key={str.cargo} className="paragrafoCargo">{str.cargo}</p>
                        <p key={str.texto} className="paragrafoTexto">{str.texto}</p>
                        <div className="links">
                            <a href={str.github} target="_blank" rel="noopener"><FaGithub/></a>
                            <a href={str.linkedin} target="_blank" rel="noopener"><FaLinkedin/></a>
                        </div>
                    </div>
                ))}
            </Div>
        </header>
    )
}

export default SobreNos;
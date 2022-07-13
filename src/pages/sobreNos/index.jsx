import { useState } from "react";
import { Div } from "./style";

const SobreNos = () => { 

    /* const [ dev, setDev ] = useState([]);

    const devNome = Array.from(
        new Set(devs.map((obj) => obj.nome))
    ); */

    
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
            img: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
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
            img: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
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
            img: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
            cargo: "Quality Assurance",
            texto: "Pequena descrição sobre o dev e o principal papel no projeto. txttxtxtxtxtxtx",
            linkedin: "https://www.linkedin.com/in/raquel-de-s%C3%A1-silva/",
            github: "https://github.com/raqueldesa"
        }
    ]

    return (
        <>
        
        <Div>
            <img src={devs[4].img} alt="image"/>
            <h1>Olá Mundo!</h1>
        </Div>
        <Div>
            <img src={devs[4].img} alt="image"/>
            <h1>Olá Mundo!</h1>
        </Div>
        </>
    )
}

export default SobreNos;
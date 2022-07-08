import { Card } from "./styles";

import { useState, useEffect } from 'react';

const Filtro = ({atividades, setAtividadesMostradas}) => {

    const AtividadesDefault = [
        { name: "Yoga", category: "Wellness" },
        { name: "Crossfit", category: "Funcional" },
        { name: "Artes Marciais", category: "Luta" },
        { name: "Massagem", category: "Wellness" },
        { name: "Capoeira", category: "Luta" }
    ];

    const [ filtroLista, setFiltroLista ] = useState([]);

    const categoriaAtividade = AtividadesDefault.map((obj) => obj.category);

    const categoriaUnica = new Set(categoriaAtividade);

    const categoriaUnicaArray = Array.from(categoriaUnica);

    categoriaUnicaArray.unshift("Todos");

    useEffect(() => {
        setFiltroLista(categoriaUnicaArray)
    }, [categoriaUnicaArray]);

    const filtrar = (str) => {
        if(str === "Todos"){
            setAtividadesMostradas([...atividades])
        }
        else{
            const result = atividades.filter((obj) => obj.category === str)
            setAtividadesMostradas([...result]);
        }
    };



    return (
        <nav>
            {categoriaUnicaArray?.map((str) => (
                <button key={str} onClick={() => filtrar(str)}>{str}</button>
            ))}
        </nav>
    )
}

export default Filtro;





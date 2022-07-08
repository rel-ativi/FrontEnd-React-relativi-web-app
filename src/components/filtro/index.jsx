import { useState, useEffect } from 'react';
import { ContainerFlex } from '../../styles/global';
import Botao from "./../botao";
import { Card } from './styles';


const Filtro = ({atividades, setAtividadesMostradas}) => {

    const [ filtroLista, setFiltroLista ] = useState([]);

    const categoriaAtividade = atividades.map((obj) => obj.type);

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
            const result = atividades.filter((obj) => obj.type === str)
            setAtividadesMostradas([...result]);
        }
    };



    return (    
        <Card>
            <ContainerFlex alignItems = "center" gap="4px">
                {categoriaUnicaArray?.map((str) => (
                    <Botao larguraFixa="100px" tamanho ="p" key={str} onClick={() => filtrar(str)}>{str}</Botao>
                ))} 
            </ContainerFlex>
        </Card>
    )
}

export default Filtro;





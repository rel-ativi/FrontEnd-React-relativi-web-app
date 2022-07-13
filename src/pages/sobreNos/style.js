import styled from "styled-components";
import { mq } from "../../styles/global";

export const HeaderConteiner = styled.header`
    background-color: ${({ theme: { cores } }) => cores.secundaria};
    height:100px ;
    

    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        top: 0;
    }

    img{
        margin-left: 20px;
    }

    p{
        font-size: 45px;
        font-family: 'Source Code Pro', monospace;
        font-weight: 700;
        color: ${({ theme: { cores } }) => cores.primaria};
        span{
            color: ${({ theme: { cores } }) => cores.marca};
        }
    }
    button{
        margin-right: 20px;
    }

    ${mq[1]}{
        height: 168px;
        display: flex;

    }
`
export const Div = styled.div`
    

    .container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-bottom: 20px;

    }

    svg{
        font-size: 30px;
        color: ${({ theme: { cores } }) => cores.marca};
    }
    
    .paragrafoNome{
        font-size: 30px;
        font-weight: bold;
        color: ${({ theme: { cores } }) => cores.secundaria};
    }
    .paragrafoCargo{
        font-size: 16px;
        color: ${({ theme: { cores } }) => cores.secundaria};
    }

    .paragrafoTexto{
        font-size: 18px;
    }
    .links{
        display: flex;
        flex-direction: row;

        a{
            margin-left: 10px;
        }
    }

    .cards{
        width: 100%;
        height: 400px;
        border: 5px solid ${({ theme: { cores } }) => cores.secundariaAlpha};
        border-radius: 10px;
        margin-right: 3px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 80px;
    }

    .cards:hover{
        border: 7px solid ${({ theme: { cores } }) => cores.secundariaAlpha};
        cursor: pointer;
        p{
            cursor: text;
        }
    }
    img{
        width: 120px;
        height: 120px;
        
        border-radius: 60px;
    }

    ${mq[1]}{
        .cards{
            width: 30%;
            
        }
    }
`
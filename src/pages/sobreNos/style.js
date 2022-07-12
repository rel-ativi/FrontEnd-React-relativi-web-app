import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
    p{
        font-size: 30px;
    }
    .paragrafoCargo{
        font-size: 16px;
    }

    .paragrafoTexto{
        font-size: 18px
    }
    .links{
        display: flex;
        flex-direction: row;

        a{
            margin-left: 10px;
        }
    }

    .cards{
        width: 500px;
        height: 400px;
        border: 3px solid red;
        margin-right: 3px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 80px;
    }
    img{
        width: 120px;
        height: 120px;
        
        border-radius: 60px;
    }
`
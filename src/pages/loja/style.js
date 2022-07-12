import styled from "styled-components";
import { mq } from "../../styles/global";

export const ContainerLoja = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  width: 100vw;

  ${mq[0]} {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;
    gap: 80px;
    justify-content: center;
  }
`;

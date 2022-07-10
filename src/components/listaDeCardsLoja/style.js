import styled from "styled-components";
import { mq } from "../../styles/global";

export const ContainerLoja = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  ${mq[0]} {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;
    gap: 80px;
    justify-content: center;
  }
`;

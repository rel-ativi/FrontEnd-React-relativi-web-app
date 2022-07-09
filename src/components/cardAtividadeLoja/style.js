import styled from "styled-components";

export const CardLoja = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 300px;

  img {
    border-radius: 10px;
    height: 300px;
    border: 1px solid ${({ theme: { cores } }) => cores.suporteTres};
  }

  .info-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 80%;
    box-sizing: border-box;
    padding: 0.5rem;
    border: 2px solid ${({ theme: { cores } }) => cores.suporteTres};
    border-radius: 10px;
    background-color: ${({ theme: { cores } }) => cores.primaria};
    transform: translateY(-70%);
  }

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .info-line {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .time-limit {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    width: 90%;
  }
`;

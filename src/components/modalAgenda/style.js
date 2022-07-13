import styled from "styled-components";

export const EstiloAgenda = styled.section`
  width: 100%;
  height: 60vh;
  max-width: 390px;
  padding: 2rem 0.8rem;

  gap: 1rem;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  border-radius: 10px;
  background-color: ${({ theme: { cores } }) => cores.secundaria};

  position: relative;
  z-index: 2;

  small {
    top: 0.5rem;
    left: 50%;
    width: fit-content;

    transform: translateX(-50%);
    color: ${({ theme: { cores } }) => cores.suporteDois};

    position: absolute;
  }
`;

export const BackgoundModal = styled.div`
  inset: 0;
  padding: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(2px);
  background-color: ${({ theme: { cores } }) => cores.suporteDoisAlpha};
  position: absolute;
  z-index: 2;
`;

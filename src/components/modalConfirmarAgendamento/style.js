import styled from "styled-components";

export const EstiloModalAgendar = styled.div`
  background-color: ${({ theme: { cores } }) => cores.primaria};
  width: 90%;
  max-width: 390px;
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 1rem;

  border-radius: 10px;

  p {
    font-size: 18px;
    text-align: center;
  }
  .rosa {
    color: ${({ theme: { cores } }) => cores.suporteUm};

    span {
      font-weight: bold;
      color: ${({ theme: { cores } }) => cores.secundaria};
    }
  }

  // personalizando o calendario

  .react-calendar {
    border: none;
    background-color: ${({ theme: { cores } }) => cores.primaria};

    font-family: "Source Code Pro", sans-serif;

    .react-calendar__tile--active:enabled {
      background-color: ${({ theme: { cores } }) => cores.marca};

      &.react-calendar__month-view__days__day {
        color: ${({ theme: { cores } }) => cores.primaria};
      }
    }

    .react-calendar__month-view__weekdays {
      font-weight: 500;
      text-transform: capitalize;
      color: ${({ theme: { cores } }) => cores.suporteTres};
    }

    .react-calendar__tile {
      &.react-calendar__month-view__days__day {
        color: ${({ theme: { cores } }) => cores.suporteTres};
        &.react-calendar__month-view__days__day--neighboringMonth {
          color: ${({ theme: { cores } }) => cores.suporteTresAlpha};
        }
        &.react-calendar__month-view__days__day--weekend {
          color: ${({ theme: { cores } }) => cores.suporteUm};
          &.react-calendar__tile--active:enabled {
            color: ${({ theme: { cores } }) => cores.primaria};
          }
        }
      }

      &.react-calendar__tile--now {
        background-color: ${({ theme: { cores } }) => cores.suporteDois};

        &.react-calendar__tile--active:enabled {
          background-color: ${({ theme: { cores } }) => cores.marca};

          &.react-calendar__month-view__days__day {
            color: ${({ theme: { cores } }) => cores.primaria};
          }
        }
      }
    }
  }

  /* @media (max-width: 576px) {
    width: 75%;
    p {
      font-size: 16px;
    }
  } */
`;

export const FundoPreto = styled.div`
  background-color: ${({ theme: { cores } }) => cores.secundariaAlpha};
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

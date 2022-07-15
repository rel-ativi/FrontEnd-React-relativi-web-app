import styled from "styled-components";
import { mq } from "../../styles/global";

export const EstiloForm = styled.form`
  width: 100%;
  padding: 0 0 1rem 0;

  gap: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme: { cores } }) => cores.primaria};

  border-radius: 0 0 10px 10px;

  .pagamento {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  ${mq[2]} {
    .pagamento {
      flex-direction: row;
    }
  }

  & > div:last-of-type {
    div {
      input {
        width: 87%;
      }
    }
  }
`;

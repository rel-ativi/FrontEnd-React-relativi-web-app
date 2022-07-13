import { BUSCA_PROFISSIONAIS } from "./actionTypes";

const listaProfissionaisReducer = (state = [], { type, payload }) => {
  switch (type) {
    case BUSCA_PROFISSIONAIS:
      return (state = [...payload]);
    default:
      return state;
  }
};

export default listaProfissionaisReducer;

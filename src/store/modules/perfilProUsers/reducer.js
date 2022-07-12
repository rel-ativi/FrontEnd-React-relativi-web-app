import { BUSCA_PERFIL_PROFISSIONAL } from "./actionTypes";

const perfilProfissionalReducer = (state = [], { type, payload }) => {
  switch (type) {
    case BUSCA_PERFIL_PROFISSIONAL:
      return payload;
    default:
      return state;
  }
};

export default perfilProfissionalReducer;

import { BUSCA_PERFIL_PROFISSIONAL } from "./actionTypes";

const initialState =
  JSON.parse(localStorage.getItem("@relative:prouserProfile")) || {};

const perfilProfissionalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BUSCA_PERFIL_PROFISSIONAL:
      return (state = { ...payload });
    default:
      return state;
  }
};

export default perfilProfissionalReducer;

import { BUSCA_PERFIL_USUARIO } from "./actionTypes";

const perfilUsuarioReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case BUSCA_PERFIL_USUARIO:
      return payload;
    default:
      return state;
  }
};

export default perfilUsuarioReducer;

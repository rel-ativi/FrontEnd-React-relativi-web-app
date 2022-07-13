import { ALTERA_PERFIL_USUARIO, BUSCA_PERFIL_USUARIO } from "./actionTypes";

const perfilUsuarioReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case BUSCA_PERFIL_USUARIO:
      return (state = { ...payload });
    case ALTERA_PERFIL_USUARIO:
      return (state = { ...payload });
    default:
      return state;
  }
};

export default perfilUsuarioReducer;

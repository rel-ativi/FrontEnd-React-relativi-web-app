import { ALTERA_PERFIL_USUARIO, BUSCA_PERFIL_USUARIO } from "./actionTypes";

const initialState =
  JSON.parse(localStorage.getItem("@relativi:userProfile")) || {};

const perfilUsuarioReducer = (state = initialState, { type, payload }) => {
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

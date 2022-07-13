import { ALTERA_PERFIL_USUARIO, BUSCA_PERFIL_USUARIO } from "./actionTypes";

export const buscaPerfilUsuario = (payload) => ({
  type: BUSCA_PERFIL_USUARIO,
  payload,
});

export const alteraPerfilUsuario = (payload) => ({
  type: ALTERA_PERFIL_USUARIO,
  payload,
});

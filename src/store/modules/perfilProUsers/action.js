import {
  BUSCA_PERFIL_PROFISSIONAL,
  BUSCA_ATIVIDADES_PROFISSIONAL,
} from "./actionTypes";

export const buscaPerfilProfissional = (payload) => ({
  type: BUSCA_PERFIL_PROFISSIONAL,
  payload,
});

export const buscaAtividadesProfissional = (payload) => ({
  type: BUSCA_ATIVIDADES_PROFISSIONAL,
  payload,
});

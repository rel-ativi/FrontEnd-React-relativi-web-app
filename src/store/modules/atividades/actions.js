import { BUSCA_ATIVIDADES, BUSCA_ATIVIDADES_PRO } from "./actionTypes";

export const buscaAtividades = (payload) => ({
  type: BUSCA_ATIVIDADES,
  payload,
});

export const buscaAtividadesPro = (payload) => ({
  type: BUSCA_ATIVIDADES_PRO,
  payload,
});

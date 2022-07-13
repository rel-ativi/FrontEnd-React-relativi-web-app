import { BUSCA_ATIVIDADES, BUSCA_ATIVIDADES_PRO } from "./actionTypes";

const atividadesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case BUSCA_ATIVIDADES:
      return (state = [...payload]);
    case BUSCA_ATIVIDADES_PRO:
      return (state = [...payload]);
    default:
      return state;
  }
};

export default atividadesReducer;

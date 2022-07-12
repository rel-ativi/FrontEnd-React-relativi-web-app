import { BUSCA_ATIVIDADES } from "./actionTypes";

const atividadesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case BUSCA_ATIVIDADES:
      return payload;
    default:
      return state;
  }
};

export default atividadesReducer;

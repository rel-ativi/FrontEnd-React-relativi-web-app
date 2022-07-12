import API from "../../../services/API";
import { buscaAtividades } from "./actions";

const buscaAtividadesThunk = () => {
  const token = localStorage.getItem("@relativi:token");
  return (dispatch) => {
    API.get("/activities", {
      headers: { Authorization: `Bearer ${token}` },
    }).then((resp) => dispatch(buscaAtividades(resp.data)));
  };
};

export default buscaAtividadesThunk;

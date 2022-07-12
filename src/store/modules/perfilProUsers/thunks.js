import API from "../../../services/API";
import { buscaPerfilProfissional } from "./action";

const buscaPerfilProfissionalThunk = () => {
  const token = localStorage.getItem("@relativi:token");
  return (dispatch) => {
    API.get(`/prousers`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((resp) => {
      dispatch(buscaPerfilProfissional(resp.data));
    });
  };
};

export default buscaPerfilProfissionalThunk;

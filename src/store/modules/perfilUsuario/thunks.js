import API from "../../../services/API";
import { buscaPerfilUsuario } from "./action";

const buscaPerfilUsuarioThunk = () => {
  const token = localStorage.getItem("@relativi:token");
  const id = localStorage.getItem("@relativi:userId");
  return (dispatch) => {
    API.get(`users/${id}/profiles`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((resp) => {
      dispatch(buscaPerfilUsuario(resp.data));
    });
  };
};

export default buscaPerfilUsuarioThunk;

import API from "../../../services/API";
import { buscaPerfilProfissional } from "./action";

const buscaPerfilProfissionalThunk = () => {
  const token = localStorage.getItem("@relativi:token");
  const id = localStorage.getItem("@relativi:userId");
  return (dispatch) => {
    API.get(`/users/${id}/prousers`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((resp) => {
        localStorage.setItem("@relativi:prouserId", resp.data[0].id);
        dispatch(buscaPerfilProfissional(resp.data[0]));
      })
      .catch((err) => console.log(err));
  };
};

export default buscaPerfilProfissionalThunk;

import API from "../../../services/API";
import { buscaAtividades } from "./actions";

export const buscaAtividadesThunk = () => {
  const token = localStorage.getItem("@relativi:token");

  return (dispatch) => {
    API.get("/activities", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((resp) => {
        dispatch(buscaAtividades(resp.data));
      })
      .catch((err) => console.log(err));
  };
};

export const buscaAtividadesProThunk = () => {
  const token = localStorage.getItem("@relativi:token");
  const id = localStorage.getItem("@relativi:userId");

  return (dispatch) => {
    API.get(`users/${id}/activities`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((resp) => dispatch(buscaAtividades(resp.data)))
      .catch((err) => console.log(err));
  };
};

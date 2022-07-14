import API from "../../../services/API";

import { notificarSucesso } from "../../../components/toasts";
import { alteraPerfilUsuario, buscaPerfilUsuario } from "./action";

export const buscaPerfilUsuarioThunk = () => {
  const token = localStorage.getItem("@relativi:token");
  const id = localStorage.getItem("@relativi:userId");
  return (dispatch) => {
    API.get(`users/${id}/profiles`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((resp) => {
        localStorage.setItem("@relativi:profileId", resp.data[0].id);
        localStorage.setItem(
          "@relativi:userProfile",
          JSON.stringify(resp.data[0])
        );
        dispatch(buscaPerfilUsuario(resp.data[0]));
      })
      .catch((err) => console.log(err));
  };
};

export const alteraPerfilUsuarioThunk = (data) => {
  const token = localStorage.getItem("@relativi:token");
  const profileId = localStorage.getItem("@relativi:profileId");
  return (dispatch) => {
    API.patch(`/profiles/${profileId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((resp) => {
        dispatch(alteraPerfilUsuario(resp.data));

        notificarSucesso("Alteração realizada");
      })
      .catch((err) => console.log(err));
  };
};

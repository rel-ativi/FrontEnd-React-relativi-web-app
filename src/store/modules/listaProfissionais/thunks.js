import API from "../../../services/API";
import { buscaProfissionais } from "./actions";

export default function buscaProfissionaisThunk() {
  const token = localStorage.getItem("@relativi:token");

  return (dispatch) => {
    API.get("/prousers", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((resp) => {
        dispatch(buscaProfissionais(resp.data));
      })
      .catch((err) => console.log(err));
  };
}

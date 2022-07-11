import { useEffect } from "react";
import { useState } from "react";
import ListaDeCardsLoja from "../../components/listaDeCardsLoja";
import ModalAtividadeLoja from "../../components/modalAtividadeLoja";
import API from "../../services/API";

export default function Teste() {
  const [lista, setLista] = useState([]);

  const token = localStorage.getItem("@relativi:token");

  useEffect(() => {
    API.get("/activities", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        setLista(response.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ListaDeCardsLoja array={lista} />
      {/* <ModalAtividadeLoja obj={lista[1]} /> */}
    </>
  );
}

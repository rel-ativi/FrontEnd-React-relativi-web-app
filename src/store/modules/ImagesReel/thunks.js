import { changeImage } from "./actions";

export default function changeImageThunk() {
  const todasImg = [
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80",
    "https://images.unsplash.com/photo-1495791185843-c73f2269f669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1583166614297-a97b68d5cead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80",
  ];

  const bugFixer =
    "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

  return (dispatch, getState) => {
    const { imagem } = getState();
    const escolheImagem = () => {
      const index = Math.floor(Math.random() * todasImg.length);
      return todasImg[index] !== imagem ? todasImg[index] : bugFixer;
    };
    dispatch(changeImage(escolheImagem()));
  };
}

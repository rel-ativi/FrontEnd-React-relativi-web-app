import { useInterval } from "use-interval";

import { useState } from "react";
import { BackgroundContainer } from "./style";

const BackgroundImage = (opcao) => {
  return <BackgroundContainer key={opcao.url} url={opcao.url} />;
};

export default function Background({ children }) {
  const opcoes = [
    "https://img.freepik.com/free-photo/happy-positive-woman-looks-gladfully-away-dances-rhythm-music-keeps-head-turned-away-dressed-casual-clothes_273609-33295.jpg?w=740&t=st=1657308811~exp=1657309411~hmac=2f9f45980c85b5afd0de2540d901c48bdb6b43103f51e2cb7fb6195ea9b4daf2",
    "https://img.freepik.com/free-photo/two-judokas-fighters-fighting-men_155003-10219.jpg?t=st=1657313062~exp=1657313662~hmac=5743a7d468ca8509c36e368ff31d0f3cf16040b5c7f754c2393218273f041496&w=740",
    "https://img.freepik.com/free-photo/studio-shot-young-women-doing-yoga-exercises-white_155003-14940.jpg?t=st=1657313148~exp=1657313748~hmac=21a5f37fc7769e9e3f1f99cc9be4279391bfd334ed298ab54e0a1d3a32f50eab&w=740",
    "https://img.freepik.com/free-photo/self-building-young-caucasian-bodybuilder-training-studio-background-neon-light-muscular-male-model-with-ball-concept-sport-bodybuilding-healthy-lifestyle-motion-action_155003-35391.jpg?t=st=1657313296~exp=1657313896~hmac=e4595e72447e14bb8c76276f8b9d01440b4c2377c5916d38c8f767ce47929097&w=740",
    "https://img.freepik.com/free-photo/young-couple-dances-caribbean-salsa-shot_155003-11173.jpg?t=st=1657313422~exp=1657314022~hmac=aee4e527909bb9ac65d79976a54ca4ce64ad792d04c00857a77d1ae9db355f1c&w=740",
  ];

  // const [trocouImagem, setTrocouImagem] = useState(false);
  const [urlAtual, setUrlAtual] = useState(opcoes[0]);

  const trocarImagem = () => {
    const proxima = opcoes.indexOf(urlAtual) + 1;
    const novaImagem = proxima === opcoes.length ? 0 : proxima;

    setUrlAtual(opcoes[novaImagem]);
  };

  useInterval(trocarImagem, 10000);

  return (
    <>
      <BackgroundImage url={urlAtual} />
      {children}
    </>
  );
}

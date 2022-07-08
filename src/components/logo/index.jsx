import styled from "styled-components";

const caminho = "./identidade_visual/";

const versao = (cor) => {
  switch (cor) {
    case "vermelha":
      return "_accent.svg";
    case "branca":
      return "_primary.svg";
    case "preta":
      return "_secondary.svg";
    case "inversa":
      return "_.svg";
    default:
      return "__.svg";
  }
};

const LogoImg = styled.img`
  height: fit-content;
  width: ${({ largura }) => largura || "10rem"};
`;

export const LogoIcone = ({ cor, largura }) => {
  const tipo = "icon";

  return (
    <LogoImg
      src={caminho + tipo + versao(cor)}
      largura={largura}
      alt={`icone r.a. do logo relativi na cor ${cor}`}
    />
  );
};

export const LogoTexto = ({ cor, largura }) => {
  const tipo = "text";

  return (
    <LogoImg
      src={caminho + tipo + versao(cor)}
      largura={largura}
      alt={`texto do logo relativi na cor ${cor}`}
    />
  );
};

export const LogoQuadrado = ({ cor, largura }) => {
  const tipo = "logo_sq";

  return (
    <LogoImg
      src={caminho + tipo + versao(cor)}
      largura={largura}
      alt={`logotipo r.a. relativi quadrado na cor ${cor}`}
    />
  );
};

export const LogoHorizontal = ({ cor, largura }) => {
  const tipo = "logo_hr";

  return (
    <LogoImg
      src={caminho + tipo + versao(cor)}
      largura={largura}
      alt={`logotipo r.a. relativi horizontal na cor ${cor}`}
    />
  );
};

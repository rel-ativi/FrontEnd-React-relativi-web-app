import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { EstiloGlobal } from "./global";

const temaClaro = {
  estatica: {
    marca: "#F20544",
    marcaAlpha: "#F2054470",
    primaria: "#EEF4F4",
    primariaAlpha: "#EEF4F470",
    secundaria: "#030F26",
    secundariaAlpha: "#030F2670",
    suporteUm: "#8C0335",
    suporteUmAlpha: "#8C033570",
    suporteDois: "#A7BDD9",
    suporteDoisAlpha: "#A7BDD970",
    suporteTres: "#465E8C",
    suporteTresAlpha: "#465E8C70",
    sucesso: "#83A603",
  },
  cores: {
    marca: "#F20544",
    marcaAlpha: "#F2054470",
    primaria: "#EEF4F4",
    primariaAlpha: "#EEF4F470",
    secundaria: "#030F26",
    secundariaAlpha: "#030F2670",
    suporteUm: "#8C0335",
    suporteUmAlpha: "#8C033570",
    suporteDois: "#A7BDD9",
    suporteDoisAlpha: "#A7BDD970",
    suporteTres: "#465E8C",
    suporteTresAlpha: "#465E8C70",
  },
};

const temaEscuro = {
  estatica: {
    marca: "#F20544",
    marcaAlpha: "#F2054470",
    primaria: "#EEF4F4",
    primariaAlpha: "#EEF4F470",
    secundaria: "#030F26",
    secundariaAlpha: "#030F2670",
    suporteUm: "#8C0335",
    suporteUmAlpha: "#8C033570",
    suporteDois: "#A7BDD9",
    suporteDoisAlpha: "#A7BDD970",
    suporteTres: "#465E8C",
    suporteTresAlpha: "#465E8C70",
    sucesso: "#83A603",
  },
  cores: {
    marca: "#F20544",
    marcaAlpha: "#F2054470",
    primaria: "#EEF4F4",
    primariaAlpha: "#EEF4F470",
    secundaria: "#030F26",
    secundariaAlpha: "#030F2670",
    suporteUm: "#8C0335",
    suporteUmAlpha: "#8C033570",
    suporteDois: "#A7BDD9",
    suporteDoisAlpha: "#A7BDD970",
    suporteTres: "#465E8C",
    suporteTresAlpha: "#465E8C70",
  },
};

export const Tema = ({ children }) => {
  const { tema } = useSelector((state) => state);
  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <EstiloGlobal />
      {children}
    </ThemeProvider>
  );
};

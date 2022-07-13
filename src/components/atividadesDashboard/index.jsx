import { CardLista } from "../cardListas";
import { ContainerCardsDash } from "../formEdicaoUser/style";
import HeaderCardsDash from "../headerCardsDash";
import { EstiloContainerAtividade } from "./style";

export default function AtividadesDashboard({ icone, texto, arrayAtividades }) {
  return (
    <ContainerCardsDash>
      <HeaderCardsDash icone={icone}>{texto}</HeaderCardsDash>
      <EstiloContainerAtividade>
        {/* apartir do arrayAtividades fazer um map e renderizar */}
        <CardLista />
        <CardLista />
      </EstiloContainerAtividade>
    </ContainerCardsDash>
  );
}

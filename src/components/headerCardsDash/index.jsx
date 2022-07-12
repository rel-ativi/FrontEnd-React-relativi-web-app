import { EstiloHeaderCardsDash } from "./style";

export default function HeaderCardsDash({
  children,
  icone: Icone,
  ...rest
}) {
  return <EstiloHeaderCardsDash {...rest}>{Icone && <Icone />}{children}</EstiloHeaderCardsDash>;
}

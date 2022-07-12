import { EstiloHeaderCardsDash } from "./style";

import {MdClear} from "react-icons/md"

export default function HeaderCardsDash({
  children,
  icone: Icone,
  ...rest
}) {
  return <EstiloHeaderCardsDash {...rest}>{Icone && <Icone />}{children}
  {rest.eFechavel && <MdClear/>}
  </EstiloHeaderCardsDash>;
}

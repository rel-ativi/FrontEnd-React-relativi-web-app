import { EstiloBotao } from "./style";

export default function Botao({ children, ...rest }) {
  return <EstiloBotao {...rest}>{children}</EstiloBotao>;
}

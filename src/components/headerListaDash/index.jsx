import { MdClear } from "react-icons/md";

import { EstiloHeaderListaDash } from "./style";

export default function HeaderListaDash({
  children,
  icone: Icone,
  form,
  mostrarPerfil,
  mostrarForm,
  ...rest
}) {
  return (
    <EstiloHeaderListaDash {...rest}>
      {Icone && <Icone />}
      {children}
      {form && (
        <MdClear
          style={{ cursor: "pointer" }}
          onClick={() => {
            mostrarForm(false);
            mostrarPerfil(true);
          }}
        />
      )}
    </EstiloHeaderListaDash>
  );
}

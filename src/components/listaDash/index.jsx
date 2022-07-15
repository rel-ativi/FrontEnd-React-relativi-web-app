import HeaderListaDash from "../headerListaDash";
import FormPerfil from "../formEdicaoUser";

import { CardLista } from "../cardListas";
import { EstiloListaDash } from "./style";
import Perfil from "../perfil";

export default function ListaDash({
  icone,
  titulo,
  favorita,
  perfil,
  mostrarPerfil,
  form,
  mostrarForm,
  arrayAtividades,
  setAtividadeAtual,
  mostrarModalAtividade,
}) {
  return (
    <EstiloListaDash>
      <HeaderListaDash
        icone={icone}
        form={form}
        mostrarForm={mostrarForm}
        mostrarPerfil={mostrarPerfil}
      >
        {titulo}
      </HeaderListaDash>
      <div className="container">
        {!!arrayAtividades && (
          <>
            {arrayAtividades.length > 0 ? (
              arrayAtividades?.map((atvd) => (
                <CardLista
                  favorita={favorita}
                  atividade={atvd}
                  key={atvd.id}
                  setAtividadeAtual={setAtividadeAtual}
                  mostrarModalAtividade={mostrarModalAtividade}
                />
              ))
            ) : (
              <h3>Sem atividades nessa lista</h3>
            )}
          </>
        )}
        {form && (
          <FormPerfil mostrarPerfil={mostrarPerfil} mostrarForm={mostrarForm} />
        )}
        {perfil && (
          <Perfil mostrarPerfil={mostrarPerfil} mostrarForm={mostrarForm} />
        )}
      </div>
    </EstiloListaDash>
  );
}

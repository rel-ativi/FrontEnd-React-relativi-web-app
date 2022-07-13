//ignorar isto, so' testando
import { Link } from "react-router-dom";

import Footer from "../../components/footer";
import Header from "../../components/header";
import Botao from "../../components/botao";

import { useSelector } from "react-redux";

import { AlteraPerfil, DashContainer, CriaAtividade } from "./style";
import Input from "../../components/input";

import { MdAccountCircle, MdOutlineAccountBox } from "react-icons/md";

/* export function Dashboard() {
  const { atividades, perfilProfissional } = useSelector((state) => state);
  console.log(perfilProfissional);

  return (
    <>
      <Header
        atividades={atividades}
        perfilUsuario={perfilProfissional}
        naDash
      />
      <DashContainer>
        <CriaAtividade>
          <div className="header">
            <MdOutlineAccountBox size={"30px"} />
            <h2>Nova Atividade</h2>
          </div>
          <form>
            <input placeholder="Nome da atividade" />
            <input placeholder="Tipo da atividade" />
            <input placeholder="Preço" />
            <input placeholder="Limite de alunos/clientes" />
            <input placeholder="Endereço de imagem" />
            <input placeholder="Duração ex: 1 hora, 1.5 hora" />
            <input placeholder="Descrição da atividade" />
            <input placeholder="Horario de inicio" />
            <div className="container-dias-labels">
              <div className="container-dias">
                <input type="checkbox" name="segunda" value="segunda" />
                <input type="checkbox" name="terça" value="terça" />
                <input type="checkbox" name="quarta" value="quarta" />
                <input type="checkbox" name="quinta" value="quinta" />
                <input type="checkbox" name="sexta" value="sexta" />
                <input type="checkbox" name="sabado" value="sabado" />
                <input type="checkbox" name="domingo" value="domingo" />
              </div>
              <div className="container-labels">
                <label>Segunda</label>
                <label>Terca</label>
                <label>Quarta</label>
                <label>Quinta</label>
                <label>Sexta</label>
                <label>Sabado</label>
                <label>Domingo</label>
              </div>
            </div>
            <select>
              <option>Selecione a regularidade</option>
              <option>Recorrente</option>
              <option>Atividade unica</option>
            </select>
            <Botao>Criar Atividade</Botao>
          </form>
        </CriaAtividade>
        <AlteraPerfil>
          <div className="header">
            <MdOutlineAccountBox size={"30px"} />
            <h2>Seu Perfil</h2>
          </div>
          <form>
            <Input
              nome={"name"}
              label={"Nome:"}
              placeholder={"Seu Nome"}
              value={perfilProfissional.name}
              icone={MdAccountCircle}
            />
            <Input
              nome={"email"}
              label={"E-mail:"}
              placeholder={"Seu e-mail"}
              value={perfilProfissional.email}
              icone={MdAccountCircle}
            />
            <Input
              nome={"phone"}
              label={"Phone:"}
              placeholder={"Seu contato"}
              value={perfilProfissional.phone}
              icone={MdAccountCircle}
            />
            <Input
              nome={"bio"}
              label={"Breve Bio:"}
              placeholder={"Sua Bio"}
              value={perfilProfissional.bio}
              icone={MdAccountCircle}
            />
            <Botao>Enviar Alteracoes</Botao>
          </form>
        </AlteraPerfil>
      </DashContainer>
      <Footer />
    </>
  );
} */

import { useNavigate } from "react-router-dom"
import Botao from "../../components/botao"
import { LogoHorizontal } from "../../components/logo"
import { ContainerFlex } from "../../styles/global"
import { EstiloLanding, Background } from "./style"

import changeImageThunk from "../../store/modules/ImagesReel/thunks"

import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

export function Landing() {
  const navigate = useNavigate()

  const imagem = useSelector((store) => store.imagem)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => dispatch(changeImageThunk()), 5000)
  }, [dispatch])

  const redirecionaLogin = () => {
    navigate("/login", { replace: true })
  }

  return (
    <Background url={imagem}>
      <EstiloLanding>
        <ContainerFlex flexDirection='column' alignItems='center'>
          <h1>Seja bem-vindo(a)!</h1>
          <p>Saúde e bem estar com praticidade e planejamento!</p>
          <aside>
            <p>reaja</p>
            <p>relaxe</p>
            <p>rebole</p>
            <p>respire</p>
            <p>realize</p>
          </aside>
          <ContainerFlex
            flexDirection='row'
            alignItems='flex-end'
            justifyContent='space-around'
          >
            <LogoHorizontal largura='40%' />
            <Botao tamanho='gg' onClick={redirecionaLogin}>
              iniciar
            </Botao>
          </ContainerFlex>
        </ContainerFlex>
      </EstiloLanding>
    </Background>
  )
}

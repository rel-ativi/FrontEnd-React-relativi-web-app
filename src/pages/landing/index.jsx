import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

import Botao from "../../components/botao"
import { LogoHorizontal } from "../../components/logo"
import { ContainerFlex } from "../../styles/global"
import { EstiloLanding, Background } from "./style"

import changeImageThunk from "../../store/modules/ImagesReel/thunks"

export function Landing() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const imagem = useSelector((store) => store.imagem)

  useEffect(() => {
    setTimeout(() => dispatch(changeImageThunk()), 5000)
  }, [dispatch])

  const redirecionaLogin = () => {
    navigate("/login", { replace: true })
  }

  return (
    <Background url={imagem}>
      <EstiloLanding>
        <ContainerFlex flexDirection='column' alignItems='center' gap='20px'>
          <h1>Seja bem-vindo(a)!</h1>
          <p>Saúde e bem estar com praticidade e planejamento!</p>
        </ContainerFlex>
        <ContainerFlex flexDirection='column' alignItems='flex-end'>
          <span>reaja</span>
          <span>relaxe</span>
          <span>rebole</span>
          <span>respire</span>
          <span>realize</span>
        </ContainerFlex>
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
      </EstiloLanding>
    </Background>
  )
}

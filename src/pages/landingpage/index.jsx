import { Navigate } from "react-router-dom"

function LandingPage({estaLogado}) {

  const redirecionaLogin = () => {
    <Navigate to='/login' />
  }

  //código que verifica se o usuário já está logado e redireciona direto pro login
  // if(estaLogado){
  //   return redirecionaLogin()
  // }


  return (
    <>
      <h1>Seja bem-vindo(a)!</h1>
      <p>
        Saúde e bem estar com praticidade e planejamento!
      </p>
      {/* <Logo/> */}
      <button onClick={redirecionaLogin}>Iniciar</button>
    </>
  )
}

export default LandingPage

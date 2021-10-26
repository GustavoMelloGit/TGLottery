import GlobalStyle from "./styles/globalStyles";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;

/*
  - trocar alert por toast.
  - trocar feedback para ptbr
  - mostrar valor zerado em baixo do carrinho vazio
  - complete game completar o restante dos valores(iniciados pelo usuário)
  - apresentar a quantidade restante de números para preenchimento do jogo
  - linkar save games para página account
  - listar todos ao clicar novamente em um filtro
  - filtros acumulativos (multipla seleção)
  - retirar import React
  - indexação de componentes
  - adicionar retorno de componentes funcionais
  - separar interfaces em arquivos separados na pasta
  - adicionar pasta shared
*/

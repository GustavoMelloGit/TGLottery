import GlobalStyle from "./styles/globalStyles";
import Routes from "./routes";
import * as dotenv from "dotenv";
import Toast from "@components/layout/Toast";
dotenv.config();

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <Toast />
    </>
  );
}

export default App;

/*
  X trocar alert por toast.
  X trocar feedback para ptbr 
  X mostrar valor zerado em baixo do carrinho vazio
  X complete game completar o restante dos valores(iniciados pelo usuário)
  X apresentar a quantidade restante de números para preenchimento do jogo
  X linkar save games para página account
  X listar todos ao clicar novamente em um filtro
  X filtros acumulativos (multipla seleção)
  X retirar import React
  X indexação de componentes
  X adicionar retorno de componentes funcionais
  X separar interfaces em arquivos separados na pasta
  X adicionar pasta shared
*/

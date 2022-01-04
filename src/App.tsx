import GlobalStyle from './styles/globalStyles';
import Routes from './routes';
import * as dotenv from 'dotenv';
import Toast from '@components/layout/Toast';
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

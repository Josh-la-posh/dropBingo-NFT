import { BrowserRouter } from 'react-router-dom';
import './sass/main.scss';
import Main from './component/MainComponent';
import Wallet from './Wallet/WalletComponent';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Main />
        <Wallet />
      </div>
    </BrowserRouter>
    
  );
}

export default App;

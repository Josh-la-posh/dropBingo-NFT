import { BrowserRouter } from 'react-router-dom';
import './sass/main.scss';
import Main from './component/MainComponent';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;

import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import { BrowserRouter } from 'react-router-dom';
import MainComponent from './components/MainComponent/MainComponent';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent/>
      <MainComponent />
    </BrowserRouter>
  );
}

export default App;

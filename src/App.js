import logo from './logo.svg';
import './App.css';
import { Formulariocomponent } from './components/Formulariocomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Formulariocomponent />

      </header>
    </div>
  );
}

export default App;

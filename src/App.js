import logo from './logo.svg';
import './App.css';
import Thickness from './components/Thickness';
import Diameter from './components/Diameter';
import Length from './components/Length';
import Results from './components/Results';
import GlobalStateProvider, { PoleContextProvider } from './utils/GlobalState';

function App() {
  return (
    <div className="App">
      <PoleContextProvider>
        
      {/* <GlobalStateProvider> */}
      <Diameter/>
      <Thickness/>
      <Length />
      {/* </GlobalStateProvider> */}
      </PoleContextProvider>
    </div>
  );
}

export default App;

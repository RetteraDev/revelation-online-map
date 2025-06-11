import './App.css';
import MapFilter from './components/MapFilter/MapFilter';
import Map from './components/Map/Map';
import { Panel } from './components/Panel/Panel';

function App() {
  return (
    <div className="App">
      <Panel>
        <MapFilter/>
      </Panel>
      <Map/>
    </div>
  );
}

export default App;

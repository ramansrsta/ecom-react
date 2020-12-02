
import './App.css';
import HomepageComponent from './pages/homepage/homepage';
import HatsComponent from './pages/hats/hats';

import { Route , Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomepageComponent} />
        <Route exact path="/hats" component={HatsComponent} /> 
      </Switch>
    </div>
  );
}

export default App;

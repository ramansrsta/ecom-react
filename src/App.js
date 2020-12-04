import './App.css';
import HomepageComponent from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';

import { Route , Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomepageComponent} />
        <Route exact path="/shop" component={ShopPage} /> 
      </Switch>
    </div>
  );
}

export default App;

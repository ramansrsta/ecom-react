import './App.css';
import HomepageComponent from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInaSignUpPage from './pages/sign-inandup/sign-inandsign-up';

import { Route , Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomepageComponent} />
        <Route exact path="/shop" component={ShopPage} /> 
        <Route exact path="/signin" component={SignInaSignUpPage} /> 
      </Switch>
    </div>
  );
}

export default App;

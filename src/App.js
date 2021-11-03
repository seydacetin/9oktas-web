import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/signin'>
            <Signin />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

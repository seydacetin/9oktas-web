import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home/Home';
import Signin from './pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/signup'>
            <Signin />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

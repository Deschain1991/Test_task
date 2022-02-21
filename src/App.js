import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Route } from 'react-router';
import Products from './components/products/Product';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Switch>
          <Route
            exact path='/'
            component={Products}
          />
          <Redirect to="/" />
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;

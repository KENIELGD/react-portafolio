import { Fragment } from 'react';
// import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Portafolio from './pages/Portafolio';
import Page from './components/Home/Page';
import Error404 from './components/Error404';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <div className="App">   
        </div>
        <Switch>
          <Route path='/' component={Page} exact />
          <Route path='/portafolio' component={Portafolio} exact />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
      
    </Fragment>
  );
}

export default App;

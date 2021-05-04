import './assets/App.scss';
import SignUp from './page/signup';
import Login from './page/login';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
     
      <Switch>
        <Route exact path='/' component={SignUp} />
        <Route exact path='/login' component={Login} />
       
      </Switch>
    </Router>
  )
}

export default App;
import './assets/App.scss';
import SignUp from './page/signup';
import Login from './page/login';
import Home from './page/home';
import Place from './page/detailplace';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';





function App() {
  return (
    <Router>
     
      <Switch>
        <Route exact path='/' component={SignUp} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/places/:placeId' component={Place} />
       
      </Switch>
    </Router>
  )
}

export default App;
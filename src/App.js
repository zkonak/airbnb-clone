import './assets/App.scss';
import SignUp from './page/signup';
import Login from './page/login';
import Home from './page/home';
import Place from './page/detailplace';
import React from 'react';
import AddPlace from './page/addPlace';


import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';


// const PrivateRoute = ({component: Component, ...rest}) => {
//   const store = React.useContext(appContext);
//   return (
//     <Route {...rest} render={(props) => (
//       store.isAuth
//       ? <Component {...props} />
//       : <Redirect to='/' />
//     )} />
//   );
// }



function App() {
  return (
    <Router>
     
      <Switch>
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        <Route exact path='/addplace' component={AddPlace} />
        <Route exact path='/places/:placeId' component={Place} />
        <Route  path='/places' component={Home} />
       
       
      </Switch>
    </Router>
  )
}

export default App;
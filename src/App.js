import React from 'react';
import './App.css';
import MainPage from './components/mainPage/mainPage.js';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import SignIn from './components/Signin/Signin.js';

class App extends React.Component {

  state={
    signedin:false
  }

  render(){

    return (
        <div>
        {this.state.signedin ?  <Route path="/" exact component={MainPage} /> :  <Route path="/" exact component={SignIn} /> }
        
          
        }
           
        </div>
      )
  }
}
 export default App;
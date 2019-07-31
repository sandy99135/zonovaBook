import React, { Component } from 'react';
import logo from './logo.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom"
import Acceuil from './components/Acceuil'




  class App extends Component {
   
    render(){
      return (
        <div>
         
          <Router>
            <nav id="navbar"class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#"></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
    
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#"><Link  id="titre" to="/"> <span id="titre">Book Store</span></Link> <span class="sr-only">(current)</span></a>
                  </li>
                  {/* <li class="nav-item active">
                    <div id="login"><Link  id="titre" to="/login">Connecter</Link></div>
                  </li> */}
                </ul>

              </div>
            </nav>
          
            <Route path="/"  exact component={Acceuil} />
             
            {/* <Route path="/login"  component={Login} />
            { <Route path="/register" exact component={Register} /> }
            <Route path="/profil" component={Profil} /> */}
            {/* <Route path="/NAVBAR" component={Navbar} /> */}
  {/* <Produit/> */}
 
          </Router>
    
          
    
    
        </div>
    
    
      );
    }
  
}


export default App;

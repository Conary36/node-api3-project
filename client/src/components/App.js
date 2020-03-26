import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
//import {Link, Route} from 'react-router-dom';
import Navigation from '../components/navs/navigation'
import UserPage from './UserPage';
import Posts from './Posts';


function App() {
  return (
    <Router>
    <div className="App">
  
        <Navigation/>
      
        <Route exact path="/" component={UserPage} />
        <Route path="/posts" component={Posts} />
    </div>
    </Router>
  );
}

export default App;

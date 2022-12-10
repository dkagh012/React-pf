import React from 'react';
import './App.css';
import Main from './components/Main';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    
    <div className="container">
  <BrowserRouter>
 
  <Route exact path="/">
          <Main/>
        </Route>

        <Route exact path="/home">
          <Home/>
        </Route>
        
        <Route exact path="/project">
          <Project/>
        </Route>

        <Route exact path="/about">
          <About/>
        </Route>

        <Route exact path="/Contact">
          <Contact/>
        </Route>
        

        
  </BrowserRouter>

    
  
    </div>



  );
}


export default App;

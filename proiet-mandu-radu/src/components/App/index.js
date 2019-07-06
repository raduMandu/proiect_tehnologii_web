import React,  { Component } from 'react';
import './App.css';
import Rute from '../Rute';
import 'whatwg-fetch';



class App extends Component{

 

  render(){
      return (
        <div className="App">
          <header className="App-header">        
            <p>
              Cauta serialul tau preferat
            </p>
          </header>
          <Rute/>
        </div>
      );
  }

}

export default App;

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Home from './screen/Home/Home';



class App extends Component {
  render() {
    return (
      <div className="App overflow-hidden">
    
        <Home />
        
    </div>
    );
  }
}


export default App;

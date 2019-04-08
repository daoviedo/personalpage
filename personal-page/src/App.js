import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from './pages/Homepage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Homepage}/>
      </BrowserRouter>
    );
  }
}

export default App;
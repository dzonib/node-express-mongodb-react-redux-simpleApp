import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShopingList from './components/ShopingList'

class App extends Component {
  render() {
    return (
      <div>
       <AppNavbar />
       <ShopingList/>
      </div>
    );
  }
}

export default App;

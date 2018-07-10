import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShopingList from './components/ShopingList'

import {Provider} from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
       <AppNavbar />
       <ShopingList/>
      </div>
      </Provider>
    );
  }
}

export default App;

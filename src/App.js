import React, { Component } from 'react';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import Layout from './components/Layout';

class App extends Component {
render() {
  return (
    <div className="App">
        <ButtonAppBar />
        <Layout />
        <hr/>
    </div>
        );
    }
}
export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'connect-base'

import Outro from './Outro'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const config = {
  apiKey: "AIzaSyC9sK3XYQsWrrC_5HJNYmTnLFhnOVUkMWY",
  authDomain: "devpleno-test.firebaseapp.com",
  databaseURL: "https://devpleno-test.firebaseio.com",
  projectId: "devpleno-test",
  storageBucket: "devpleno-test.appspot.com",
  messagingSenderId: "226587757613"
}

const Home = (props) => {
  return (<p className="App-intro">
To get started, edit <code>src/App.js</code> and save to reload. <Link to='/dados'>Dados</Link> <Link to='/dados/tuliofaria@gmail.com'>Tulio</Link> <Link to='/dados/everton@gmail.com'>Everton</Link>
</p>)
}
const Dados = (props) => <Outro />

class App extends Component {
  render() {
    return (
      <Provider firebase={config}>
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <Route component={Home} path='/' exact />
            <Route component={Outro} path='/dados' exact />
            <Route component={Outro} path='/dados/:email' />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App

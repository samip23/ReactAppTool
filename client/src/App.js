import React from 'react';
import { BrowserRouter as Router, HashRouter, Redirect } from 'react-router-dom';
import history from './services/history';
import Routes from './routes/index';
import Header from "./Components/Utlities/Header";
import { AuthCheck, useUser } from 'reactfire';
import Login from './Components/Login';
import Welcome from './Components/Welcome';


function App() {
  
  return (
    <div className="ui container">
      <HashRouter basename="/" history={history}>
        <div>
            <Header />
            <Redirect to="/Welcome" />
            <Routes />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
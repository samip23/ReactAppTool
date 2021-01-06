import React from 'react';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import history from './services/history';
import Routes from './routes/index';
import Header from "./Components/Utlities/Header";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="ui container">
      <HashRouter history={history}>
        <div>
          <Header />
          <Routes />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
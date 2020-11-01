import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes/index';
import Header from "./Components/Header";

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Routes />
        </div>
      </Router>
    </div>
  );
}

export default App;
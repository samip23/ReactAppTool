import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <h1>IQS Management Tool</h1>
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Help
        </Link>
      </div>
    </div>
  );
};

export default Header;
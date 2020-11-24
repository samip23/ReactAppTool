import React from 'react';
import { Link } from 'react-router-dom';
import {routeHelper} from "../../utils/routeHelper"

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to={routeHelper("")} className="item">
        <h1>IQS Management Tool</h1>
      </Link>
      <div className="right menu">
        <Link to={routeHelper("")} className="item">
          Help
        </Link>
      </div>
    </div>
  );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import {routeHelper} from "../../utils/routeHelper"
import { connect } from 'react-redux';
import { startLogin, startLogout } from '../../redux/auth';

export const Header = ({ startLogout }) => {
  return (
    <div className="ui secondary pointing menu">
      <Link to={routeHelper("")} className="item">
        <h1>IQS Management Tool</h1>
      </Link>
      <div className="right menu">
        <Link to={routeHelper("")} className="item">
          Help
        </Link>
        <button onClick={startLogin}>Logout</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
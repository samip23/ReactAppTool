import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../redux/auth';

export const Login = ({ startLogin }) => {
    return (
    <div>
        <button onClick={startLogin}>Login</button>
    </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);
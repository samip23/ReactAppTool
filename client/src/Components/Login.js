import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { startLogin } from '../redux/auth';

const Login = () => {
    const dispatch = useDispatch();
    return (
    <div>
        <button onClick={()=>dispatch(startLogin())}>Login</button>
    </div>
    )
};

// const mapDispatchToProps = (dispatch) => ({
//     startLogin: () => dispatch(startLogin())
// });

export default Login;
import React from 'react';
import LoginForm from "./LoginForms";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} />
    </div>
}

export default Login;
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../utils/validators/validators";
import React from "react";

const maxLength40 = maxLengthCreator(40);

const LoginComponent = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Input}
                    validate={[required, maxLength40]}
                    placeholder={"Email"}
                    name={"email"}/>
            </div>
            <div>
                <Field
                    component={Input}
                    validate={[required, maxLength40]}
                    placeholder={"Password"} type={"password"}
                    name={"password"}/>
            </div>
            <div>
                <Field
                    component={Input}
                    type={"checkbox"}
                    name={"rememberMe"}/>
                remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}
const LoginForm = reduxForm({
    form: 'login'
})(LoginComponent);

export default LoginForm;
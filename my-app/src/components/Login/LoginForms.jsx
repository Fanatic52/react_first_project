import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import React from "react";
import style from "./../common/FormsControls/FormsControls.module.css";

const maxLength40 = maxLengthCreator(40);

const LoginComponent = ({handleSubmit, error}) => {
    let summaryErrorBlock = (
        error
        ? <div className={style.formSummaryError}>
            {error}
        </div>
        : null
    );
    return (
        <form onSubmit={handleSubmit}>
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
            {summaryErrorBlock}
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
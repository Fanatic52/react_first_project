import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import style from "./../common/FormsControls/FormsControls.module.css";

const maxLength40 = maxLengthCreator(40);

export type LoginFormValuesType = {
    captchaUrl: string,
    rememberMe: boolean,
    password: string,
    email: string,
}

type LoginFormProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormProps> & LoginFormProps> = ({handleSubmit, error, captchaUrl}) => {
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
                    placeholder={"Password"}
                    type={"password"}
                    name={"password"}/>
            </div>

            <div>
                <Field
                    component={Input}
                    type={"checkbox"}
                    name={"rememberMe"}/>
                remember me
            </div>

            { captchaUrl &&
            <div>
                <img src={captchaUrl} alt={"captcha"}/>
                <Field
                component={Input}
                validate={[required]}
                placeholder={"Symbols from image"}
                name={"captchaUrl"}/>
            </div>}

            {error
                ? <div className={style.formSummaryError}> {error} </div>
                : null}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}
const LoginFormWithRedux = reduxForm<LoginFormValuesType, LoginFormProps>({
    form: 'login'
})(LoginForm);

export default LoginFormWithRedux;
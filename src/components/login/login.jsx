import React from "react";
import './stylesLoginForm.css'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreater, required } from "../../utils/validators/validators";
import { Input, TextArea } from '../common/FormControls/FormControls'
import ProfileContainer from "../Profile/ProfileContainer";
import { Navigate } from 'react-router-dom'
let maxLength20 = maxLengthCreater(20);
const LoginForm = (props) => {
    return (
        <form className="LoginForm" onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" type="email" placeholder={"Login"} component={Input} validate={[required, maxLength20]} />
            </div>
            <div>
                <Field name="password" type="password" placeholder={"Password"} component={Input} validate={[required, maxLength20]} />
            </div>
            <div>
                <Field name="rememberMe" type={'checkbox'} component={Input} /> <span>remember me</span>
            </div>
            <div>
                <button> Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.userLogin(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return (
            <Navigate to={`/profile/${props.userId}`} />
        )
    }

    return (
        <div>
            <h1> login </h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

export default Login;
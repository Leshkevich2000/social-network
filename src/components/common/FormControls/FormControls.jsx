import React from "react";
import style from './FormControls.module.css'



const FormControl = ({ input, meta, Formtype, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formContol + " " + (hasError ? style.error : "")}>
            <div>
                <Formtype {...input}{...props} />
            </div>
            {hasError && <span> {meta.error}</span>}
        </div>
    );
}

export const TextArea = (props) => {
    return <FormControl {...props} Formtype="textarea"></FormControl>
}


export const Input = (props) => {
    return <FormControl {...props} Formtype="input"></FormControl>
}
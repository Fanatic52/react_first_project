import React from 'react';
import styles from './FormsControls.module.css';

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl}>
            <div className={ hasError ? styles.error : ""}>
                <div>
                    { children }
                </div>
                { hasError && <span>{error}</span> }
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps}/>
        </FormControl>
    );
}

export const Input = (props) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    );
}
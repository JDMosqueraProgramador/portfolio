import React from 'react';
import { FieldHookConfig, useField } from 'formik';

export interface TextFieldProps {
    label: string,
    required: boolean
}

const TextField: React.FC<TextFieldProps & FieldHookConfig<string>> = ({ label, required, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <div className='input-box'>
            <label htmlFor={props.name}>{label} {required ? <span>*</span> : null} </label>
            <input {...field} placeholder={props.placeholder} type={props.type} className="p-input" />
            {meta.touched && meta.error ? <div className='input-error'>{meta.error}</div> : null}
        </div>
    )
}

export default TextField;
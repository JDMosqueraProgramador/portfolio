import React from 'react';
import { FieldHookConfig, useField } from 'formik';

const TextField: React.FC<{ label: string, required: boolean } & FieldHookConfig<string>> = ({ label, required, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <div className='input-box'>
            <label htmlFor={props.name}>{label} { required ? <span>*</span> : null } </label>
            <input {...field} placeholder={props.placeholder} type={props.type} className="p-input" />
            { meta.touched && meta.error ? <div className='input-error'>{meta.error}</div> : null }
        </div>
    )
}

export default TextField;
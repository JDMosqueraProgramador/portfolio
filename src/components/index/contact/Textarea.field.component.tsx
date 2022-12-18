import React from 'react';
import { FieldHookConfig, useField } from 'formik';
import { TextFieldProps } from './Text.field.component';

const TextareaField: React.FC<TextFieldProps & FieldHookConfig<string>> = ({ label, required, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <div className='input-box'>
            <label htmlFor={props.name}>{label} { required ? <span>*</span> : null } </label>
            <textarea {...field} placeholder={props.placeholder} className="p-input" rows={5}></textarea>
            { meta.touched && meta.error ? <div className='input-error'>{meta.error}</div> : null }
        </div>
    )
}

export default TextareaField;
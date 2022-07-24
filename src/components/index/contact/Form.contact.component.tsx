import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from './Text.field.component';
import TextareaField from './Textarea.field.component';

interface contact {
    name: string,
    email: string,
    message: string
}

const FormContact: React.FC<{}> = () => {

    const initialValues: contact = {
        name: '', email: '', message: ''
    }

    const schema: Yup.AnySchema = Yup.object({
        name: Yup.string().required("This field is required."),
        email: Yup.string().email("Invalid email.").required("This field is required."),
        message: Yup.string().required("This field is required.")
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={() => alert("Hi")}
            validationSchema={schema}
        >
            <Form>

                <TextField
                    required={true}
                    label='Name'
                    name="name"
                    type="text"
                    placeholder="Ejm: Alex Sánchez"
                />

                <TextField
                    required={true}
                    label='Email'
                    name="email"
                    type="text"
                    placeholder="Ejm: alex@company.com"
                />

                <TextareaField
                    required={true}
                    label='Message'
                    name="message"
                    placeholder="Ejm: I want to you build a web scraping system for my company."
                />

                <button type='submit' className="btn-primary">Submit</button>

            </Form>
        </Formik>
    )
}

export default FormContact;
import React from 'react';
import { Formik, Field, Form } from 'formik';

export default function UpdateForm () {
    return (
        <Formik 
            render = { props => {
                return (
                    <Form>
                        <Field name="title" type="text" placeholder="Enter title"/>
                        <Field name="director" type="text" placeholder="Enter director(s) name"/>
                        <Field name="metascore" type="text" placeholder="Enter the metascore"/>
                    </Form>
                )
            }}
        />
    );
}
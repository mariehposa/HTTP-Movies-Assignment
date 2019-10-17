import React from 'react';
import { Formik, Field, Form } from 'formik';

const initialFormValues = {
    id: Date.now(),
    title: '',
    director: '',
    metascore: '',
}

export default function UpdateForm () {

    
    return (
        <Formik 
            initialValues={initialFormValues}
            onSubmit={onAddMovie}
            render = { props => {
                return (
                    <Form>
                        <Field name="title" type="text" placeholder="Enter title"/>
                        <Field name="director" type="text" placeholder="Enter director(s) name"/>
                        <Field name="metascore" type="text" placeholder="Enter the metascore"/>
                        <button type="submit">Add Movie</button>
                    </Form>
                )
            }}
        />
    );
}
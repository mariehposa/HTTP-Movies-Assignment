import React from 'react';
import { Formik, Field, Form } from 'formik';


export default function UpdateMovie(props) {


   

    const newForm = {...props.form, stars: props.form.stars.toString()}
    return (
        <Formik
        initialValues = {newForm}
            onSubmit={props.onSubmit}
            render={props => {
                console.log(props);
                
                return (
                    <Form>
                        <Field name="title" type="text" placeholder="Enter title" />
                        <Field name="director" type="text" placeholder="Enter director(s) name" />
                        <Field name="metascore" type="number" placeholder="Enter the metascore" />
                        <label>
                            Comma separated list of stars
                        <Field name="stars" type="text" placeholder="Stars" />
                        </label>
                        <button type="submit">Add Movie</button>
                    </Form>
                )
            }}
        />
    );
}
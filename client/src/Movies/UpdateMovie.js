import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

// const initialFormValues = {
//     id: Date.now(),
//     title: '',
//     director: '',
//     metascore: '',
// }

const updateUrl = 'http://localhost:5000/api/movies'

export default function UpdateMovie(props) {


    const onUpdateMovie = (formValues, actions) => {        
        const stars = ['Kurt Russell', 'Bill Paxton', 'Sam Elliot']
        const id = props.match.params.id
        axios
            .put(`${updateUrl}/${id}`,
                {
                    id: id,
                    title: formValues.title,
                    director: formValues.director,
                    metascore: formValues.metascore,
                    stars: stars
                }
            )
            .then(res => {
                props.setMovieId(null)
                props.history.push('/');
            })
            .catch(err => {
                // console.log(err.message)
                console.log(err);
            })
        actions.resetForm()
    }

    return (
        <Formik
            onSubmit={onUpdateMovie}
            render={props => {
                return (
                    <Form>
                        <Field name="title" type="text" placeholder="Enter title" />
                        <Field name="director" type="text" placeholder="Enter director(s) name" />
                        <Field name="metascore" type="number" placeholder="Enter the metascore" />
                        <button type="submit">Add Movie</button>
                    </Form>
                )
            }}
        />
    );
}
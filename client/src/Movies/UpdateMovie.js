import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { StyledForm, StyledField, StyledButton, StyledLabel } from './Styles';
import * as yup from 'yup';

const validateForm = (formValue) => {
    const errors = {};

    if(!formValue.title) {
        errors.title = "title is required";
    }
    if(!formValue.director) {
        errors.director = "director name is required"
    }
    if(!formValue.stars) {
        errors.stars = "Actor names are required"
    }
}

const validationForm = yup.object().shape({
    title: yup.string().required('enter correct title'),
    director: yup.string().required('name should be in letters'),
    stars: yup.string().required('names should be in letters')
})

export default function UpdateMovie(props) {
    const newForm = {...props.form, stars: props.form.stars.toString()}
    return (
        <Formik
            validationSchema={validationForm}
            validate={validateForm}
            initialValues = {newForm}
            onSubmit={props.onSubmit}
            render={props => {
                console.log(props);
                
                return (
                    <StyledForm>
                        <StyledField name="title" type="text" placeholder="Enter title" />
                        <ErrorMessage name="title" component="div"/>
                        <StyledField name="director" type="text" placeholder="Enter director(s) name" />
                        <ErrorMessage name="director" component="div"/>
                        <StyledField name="metascore" type="number" placeholder="Enter the metascore" />
                        <StyledLabel>
                            * Names should be separated by comma
                        <StyledField name="stars" type="text" placeholder="Enter actor names" />
                        <ErrorMessage name="stars" component="div"/>
                        </StyledLabel>
                        <StyledButton type="submit">Add Movie</StyledButton>
                    </StyledForm>
                )
            }}
        />
    );
}
import React, { useState } from "react";
import { Route, withRouter } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from './Movies/UpdateMovie'
import axios from 'axios';

const url = 'http://localhost:5000/api/movies'

const initialMovieForm = {
  title: '',
  director: '',
  metascore: '',
  stars: '',
  id: ''
}

const App = (props) => {
  const [savedList, setSavedList] = useState([]);
  const [movieForm, setMovieForm] = useState(initialMovieForm)

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const onUpdateMovie = (formValues, actions) => {
    const id = movieForm.id
    console.log(formValues);

    axios
      .put(`${url}/${id}`,
        {
          id: id,
          title: formValues.title,
          director: formValues.director,
          metascore: formValues.metascore,
          stars: formValues.stars.split(',')
        }
      )
      .then(res => {
        props.history.push('/');
      })
      .catch(err => {
        // console.log(err.message)
        console.log(err);
      })
    actions.resetForm()
  }

  const onAddMovie = (formValues, actions) => {
    axios.post(url, {
      title: formValues.title,
      director: formValues.director,
      metascore: formValues.metascore,
      stars: formValues.stars.split(',')
      })
      .then(res => {
        console.log(res.data)
        props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
      actions.resetForm()
  }

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} setMovieForm={setMovieForm} addToSavedList={addToSavedList} />;
        }}
      />
      <Route
        path="/update-movie/:id"
        render={props => {
          return <UpdateMovie {...props} form={movieForm} onSubmit={onUpdateMovie} />
        }}
      />
      <Route path="/add-movie" render={props => {
        return <UpdateMovie  {...props} form={initialMovieForm} onSubmit={onAddMovie} />
      }} />
    </>
  );
};

export default withRouter(App);

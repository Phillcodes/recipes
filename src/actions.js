import {
  CHANGE_SEARCH_FIELD,
/*  REQUEST_RECIPES_PRENDING,
  REQUEST_RECIPES_SUCCESS,
  REQUEST_RECIPES_FAILED*/
 } from './constants.js';

export const setSearchField = (text) =>({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

/*
export const requestRecipies = () => (dispatch) => {
  dispatch({ type: REQUEST_RECIPES_PRENDING });
  fetch('    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(data => dispatch({ type: REQUEST_RECIPES_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_RECIPES_FAILED, payload: error}))
}
*/

import {
  CHANGE_SEARCH_FIELD,
/*  REQUEST_RECIPES_PRENDING,
  REQUEST_RECIPES_SUCCESS,
  REQUEST_RECIPES_FAILED*/
 } from './constants.js';

const intialStateSearch = {
  searchField: ''

}

export const searchOpskrift = (state=intialStateSearch, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action.payload})
      default:
      return state;
  }
}
/*
const intialStateRecipes = {
  isPending: false,
  recipes: [],
  error: ''
}

export const requestRecipies = (state=intialStateRecipes, action={}) => {
  switch(action.type) {
    case REQUEST_RECIPES_PRENDING:
    return Object.assign({}, state, { isPending:true })
    case REQUEST_RECIPES_SUCCESS:
    return Object.assign({}, state, {recipes: action.payload, isPending: false})
    case REQUEST_RECIPES_FAILED:
    return Object.assign({}, state, { error: action.payload, isPending: false})
    default:
    return state;
  }
}
*/

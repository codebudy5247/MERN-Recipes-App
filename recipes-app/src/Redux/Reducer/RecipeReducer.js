import {
    RECIPE_LIST_REQUEST,
    RECIPE_LIST_SUCCESS,
    RECIPE_LIST_FAIL,
  } from "../Action/actionTypes.js";
  
  export const recipeListReducer = (state = { recipes: [] }, action) => {
    switch (action.type) {
      case RECIPE_LIST_REQUEST:
        return { loading: true, recipes: [] };
      case RECIPE_LIST_SUCCESS:
        return {
          loading: false,
          recipes: action.payload.recipes,
        }
         
        
      case RECIPE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
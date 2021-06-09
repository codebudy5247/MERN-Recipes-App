import {
    RECIPE_LIST_REQUEST,
    RECIPE_LIST_SUCCESS,
    RECIPE_LIST_FAIL,
    RECIPE_DETAILS_REQUEST,
    RECIPE_DETAILS_SUCCESS,
    RECIPE_DETAILS_FAIL,
    RECIPE_CREATE_REQUEST,
    RECIPE_CREATE_SUCCESS,
    RECIPE_CREATE_FAIL,

} from "./actionTypes.js";

import * as api from "../../APIs/index.js";

//Get All Recipes
export const getRecipes = () => async (dispatch) => {
    try {
        dispatch({ type: RECIPE_LIST_REQUEST });
        const { data } = await api.fetchRecipes();
        console.log(data)
        dispatch({
            type: RECIPE_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: RECIPE_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
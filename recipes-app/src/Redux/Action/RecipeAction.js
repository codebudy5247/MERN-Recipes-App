import axios from "axios";
import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
  POST_UPDATE_FAIL,
  POST_UPDATE_RESET,
} from "./actionTypes";



//Get All Recipes
export const getPosts = () => async (dispatch) => {
    try {
      dispatch({ type: POST_LIST_REQUEST });
      const { data } = await axios.get(
        `https://recipes-api5.herokuapp.com/api/recipe`
      );
      console.log(data);
      dispatch({
        type: POST_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: POST_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//Create Recipe
export const AddPost = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_CREATE_REQUEST,
    });
    const { data } = await axios.post(
      "https://recipes-api5.herokuapp.com/api/recipe",
      {},
    );
    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: POST_CREATE_FAIL,
      payload: message,
    });
  }
};

//Get Recipe By Id
export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: POST_DETAILS_REQUEST });

    const { data } = await axios.get(
      `https://recipes-api5.herokuapp.com/api/recipe/${id}`
    );
    console.log(data);
    dispatch({
      type: POST_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
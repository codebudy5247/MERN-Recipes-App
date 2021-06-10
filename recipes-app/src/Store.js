import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {postListReducer,postCreateReducer,postDetailsReducer} from "./Redux/Reducer/RecipeReducer"

const reducer = combineReducers({
  postList: postListReducer,
  postCreate:postCreateReducer,
  postDetails:postDetailsReducer
});

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
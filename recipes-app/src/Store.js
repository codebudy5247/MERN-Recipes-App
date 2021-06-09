import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {postListReducer} from "./Redux/Reducer/RecipeReducer"

const reducer = combineReducers({
  postList: postListReducer,
});

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
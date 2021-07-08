import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { MoveisReducers } from "./Moveis/MoveisReducer";


const reducer = combineReducers({
    MoviesState : MoveisReducers

})
const middlewares = [thunk];
const Store =createStore(
    reducer,
  applyMiddleware(...middlewares)
)

export default Store;
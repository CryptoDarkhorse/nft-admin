import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/root";

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducers,
    initialState,
    applyMiddleware(...middleware)
)

export default store;
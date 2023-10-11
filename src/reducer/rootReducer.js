import { combineReducers } from "redux";
import countereducer from "./countereducer";
import userReducer from "./userReducer";

const rootReducer= combineReducers({
    counter: countereducer,
    user: userReducer
})

export default rootReducer;
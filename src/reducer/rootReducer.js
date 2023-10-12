import { combineReducers } from "redux";
import countereducer from "./countereducer";
import userReducer from "./userReducer";
import myuserReducer from "./myuserReducer";

const rootReducer= combineReducers({
    counter: countereducer,
    user: userReducer,
    myuser:myuserReducer
})

export default rootReducer;
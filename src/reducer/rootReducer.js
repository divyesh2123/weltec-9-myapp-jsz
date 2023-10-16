import { combineReducers } from "redux";
import countereducer from "./countereducer";
import userReducer from "./userReducer";
import myuserReducer from "./myuserReducer";
import sagareducer from "./sagareducer";
import postReducer from "./postReducer";

const rootReducer= combineReducers({
    counter: countereducer,
    user: userReducer,
    myuser:myuserReducer,
    sagauser:sagareducer,
    post:postReducer
})

export default rootReducer;
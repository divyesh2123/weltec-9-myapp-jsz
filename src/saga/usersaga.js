import { call, put, takeLatest } from "redux-saga/effects";
import fetchGetUsers, { addPost } from "../postdata/fetchGetUsers";

function* handleGetUsers() {
    try {
     // console.log(call(fetchGetUsers))
      const users = yield call(fetchGetUsers);
  
  
     console.log(users)
      yield put({ type: "GET_USERS_SUCCESS", payload: users });
    } catch (err) {
      yield put({ type: "GET_USERS_FAILED", payload: err });
    }
  }
  
  function* watcherUserSaga() {
    yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  }

   function* addPostSaga(action) {
      try {
       
        const data = yield call(addPost, action.payload);
        console.log(data);
        yield put({type: 'ADD_POST_SUC', payload: data});
      } catch (error) {
        yield put({type: 'ADD_POST_FAIL', payload: data});
      }
    }
    
    export function* addPostWatcher() {
      yield takeLeading("ADD_POST", addPostSaga);
    }
  
  export default watcherUserSaga;
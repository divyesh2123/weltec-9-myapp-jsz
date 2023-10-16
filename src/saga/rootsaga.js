
import { all } from "redux-saga/effects";
import { incwatcher } from "./countersaga";
import watcherUserSaga, { addPostWatcher } from "./usersaga";

function *rootsaga()
{

    yield all([incwatcher(),watcherUserSaga(),addPostWatcher()]);
}

export default rootsaga;
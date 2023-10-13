
import { all } from "redux-saga/effects";
import { incwatcher } from "./countersaga";

function *rootsaga()
{

    yield all([incwatcher()]);
}

export default rootsaga;
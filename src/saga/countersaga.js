
import { put, takeEvery, delay, takeLatest } from 'redux-saga/effects'
import { INC } from '../action/counteraction';

function* asycInc()
{
    yield delay(2000);

    yield put(INC())

}

export function* incwatcher()
{

    yield takeLatest('INCREMENT_ASYNC',asycInc)

}
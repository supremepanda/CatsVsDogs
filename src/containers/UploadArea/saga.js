import { takeEvery } from "redux-saga/effects"
import { uploadAreaTypes } from "./actions"


export function* test() {
	yield console.log("Saga test function")
}

export default function* uploadAreaSaga() {
	yield takeEvery(uploadAreaTypes.TEST, test)
}
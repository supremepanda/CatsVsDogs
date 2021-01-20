import { all, fork } from "redux-saga/effects"

import uploadAreaSaga from "./UploadArea/saga"

export default function* rootSaga() {
	yield all([
		fork(uploadAreaSaga)
	])
}
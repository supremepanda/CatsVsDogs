import { takeLatest, call, put } from "redux-saga/effects"
import uploadAreaActions, { uploadAreaTypes } from "./actions"

const BASE_URL = "http://127.0.0.1:5000"

async function callPredictImage(image) {
	const { type } = await fetch(`${BASE_URL}/api/predict-image`, {
		method: 'POST',
		body: image
	  }).then(res => res.json())

	return type
}

export function* uploadImageSaga({ image }) {
	const form = new FormData()
	form.append("image", image)

	const imageType = yield call(callPredictImage, form)
	yield put(uploadAreaActions.uploadImageSuccess(imageType))
}

export default function* uploadAreaSaga() {
	yield takeLatest(uploadAreaTypes.UPLOAD_IMAGE, uploadImageSaga)
}
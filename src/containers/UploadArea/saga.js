import { takeEvery, call, put } from "redux-saga/effects"
import { uploadAreaTypes } from "./actions"

const BASE_URL = "http://127.0.0.1:5000"

function callPredictImage(image) {
	fetch(`${BASE_URL}/api/predict-image`, {
		method: 'POST',
		body: image
	  })
		.then(res => res.json())
		.then(res => console.log(res))
}

export function* uploadImageSaga({ image }) {
	const form = new FormData()
	form.append("image", image)

	yield call(callPredictImage, form)
}

export default function* uploadAreaSaga() {
	yield takeEvery(uploadAreaTypes.UPLOAD_IMAGE, uploadImageSaga)
}
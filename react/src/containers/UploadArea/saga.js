import { takeLatest, call, put } from "redux-saga/effects";
import uploadAreaActions, { uploadAreaTypes } from "./actions";

const BASE_URL = "https://client-cats-vs-dogs.herokuapp.com";

async function callPredictImage(image) {
	const { type } = await fetch(`${BASE_URL}/api/predict-image`, {
		method: "POST",
		body: image,
		mode: "cors",
	}).then((res) => res.json());

	return type;
}

export function* uploadImageSaga({ image }) {
	const form = new FormData();
	form.append("image", image);

	const imageType = yield call(callPredictImage, form);
	yield put(uploadAreaActions.uploadImageSuccess(imageType));
}

export default function* uploadAreaSaga() {
	yield takeLatest(uploadAreaTypes.UPLOAD_IMAGE, uploadImageSaga);
}

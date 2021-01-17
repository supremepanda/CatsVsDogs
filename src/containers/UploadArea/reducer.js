import { createReducer } from 'reduxsauce'
import { uploadAreaTypes } from "./actions"

export const INITIAL_STATE = {
	loading: false,
	image: null
}

export const uploadImageSuccessReducer = (state = INITIAL_STATE, action) => {
	return state
}

export const uploadImageErrorReducer = (state = INITIAL_STATE, action) => {
	return state
}

export const HANDLERS = {
	[uploadAreaTypes.UPLOAD_IMAGE_SUCCESS]: uploadImageSuccessReducer,
	[uploadAreaTypes.UPLOAD_IMAGE_ERROR]: uploadImageErrorReducer
}

export default createReducer(INITIAL_STATE, HANDLERS)

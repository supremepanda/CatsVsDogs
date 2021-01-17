import { createReducer } from 'reduxsauce'
import { uploadAreaTypes } from "./actions"

export const INITIAL_STATE = {
	test: "test"
}

export const test = (state = INITIAL_STATE, action) => {
	console.log("test")

	return state
}

export const HANDLERS = {
	[uploadAreaTypes.TEST]: test
}

export default createReducer(INITIAL_STATE, HANDLERS)

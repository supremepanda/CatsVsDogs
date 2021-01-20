import produce from 'immer';

import { createReducer } from 'reduxsauce'
import { uploadAreaTypes } from "./actions"

export const INITIAL_STATE = {
	loading: false,
	image: null,
	imageType: null
}

export const uploadImageReducer = state =>
  produce(state, draft => {
    draft.loading = true;
    draft.imageType = null;
    draft.image = null;
  });

export const uploadImageSuccessReducer = (state, { imageType }) =>
	produce(state, draft => {
		draft.loading = false;
		draft.imageType = imageType;
	})

export const uploadImageErrorReducer = state => 
	produce(state, draft => {
		draft.loading = false;
	})

export const HANDLERS = {
	[uploadAreaTypes.UPLOAD_IMAGE]: uploadImageReducer,
	[uploadAreaTypes.UPLOAD_IMAGE_SUCCESS]: uploadImageSuccessReducer,
	[uploadAreaTypes.UPLOAD_IMAGE_ERROR]: uploadImageErrorReducer
}

export default createReducer(INITIAL_STATE, HANDLERS)

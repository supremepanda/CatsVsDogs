import { createSelector } from 'reselect';

const selectUpload = state => state.uploadArea;

const makeSelectImageType = createSelector(
  selectUpload,
  ({ imageType }) => imageType
);

export {
	makeSelectImageType
}
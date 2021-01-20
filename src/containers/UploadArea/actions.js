import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	uploadImage: ["image"],
	uploadImageSuccess: [],
	uploadImageError: []
})

export { Types as uploadAreaTypes }
export default Creators
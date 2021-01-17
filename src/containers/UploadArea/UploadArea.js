import React, { useRef } from "react"
import { useDispatch } from "react-redux"

import uploadAreaActions from "./actions"

import * as S from "./style"

function UploadArea() {
	const inputRef = useRef(null)
	const previewRef = useRef(null)
	const previewWrapperRef = useRef(null)
	const formRef = useRef(null)

	const dispatch = useDispatch()

	const handleUploadClick = () => {
		inputRef.current.click()
		
		previewRef.current.src = null;
		formRef.current.style.marginLeft = "280px"
		previewWrapperRef.current.style.visibility = "hidden"
		previewWrapperRef.current.style.opacity = 0
	}
	
	const handleFileUpload = (event) => {
		const { files } = event.target

		if (files && files[0]) {
			const fileReader = new FileReader()

			fileReader.onprogress = event => handleProgress(event)
			fileReader.onload = event => {
				handlePreview(event.target.result)
				dispatch(uploadAreaActions.uploadImage(files[0]))
			}

			fileReader.readAsDataURL(files[0])
		}
	}

	const handlePreview = (image) => {
		formRef.current.style.marginLeft = 0
		previewWrapperRef.current.style.visibility = "visible"
		previewWrapperRef.current.style.opacity = 1
		previewRef.current.src = image;
	}

	// TODO: Progress will handled 
	const handleProgress = ({lengthComputable, loaded, total}) => {
		if (lengthComputable) {
			console.log(loaded)
		}
	}

	return (
	<S.UploadArea>
		<S.UploadForm ref={formRef} onSubmit={(e) => e.preventDefault()}>
			<S.Upload
				ref={inputRef}
				type="file"
				onChange={handleFileUpload}
				accept="image/*" />
			<S.Button onClick={handleUploadClick}>Click to Upload Image</S.Button>
		</S.UploadForm>
		<S.PreviewWrapper ref={previewWrapperRef}>
			<S.Preview ref={previewRef} alt="preview" />
		</S.PreviewWrapper>
	</S.UploadArea>)
}

export default UploadArea;
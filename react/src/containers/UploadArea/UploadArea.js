import React, { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { makeSelectImageType } from "../UploadArea/selectors"

import uploadAreaActions from "./actions"
import * as S from "./style"

function UploadArea() {
	const imageType = useSelector(makeSelectImageType)
	const inputRef = useRef(null)
	const previewRef = useRef(null)
	const previewWrapperRef = useRef(null)
	const formRef = useRef(null)
	const [isSet, setIsSet] = useState(false)

	const dispatch = useDispatch()

	const handleUploadClick = () => {
		inputRef.current.click()
		setIsSet(false)
		
		previewRef.current.src = null;
		formRef.current.style.marginLeft = "280px"
		previewWrapperRef.current.style.visibility = "hidden"
		previewWrapperRef.current.style.opacity = 0
	}
	
	const handleFileUpload = (event) => {
		const { files } = event.target

		if (files && files[0]) {
			const fileReader = new FileReader()

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
		setIsSet(true)

		setTimeout(() => {
			formRef.current.reset()
		}, 100)
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
				<S.Preview ref={previewRef} alt="preview" isSet={isSet} />
				{imageType?.toString() ? 
					<S.ResultWrapper>
						<S.Result>It's a {imageType?.toString() === "0" ? "Cat" : "Dog"}</S.Result>
					</S.ResultWrapper>
					:
					<S.ResultWrapper>
						<S.Result><S.Loading /></S.Result>
					</S.ResultWrapper>
				}
			</S.PreviewWrapper>
		</S.UploadArea>
	)
}

export default UploadArea;
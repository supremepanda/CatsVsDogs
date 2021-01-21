import styled from "styled-components"

const UploadArea = styled.main`
	position: absolute;
	bottom: -128px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;

`

const UploadForm = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 280px;

	background-color: var(--white);
	width: 256px;
	height: 256px;
	border-radius: 16px;
	box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.1);
	border: 2px dashed var(--gray);
	transition: .3s margin ease-in-out;
`

const Upload = styled.input`
	display: none;
`

const Button = styled.button`
	width: 100%;
	height: 100%;
	appearance: none;
	background-color: transparent;
	outline: none;
	border: 0;
	color: var(--gray);
	font-size: 16px;
	cursor: pointer;
	transition: .3s all ease-in-out;
`

const PreviewWrapper = styled.div`
	visibility: hidden;
	position: relative;
	opacity: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 256px;
	height: 256px;
	background-color: var(--white);
	box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.1);
	border-radius: 16px;
	margin-left: 24px;
	overflow: hidden;
	border: 2px dashed var(--gray);
	transition: .3s all ease-in-out;
`

const Preview = styled.img`
	width: 100%;
	max-width: 100%;
	height: 100%;
	object-fit: cover;
	filter: blur(${({ isSet }) => isSet ? "3px" : 0})
`

const ResultWrapper = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.3);
`

const Result = styled.h3`
	transition: .3s all ease-in-out;
	color: var(--white);
`

const Loading = styled.div`
  border: 16px solid var(--white); 
  border-top: 16px solid var(--primary);
  border-radius: 50%;
  width: 72px;
  height: 72px;
  animation: spin 2s linear infinite;

	@keyframes spin {
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
	}
`

export { UploadArea, UploadForm, Upload, Button, PreviewWrapper, Preview, ResultWrapper, Result, Loading }
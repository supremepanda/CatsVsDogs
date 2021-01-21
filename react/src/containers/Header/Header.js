import React from "react"

import UploadArea from "../UploadArea"

import * as S from "./style"

function Header() {
	return (
		<S.Header>
			<S.Title>Prediction for an image is Cat or Dog</S.Title>
			<S.Subtitle>Final Project of Data Mining, <strong>CENG3521</strong></S.Subtitle>
			<UploadArea />
		</S.Header>
	)
}

Header.S = Header;

export default Header
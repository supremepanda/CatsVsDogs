import React from "react"

import GithubMark from "../../assets/github-logo.png"

import * as S from "./style"

function Navigation() {
	return (
	<S.Navigation>
		<S.Logo>Petbender</S.Logo>
		<S.GithubMark href="https://github.com/supremepanda/CatsVsDogs" target="_blank">
        	<S.Image src={GithubMark} />
			<S.Text>Github</S.Text>
		</S.GithubMark>
	</S.Navigation>
	)
}

export default Navigation
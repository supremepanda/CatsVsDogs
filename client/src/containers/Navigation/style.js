import styled from "styled-components"

const Navigation = styled.nav`
	margin-top: 24px;
	display: flex;
	justify-content: space-between;
`

const Logo = styled.div`
	font-size: 24px;
	font-weight: 700;
	letter-spacing: 1px;
	color: var(--primary);
	cursor: pointer;
`

const GithubMark = styled.a`
	display: flex;
	align-items: center;
	background-color: var(--black);
	color: var(--white);
	appearance: none;
	cursor: pointer;
	outline: none;
	text-decoration: none;
	padding: 8px 16px;
	border-radius: 4px;
	box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.2);
`

const Image = styled.img`
	width: 24px;
	height: 24px;
	margin-right: 8px;
`

const Text = styled.p``

export { Navigation, Logo, GithubMark, Image, Text }
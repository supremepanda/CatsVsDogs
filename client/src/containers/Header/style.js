import styled from "styled-components"

const Header = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 24px;
	position: relative;
	width: 100%;
	height: 512px;
	background-color: var(--secondary);
	border-radius: 16px;
`

const Title = styled.h1`
	font-size: 48px;
	color: var(--primary);
	margin-bottom: 12px;
`

const Subtitle = styled.h3`
	font-weight: 400;
	font-size: 14px;
	color: var(--black);
	letter-spacing: 1px;
`

export { Header, Title, Subtitle }
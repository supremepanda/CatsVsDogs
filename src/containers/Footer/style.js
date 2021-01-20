import styled from "styled-components"

const Footer = styled.footer`
	position: absolute;
	display: flex;
	bottom: 24px;
	left: 50%;
	transform: translateX(-50%);
`

const FooterLink = styled.a`
	margin-left: 8px;
	color: var(--black);
`

export { Footer, FooterLink }
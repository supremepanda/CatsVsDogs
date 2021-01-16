import styled, { createGlobalStyle } from "styled-components"

const ResetStyles  = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`
const GlobalStyles = createGlobalStyle`
	body {
		font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 15px;
	}
`

const Variables = createGlobalStyle`
	:root {
		--primary: #4a88f7;
		--secondary: #f5f9fe;
		--white: #fff;
		--black: #192d51;
		--gray: #8d99af;
	}
`

const App = styled.div`
	width: 100vw;
	height: 100vh;
	`

const Container = styled.div`
	width: 90%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`

export { ResetStyles, GlobalStyles, Variables, App, Container }
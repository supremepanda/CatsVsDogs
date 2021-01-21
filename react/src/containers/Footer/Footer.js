import React from "react"

import * as S from "./style"

function Footer() {
	return (
	<S.Footer>
		<p>
			&copy; MIT Licenced. Developed By
		</p>
		<S.FooterLink href="https://github.com/mehmetpekcan" target="_blank">
			Mehmet Pekcan
		</S.FooterLink>
		<S.FooterLink href="https://github.com/supremepanda" target="_blank">
			Furkan Baldır
		</S.FooterLink>
	</S.Footer>
	)
}

export default Footer
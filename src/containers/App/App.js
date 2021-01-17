import { useEffect } from "react"

import Navigation from "../Navigation"
import Header from "../Header"
import Footer from "../Footer"

import * as S from "./style"

function App() {
  // useEffect(() => {
  //   fetch("/api/test").then(res => res.json())
  //     .then(res => console.log({ res }))
  // }, [])

  return (
    <>
      <S.ResetStyles />
      <S.GlobalStyles />
      <S.Variables />
      <S.App>
        <S.Container>
          <Navigation />
          <Header />
          <Footer />
        </S.Container>
      </S.App>
    </>
  );
}

export default App;

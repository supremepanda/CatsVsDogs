import Navigation from "../Navigation"
import Header from "../Header"
import Footer from "../Footer"

import * as S from "./style"

function App() {
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

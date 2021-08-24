import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./../css/sanitize.css";
import "./../css/styles.css";

const GlobalStyle = createGlobalStyle`
:root {
	--innerPadding: 10px;
	--outerPadding: 25px;
}
`;

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

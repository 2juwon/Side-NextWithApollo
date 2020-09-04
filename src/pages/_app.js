/**
 * SSR 환경에서 styled-component 사용을 위해 설정
 */
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../provider/theme";

const GlobalStyle = createGlobalStyle`
    body { 
        padding: 0; 
        margin: 0; 
        background-color: aquamarine
    }
`;

const App = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <Component {...pageProps} />
            </>
        </ThemeProvider>
    );
};

App.getInitialProps = async ({ ctx, Component }) => {
    const pageProps = await Component.getInitialProps?.(ctx);

    return { pageProps };
};

export default App;

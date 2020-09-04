/**
 * Common Layout
 */
import styled from "styled-components";
import Header from "./Header";

const Wrapper = styled.div`
    width: 100%;
    background-color: white;
`;

const Layout = ({ children }) => (
    <>
        <Wrapper>
            <Header />
            {children}
        </Wrapper>
    </>
);

export default Layout;

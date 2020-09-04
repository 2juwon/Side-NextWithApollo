import styled from "styled-components";
import Link from "next/link";

const HeaderLayout = styled.div`
    background-color: ${props => props.theme.mainColor};
`;

const MenuItem = styled.a`
    color: blueviolet;
    margin-right: 10px;
`;

const Menu = ({ href, title }) => (
    <Link href={href} passHref>
        <MenuItem>{title}</MenuItem>
    </Link>
);

const Header = () => {
    return (
        <HeaderLayout>
            <Menu href="/measure" title="Menu #1" />
            <Menu href="" title="Menu #2" />
            <Menu href="" title="Menu #3" />
        </HeaderLayout>
    );
};

export default Header;

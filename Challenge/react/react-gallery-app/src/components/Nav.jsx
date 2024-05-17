import { styled } from 'styled-components';
import { TiArrowSync } from 'react-icons/ti';

const Nav = ({ fetchData, search, setSearch }) => {
    function searching() {
        if (search.trim().length === 0) {
            return;
        }
    }

    function enterHandler(e) {
        if (e.key === 'Enter') {
            searching();
        }
    }

    function searchHandler(e) {
        setSearch(e.target.value);
    }

    return (
        <NavWrapper>
            <Logo>
                <img src='/images/unsplash-logo.png' alt='logo' />
            </Logo>
            <Input
                value={search}
                onChange={searchHandler}
                onKeyUp={enterHandler}
                placeholder='Searching Image...'
            />
            <Button onClick={fetchData}>{<TiArrowSync />}</Button>
        </NavWrapper>
    );
};

const Button = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    padding: 2px 1px 0 0;
    cursor: pointer;
    background-color: #ffffff;
    color: #5f5f5f;
    font-size: 2rem;
`;

const Input = styled.input`
    min-width: 400px;
    height: 34px;
    border-radius: 10px;
    border: none;
    background-color: #eaeaea;
    padding: 4px 8px;

    &:focus {
        outline: none !important;
        border: solid 1px #eaeaea;
        background-color: #ffffff;
    }

    &::placeholder {
        font-style: oblique;
    }
`;

const Logo = styled.a`
    width: 40px;
    display: inline-block;

    img {
        display: block;
        width: 100%;
    }
`;

const NavWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    border-bottom: solid 1px #eaeaea;
    z-index: 1;
`;

export default Nav;

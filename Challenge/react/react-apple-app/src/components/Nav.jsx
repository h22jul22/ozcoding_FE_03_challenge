import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import app from '../firebase';

const initialUserData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : {};

const Nav = () => {
    const [show, setShow] = useState('false');
    const [searchValue, setSearchValue] = useState('');
    const [userData, setUserData] = useState(initialUserData);

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const auth = getAuth(app);

    useEffect(() => {
        setUserData(initialUserData);
    }, [userData]);

    const listener = () => {
        if (window.scrollY > 50) {
            setShow('true');
        } else {
            setShow('false');
        }
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
    };

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUserData({});
                localStorage.removeItem('userData');
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/');
            } else if (user && pathname === '/') {
                navigate('/main');
            }
        });
    }, [auth, navigate, pathname]);

    useEffect(() => {
        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        };
    }, []);

    return (
        <NavWrapper show={show}>
            <Logo>
                <img
                    alt='logo'
                    src='/images/apple-logo.png'
                    onClick={() => (window.location.href = '/')}
                />
            </Logo>

            {pathname !== '/' && (
                <Wrapper>
                    <Input
                        type='text'
                        className='nav__input'
                        value={searchValue}
                        onChange={handleChange}
                        placeholder='영화를 검색하세요.'
                    />
                    <SignOut>
                        <UserImg src={userData.photoURL} alt={userData.displayName} />
                        <DropDown>
                            <span onClick={handleLogOut}>Sign Out</span>
                        </DropDown>
                    </SignOut>
                </Wrapper>
            )}
        </NavWrapper>
    );
};

const UserImg = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
`;

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
`;

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    &:hover {
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
        }
    }
`;

const Input = styled.input`
    transform: translate(-50%, 0);
    background-color: rgba(0, 0, 0, -0.5);
    border-radius: 5px;
    color: white;
    padding: 5px;
    border: 2px solid lightgrey;
    height: 23px;
    outline: none;
    cursor: text;
    margin-right: -75px;

    &:focus {
        border: 2px solid transparent;
        outline: 2px solid rgb(20, 100, 218);
    }
`;

// const Login = styled.a`
//     background-color: rgba(0, 0, 0, 0.6);
//     border-radius: 4px;
//     padding: 8px 16px;
//     border: 1px solid #f9f9f9;
//     letter-spacing: 1.5px;
//     text-transform: uppercase;
//     transition: all 0.2s ease;
//     margin: 0;
//     cursor: pointer;

//     &:hover {
//         background-color: #f9f9f9;
//         color: #000;
//         border-color: transparent;
//     }
// `;

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 300px;
    gap: 5px;
`;

const Logo = styled.a`
    padding: 0;
    width: 70px;
    font-size: 0;
    display: inline-block;
    margin-bottom: 10px;

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
    background-color: ${(props) => (props.$show === 'true' ? '#000000' : '#000000')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

export default Nav;

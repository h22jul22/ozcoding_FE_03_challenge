import styled from 'styled-components';
import { TiImage } from 'react-icons/ti';

const Footer = ({ onClick }) => {
    return (
        <Bottom>
            <MoreButton onClick={onClick}>
                <TiImage />
            </MoreButton>
        </Bottom>
    );
};

const MoreButton = styled.button`
    width: 80px;
    height: 50px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background-color: #ffffff;
    color: #5f5f5f;
    font-size: 3rem;
    margin: 10px;
    z-index: 2;
`;

const Bottom = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

export default Footer;

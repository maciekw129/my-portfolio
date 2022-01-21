import styled from 'styled-components/macro';

export const HeaderContainer = styled.header<{isHeaderTop: boolean}>`
    position: fixed;
    display: flex;
    justify-content: space-between;
    height: 3rem;
    width: 100%;
    top: -3rem;
    left: 0;
    background-color: #430C15;
    z-index: 99;
    padding: 0 1.5rem;
    box-shadow: 0.1rem 0rem 0.2rem;
    transform: ${({isHeaderTop}) => isHeaderTop ? 'none' : 'translateY(3rem)'};
    transition: transform 0.5s ease-in-out;
`;

export const MediaIcons = styled.div`
    display: flex;
    align-items: center;

    & svg {
        width: 1.5rem;
        margin: 0 1rem;
        cursor: pointer;
        color: #8E8E8E;
    }
`;
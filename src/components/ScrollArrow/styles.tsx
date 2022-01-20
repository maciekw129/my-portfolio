import styled from 'styled-components/macro';

export const MenuContainer = styled.div`
    position: fixed;
    right: 3rem;
    bottom: 8rem;
`;

export const MenuButton = styled.button<{isScrollTop: boolean}>`
    background-color: transparent;
    border: none;
    cursor: pointer;
    opacity: ${({ isScrollTop }) => isScrollTop ? '0%' : '100%'};
    transition: opacity 0.5s linear;

    & svg {
        width: 2rem;
        color: #8E8E8E;
    }
`;
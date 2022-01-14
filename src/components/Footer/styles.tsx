import styled from 'styled-components/macro';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #8E8E8E;
    padding: 1rem 0;
    
    & h5 {
        color: black;
    }
`;

export const MediaIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-bottom: 1rem;

    & svg {
        width: 2rem;
        margin: 0 1rem;
        cursor: pointer;
    }
`;


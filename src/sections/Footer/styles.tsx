import styled from 'styled-components/macro';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #ffffffca;
    padding: 1rem 0;
    
    & p {
        color: black;
        font-weight: bold;
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


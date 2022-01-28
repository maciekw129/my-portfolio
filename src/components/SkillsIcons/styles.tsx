import styled from 'styled-components/macro';

export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding: 2rem 0;

    & svg {
        height: 1.5rem;
        color: #ffffffca;
    }

    @media only screen and (min-width: 1400px) {
        margin-top: 5rem;
    }
`;
import styled from 'styled-components/macro';

export const ProjectContainer = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 750px) {
        width: 30%;
    }
`;

export const TextContainer = styled.div`
    border: 1px solid #8E8E8E;
    border-bottom: 0;
    border-radius: 5px 5px 0 0;
    padding: 1rem;
    width: 100%;
`;

export const Title = styled.h3`
    font-weight: 500;
`;

export const Image = styled.img`
    width: 100%;
`;

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    border: 1px solid #8E8E8E;
    border-top: 0;
    border-radius: 0 0 5px 5px;
`;
import styled from 'styled-components/macro';

export const MyProjectsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5rem 0;
    padding: 0 1.5rem;

    @media only screen and (min-width: 750px) {
        height: 100vh;
        margin: 0;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 750px) {
        flex-direction: row;
        justify-content: center;
    }
`;

export const ProjectsList = styled.ul`
    width: 100%;
    margin: 1rem 0;

    @media only screen and (min-width: 750px) {
        width: auto;
    }
`;

export const ProjectItem = styled.li`
    color: #F1F3F8;
    text-decoration: underline;
    cursor: pointer;

`;

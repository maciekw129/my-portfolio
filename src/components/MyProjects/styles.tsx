import styled from 'styled-components/macro';

export const MyProjectsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10rem;

    @media only screen and (min-width: 750px) {
        min-height: 100vh;
        margin: 0;
        padding: 0 7rem;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    @media only screen and (min-width: 750px) {
        flex-direction: row;
        justify-content: space-evenly;
        align-items: flex-start;
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
    padding: 0.25rem 0;
`;

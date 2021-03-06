import styled from 'styled-components/macro';

export const MyProjectsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    margin-bottom: 10rem;

    & p {
        width: 100%;
    }

    @media only screen and (min-width: 450px) {
        padding: 0 3rem;
    }

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

    @media only screen and (min-width: 750px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 2rem;
        width: 90%;
    }
`;

export const ProjectsList = styled.ul`
    width: 100%;
    margin: 1rem 0;

    @media only screen and (min-width: 750px) {
        width: 40%;
    }
`;

export const ProjectItem = styled.li`
    color: #F1F3F8;
    cursor: pointer;
    padding: 0.25rem 0;

    &::before {
        color: #F6A401;
        content: '> ';
    }
`;

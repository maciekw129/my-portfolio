import styled from 'styled-components/macro';

export const AboutMeContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 2rem 0;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    @media only screen and (min-width: 750px){
        flex-direction: row;
        align-items: flex-start;
    }
`;

export const TextContainer = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 0;

    @media only screen and (min-width: 750px) {
        padding: 0 5rem;
    }

    @media only screen and (min-width: 900px) {
        padding: 0 5rem;
    }

    @media only screen and (min-width: 1400px) {
        padding: 0 10rem;
    }
`;

export const ListTitle = styled.p`
    margin-bottom: 0.25rem;
    color: #F1F3F8;
    text-decoration: underline;
`;

export const Skill = styled.li`
    color: #dddddd;
    padding-left: 0.5rem;

    & ::before{
        content: '> ';
        color: #F6A401;

    }
`;

export const Photo = styled.img`
    width: 100%;

    @media only screen and (min-width: 750px) {
        width: 45%;
        margin-top: 0;
    }
`;

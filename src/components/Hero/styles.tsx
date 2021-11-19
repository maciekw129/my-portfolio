import styled from 'styled-components/macro';
import { ArrowDown } from '@styled-icons/bootstrap/ArrowDown';

export const HeroContainer = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeroContent = styled.div`
    padding: 1rem;
`;

export const HeroHeader = styled.h1`
    font-weight: 500;
    font-size: 200%;

    & span {
        color: #F6A401;
    }

    @media only screen and (min-width: 475px) {
        font-size: 250%;
    }

    @media only screen and (min-width: 730px) {
        font-size: 350%;
    }
`;

export const Text = styled.p`
    margin-bottom: 1rem;
`;

export const Arrow = styled(ArrowDown)`
    position: absolute;
    right: 50%;
    bottom: 1rem;
    color: #8E8E8E;
    height: 1.5rem;
`;
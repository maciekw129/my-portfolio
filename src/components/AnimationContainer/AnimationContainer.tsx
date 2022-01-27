import styled from 'styled-components/macro';

const AnimationContainer = styled.div`
    animation: appear 1s linear;

    @keyframes appear {
        from {opacity: 0%}
        to {opacity: 100%}
    }
`;

export default AnimationContainer;

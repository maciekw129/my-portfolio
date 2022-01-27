import styled from 'styled-components/macro';

export const Logo = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    font-family: 'Courgette', cursive;
    padding: 1.5rem;
    border-radius: 100%;
    background-color: #430C15;
`;

export const AnimationContainer = styled.div`

    @keyframes spin {
    from {transform: rotate(0);}
    to {transform: rotate(-180deg)}
    }

    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .animation {
    position: relative;
    width: 100px;
    height: 100px;
    overflow: hidden;
    }

    .circle {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #430C15;
    border-radius: 100%;
    }

    .left .circle {
    top: 0;
    left: -50%;
    }

    .right .circle {
    top: 0;
    right: -50%;
    }

    .left, .right {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    }

    .right {
    right: 50%;
    }

    .left {
    left: 50%;
    }


    .mask {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-color: #F6A401;
    }

    .left .circle .mask {
    clip-path: inset(0px 50px 0px 0px);
    animation: spin 1s ease-in-out 1s forwards;
    }

    .right .circle .mask {
    clip-path: inset(0px 0px 0px 50px);
    animation: spin 1s ease-in-out 0s forwards;
    }

    .middleCircle {
    position: absolute;
    height: 90px;
    width: 90px;
    border-radius: 100%;
    background-color: #430C15;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Courgette', cursive;
    font-size: 200%;
    font-weight: bold;
    color: white;
    }
`;
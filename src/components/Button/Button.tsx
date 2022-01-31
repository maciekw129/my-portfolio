import styled from 'styled-components/macro';

const Button = styled.button`
    padding: 0.5rem 1rem;
    background: none;
    border: 1.5px solid #F6A401;
    border-radius: 25px;
    color: #F1F3F8;
    margin: 1rem 0;
    transition: background-color 0.5s linear, color 0.5s linear;

    &:hover {
        background-color: #F6A401;
        color: #440c15;
        cursor: pointer;
        transition: background-color 0.5s linear, color 0.5s linear;
    }
`;

export default Button;
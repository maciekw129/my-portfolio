import styled from 'styled-components/macro';

export const ContactMeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 35%;

    @media only screen and (min-width: 750px) {
        min-height: 100vh;
    }
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InputEmail = styled.input`
    text-align: center;
    background: none;
    border: 1px solid #8E8E8E;
    border-radius: 50px;
    padding: 0.5rem 1rem;
    margin: 1rem 0;
`;

export const InputText = styled.input`
    background: none;
    border: 1px solid #8E8E8E;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    width: 150%;
    height: 300px;
`;

export const InputSubmit = styled.input`

`;

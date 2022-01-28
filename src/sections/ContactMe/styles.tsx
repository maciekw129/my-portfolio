import styled from 'styled-components/macro';

export const ContactMeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 10%;

    & p {
        text-align: center;
    }

    @media only screen and (min-width: 750px) {
        min-height: 100vh;
        padding: 0 35%;
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
    width: 300px;

    @media only screen and (max-width: 300px) {
        width: 200px;
    }
`;

export const InputText = styled.textarea`
    background: none;
    border: 1px solid #8E8E8E;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    width: 300px;
    resize: none;
    color: #ffffff;

    @media only screen and (max-width: 300px) {
        width: 200px;
    }
`;

export const TextContainer = styled.div`
    min-height: 3rem;
`;

export const Text = styled.p<{textColor: string}>`
    color: ${({textColor}) => textColor};
`

import SectionTitle from '../SectionTitle/SectionTitle';
import {
    ContactMeContainer,
    InputEmail,
    InputText,
    FormContainer,
} from './styles';
import React, { useState } from 'react'
import Button from '../Button/Button';

const ContactMe = () => {

    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return(
        <ContactMeContainer>
            <SectionTitle align='center'><span>3.</span> Contact Me!</SectionTitle>
            <FormContainer onSubmit={sendEmail}>
                <InputEmail
                    type='email'
                    placeholder='e-mail'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputText
                    placeholder='Enter your message here...'
                    name='text'
                    value={text}
                    rows={15}
                    onChange={(e) => setText(e.target.value)}
                />
                <Button type='submit'>Send</Button>
            </FormContainer>
        </ContactMeContainer>
    )
}

export default ContactMe;
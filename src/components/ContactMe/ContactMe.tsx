import SectionTitle from '../SectionTitle/SectionTitle';
import {
    ContactMeContainer,
    InputEmail,
    InputText,
    FormContainer,
    InputSubmit,
} from './styles';
import { useState } from 'react'

const ContactMe = () => {

    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    return(
        <ContactMeContainer>
            <SectionTitle align='center'><span>3.</span> Contact Me!</SectionTitle>
            <FormContainer>
                <InputEmail
                    type='email'
                    placeholder='e-mail'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputText
                    type='text'
                    placeholder='Enter your message here...'
                    name='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <InputSubmit />
            </FormContainer>
        </ContactMeContainer>
    )
}

export default ContactMe;
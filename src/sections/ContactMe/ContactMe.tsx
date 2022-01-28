import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {
    ContactMeContainer,
    InputEmail,
    InputText,
    FormContainer,
    TextContainer,
    Text,
} from './styles';
import React, { useState } from 'react'
import Button from '../../components/Button/Button';
import { LanguageContext } from '../../utilities/languageContext'
import { useContext} from 'react';
import emailjs from '@emailjs/browser';
import Loading from '../../components/Loading/Loading';

const ContactMe = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isEmailSend, setIsEmailSend] = useState(false);
    const { language } = useContext(LanguageContext);
    const [afterSendText, setAfterSendText] = useState(' ');
    const [textColor, setTextColor] = useState('');

    const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsEmailSend(true);
        emailjs.sendForm('service_maciekw129', 'template_maciekw129', e.target, 'user_tjWm8B2iouokJPErZM8FG')
        .then(response => {
            console.log(response);
            setIsEmailSend(false);
            setTextColor('green');
            setAfterSendText(language.contactSuccessfull);
            setEmail('');
            setMessage('');
        }, (error) => {
            console.log(error.text);
            setTextColor('red');
            setAfterSendText(language.contactFailed);
        });
    };

    return(
        <ContactMeContainer>
            <SectionTitle align='center'><span>3.</span> {language.contactMeHeader}</SectionTitle>
            <p>{language.contactMeText}</p>
            <FormContainer onSubmit={sendEmail}>
                <InputEmail
                    required
                    type='email'
                    placeholder='e-mail'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputText
                    required
                    placeholder={language.contactTextbox}
                    name='message'
                    value={message}
                    rows={15}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <TextContainer>
                    {isEmailSend ? <Loading /> : <Text textColor={textColor}>{afterSendText}</Text>}
                </TextContainer>
                <Button type='submit'>Send</Button>
            </FormContainer>
        </ContactMeContainer>
    )
}

export default ContactMe;
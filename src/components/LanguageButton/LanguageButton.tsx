import {
    LanguageButtonContainer,
} from './styles';
import { Language } from '@styled-icons/material-outlined/Language';
import { useState } from 'react';

const LanguageButton = () => {

    const [isEnglish, setIsEnglish] = useState(true);

    const handleClick = () => {
        setIsEnglish(!isEnglish)
    }

    return(
        <LanguageButtonContainer onClick={handleClick}>
            <Language />
            <p>{isEnglish ? 'EN' : 'PL'}</p>
        </LanguageButtonContainer>
    )
};

export default LanguageButton;
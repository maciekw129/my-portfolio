import {
    LanguageButtonContainer,
} from './styles';
import { Language } from '@styled-icons/material-outlined/Language';
import { useContext } from 'react';
import { LanguageContext } from '../../utilities/languageContext';

const LanguageButton = () => {

    const { isEnglish, setIsEnglish } = useContext(LanguageContext);

    const handleClick = () => {
        setIsEnglish(!isEnglish);
    }

    return(
        <LanguageButtonContainer onClick={handleClick}>
            <Language title={isEnglish ? "Kliknij aby ustawić język na polski." : "Click to set the English language."} />
            <p>{isEnglish ? 'EN' : 'PL'}</p>
        </LanguageButtonContainer>
    )
};

export default LanguageButton;
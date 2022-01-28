import {
    HeaderContainer,
    MediaIcons,
} from './styles';
import { useState, useEffect } from 'react';
import LanguageButton from '../../components/LanguageButton/LanguageButton';
import { Facebook } from '@styled-icons/bootstrap/Facebook';
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';
import { Github } from '@styled-icons/bootstrap/Github';

const Header = () => {

    const [isHeaderTop, setIsHeaderTop] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', () =>
            setIsHeaderTop(window.pageYOffset === 0)
        );
    });

    return(
        <HeaderContainer isHeaderTop={isHeaderTop}>
            <LanguageButton />
            <MediaIcons>
                <a href="https://www.facebook.com/maciek.walecki.7" target="_blank" rel='noreferrer'><Facebook /></a>
                <a href="https://www.linkedin.com/in/maciej-walecki-51b76a1b7/" target="_blank" rel='noreferrer'><Linkedin /></a>
                <a href="https://github.com/maciekw129" target="_blank" rel='noreferrer'><Github /></a>
            </MediaIcons>
        </HeaderContainer>
    )
};

export default Header;
import {
    HeroContainer,
    HeroContent,
    HeroHeader,
    Text,
    Arrow,
} from './styles';
import Button from '../Button/Button';
import { useEffect, useState, useContext } from 'react';
import ScrollArrow from '../ScrollArrow/ScrollArrow';
import { LanguageContext } from '../../utilities/languageContext';

const Hero = () => {

    const [isScrollTop, setIsScrollTop] = useState(true);
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setIsScrollTop(window.pageYOffset === 0);
        });
    });

    return(
        <HeroContainer>
            <HeroContent>
                <HeroHeader>{language.heroHeader}</HeroHeader>
                <Text>{language.heroText}</Text>
                <Button>{language.cvButton}</Button>
                <Arrow isScrollTop={isScrollTop} />
                <ScrollArrow isScrollTop={isScrollTop} />
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;
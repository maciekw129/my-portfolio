import {
    HeroContainer,
    HeroContent,
    HeroHeader,
    Text,
    Arrow,
} from './styles';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';

const Hero = () => {

    const [isScrollTop, setIsScrollTop] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setIsScrollTop(window.pageYOffset === 0);
        });
    });

    return(
        <HeroContainer>
            <HeroContent>
                <HeroHeader>Hello!<br/>I am <span>Maciej Walecki.</span></HeroHeader>
                <Text>Junior frontend developer from Poland</Text>
                <Button>Download Resume</Button>
                <Arrow isScrollTop={isScrollTop} />
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;
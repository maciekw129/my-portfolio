import {
    HeroContainer,
    HeroContent,
    HeroHeader,
    Text,
} from './styles';
import Button from '../Button/Button';

const Hero = () => {
    return(
        <HeroContainer>
            <HeroContent>
                <HeroHeader>Hello!<br/>I'am <span>Maciej Walecki</span></HeroHeader>
                <Text>Junior frontend developer from Poland</Text>
                <Button>Download Resume</Button>
            </HeroContent>
        </HeroContainer>
    )
};

export default Hero;
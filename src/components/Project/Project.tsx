import {
    ProjectContainer,
    Title,
    Image,
    ButtonsContainer,
    TextContainer,
} from './styles';
import Button from '../Button/Button';
import { LanguageContext } from '../../utilities/languageContext';
import { useContext } from 'react';

interface projectObject {
    [key: string]: any
}

const Project = ({ project, isVisible }: projectObject) => {

    const { isEnglish } = useContext(LanguageContext);

    return(
        <ProjectContainer isVisible={isVisible}>
            <TextContainer>
                <Title>{project.title}</Title>
                <p>{isEnglish ? project.englishDescription : project.polishDescription}</p>
            </TextContainer>
            <ButtonsContainer>
                    <Button>{isEnglish ? 'code' : 'kod'}</Button>
                    <Button>{isEnglish ? 'live' : 'strona'}</Button>
            </ButtonsContainer>
            <Image src={project.image} />
        </ProjectContainer>
    )
};

export default Project;
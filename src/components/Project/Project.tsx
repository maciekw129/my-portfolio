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
                    <a href={project.code} target="_blank" rel='noreferrer'><Button>{isEnglish ? 'code' : 'kod'}</Button></a>
                    <a href={project.live} target="_blank" rel='noreferrer'><Button>{isEnglish ? 'live' : 'strona'}</Button></a>
            </ButtonsContainer>
            <Image src={project.image} />
        </ProjectContainer>
    )
};

export default Project;
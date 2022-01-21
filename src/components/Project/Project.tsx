import {
    ProjectContainer,
    Title,
    Image,
    ButtonsContainer,
    TextContainer,
} from './styles';
import Button from '../Button/Button';
import { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../../utilities/languageContext';
import cocktailProjectImage from '../../images/cocktailProjectImage.jpg';
import rockPaperScissorsImage from '../../images/rockPaperScissorsProjectImage.jpg';

interface props {
    projectNumber: number,
    isVisible: boolean,
};

type projectObject = {
    [key: string]: string;
}

const Project = ({ projectNumber, isVisible }: props) => {

    const { language } = useContext(LanguageContext);
    const [project, setProject] = useState<projectObject>({});

    useEffect(() => {
        setTimeout(() => {
            if(projectNumber === 0) {
                setProject({
                    title: 'Cocktails app',
                    description: language.cocktailsAppDescription,
                    live: 'https://cocktails-app-maciekw129.netlify.app/',
                    code: 'https://github.com/maciekw129/cocktails',
                    image: cocktailProjectImage,
                })
            } else if(projectNumber === 1) {
                const description = language.rockPaperScissorsDescription;
                setProject({
                    title: 'Rock, Paper, Scissors',
                    description: description,
                    live: 'https://paper-rock-scissors-maciekw129.netlify.app/',
                    code: 'https://github.com/maciekw129/rock_paper_scissors',
                    image: rockPaperScissorsImage,
                })
            }}, 400);
        }, [projectNumber, language]);

    return(
        <ProjectContainer isVisible={isVisible}>
            <TextContainer>
                <Title>{project.title}</Title>
                <p>{project.description}</p>
            </TextContainer>
            <ButtonsContainer>
                    <a href={project.code} target="_blank"><Button>code</Button></a>
                    <a href={project.live} target="_blank"><Button>live</Button></a>
            </ButtonsContainer>
            <Image src={project.image} />
        </ProjectContainer>
    )
};

export default Project;
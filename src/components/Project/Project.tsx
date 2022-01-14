import {
    ProjectContainer,
    Title,
    Image,
    ButtonsContainer,
    TextContainer,
} from './styles';
import Button from '../Button/Button';

interface projectObject {
    project: { [key: string]: any },
    isVisible: boolean,
}

const Project = ({ project, isVisible }: projectObject) => {
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
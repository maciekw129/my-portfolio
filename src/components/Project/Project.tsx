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
                    <Button>code</Button>
                    <Button>live</Button>
            </ButtonsContainer>
            <Image src={project.image} />
        </ProjectContainer>
    )
};

export default Project;
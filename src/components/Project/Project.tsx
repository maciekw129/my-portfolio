import {
    ProjectContainer,
    Title,
    Image,
    ButtonsContainer,
    TextContainer,
} from './styles';
import Button from '../Button/Button';

interface projectObject {
    [key: string]: any
}

const Project = ({ project }: projectObject) => {
    return(
        <ProjectContainer>
            <TextContainer>
                <Title>{project.title}</Title>
                <p>{project.description}</p>
            </TextContainer>
            <Image src={project.image} />
            <ButtonsContainer>
                    <Button>code</Button>
                    <Button>live</Button>
                </ButtonsContainer>
        </ProjectContainer>
    )
};

export default Project;
import {
    MyProjectsContainer,
    Content,
    ProjectsList,
    ProjectItem,
} from './styles';
import SectionTitle from '../SectionTitle/SectionTitle';
import projects from '../../utilities/projects';
import Project from '../Project/Project';
import { useState } from 'react';

const MyProjects = () => {

    const [project, setProject] = useState(projects.cocktailsApp);

    return(
        <MyProjectsContainer>
                <SectionTitle width="auto"><span>2. </span>My Projects</SectionTitle>
                <Content>
                    <ProjectsList>
                        <ProjectItem onClick={() => setProject(projects.cocktailsApp)}>Cocktail App</ProjectItem>
                        <ProjectItem onClick={() => setProject(projects.rockPaperScissors)}>Rock, paper, scissors</ProjectItem>
                    </ProjectsList>
                    <Project project={project} />
                </Content>
        </MyProjectsContainer>
    )
};

export default MyProjects;
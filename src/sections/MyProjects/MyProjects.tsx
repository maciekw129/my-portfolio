import {
    MyProjectsContainer,
    Content,
    ProjectsList,
    ProjectItem,
} from './styles';
import SectionTitle from './../../components/SectionTitle/SectionTitle';
import projects from '../../utilities/projects';
import Project from './../../components/Project/Project';
import { useRef, useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../utilities/languageContext';

const MyProjects = () => {

    const [project, setProject] = useState(projects.cocktailsApp);
    const [projectNumber, setProjectNumber] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const projectsRef = useRef<HTMLUListElement>(null);
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        setIsVisible(false);
        if(projectsRef.current !== null) {
            const projectsList = projectsRef.current.children as HTMLCollectionOf<HTMLElement>;
            for(let i = 0; i < projectsList.length; i++) {
                projectsList[i].style.textDecoration = 'none';
            }
            projectsList[projectNumber].style.textDecoration = 'underline'; 
        };
        setTimeout(() => {
            if(projectNumber === 0) {
                setProject(projects.cocktailsApp);
            }
            else if(projectNumber === 1) {
                setProject(projects.rockPaperScissors);
            };
        }, 400)
        setTimeout(() => {
            setIsVisible(true);
        }, 400);
    }, [projectNumber]);

    return(
        <MyProjectsContainer>
                <SectionTitle align='left'><span>2. </span>{language.myProjectsHeader}</SectionTitle>
                <p>{language.myProjectsText}</p>
                <Content>
                    <ProjectsList ref={projectsRef}>
                        <ProjectItem onClick={() => setProjectNumber(0)}><span></span>Cocktail App</ProjectItem>
                        <ProjectItem onClick={() => setProjectNumber(1)}>Rock, paper, scissors</ProjectItem>
                    </ProjectsList>
                    <Project isVisible={isVisible} project={project} />
                </Content>
        </MyProjectsContainer>
    )
};

export default MyProjects;
import {
    AboutMeContainer,
    TextContainer,
    Skill,
    ListTitle,
    Photo,
} from './styles';
import SectionTitle from '../SectionTitle/SectionTitle';
import AboutMePhoto from '../../images/AboutMePhoto.jpg';
import SkillsIcons from '../SkillsIcons/SkillsIcons';
import { LanguageContext } from '../../utilities/languageContext'
import { useContext } from 'react';

const AboutMe = () => {

    const { language } = useContext(LanguageContext)

    return(
        <AboutMeContainer>
                <TextContainer>
                    <SectionTitle align='left'><span>1. </span>{language.aboutMeHeader}</SectionTitle>
                    <p>{language.aboutMeText}</p>
                    <ul>
                        <ListTitle>{language.skillsText}</ListTitle>
                        <Skill>HTML5</Skill>
                        <Skill>CSS3, SASS, styled-components</Skill>
                        <Skill>JavaScript, TypeScript</Skill>
                        <Skill>React, react-hooks, react-router</Skill>
                        <Skill>Adobe Xd</Skill>
                        <Skill>Git.</Skill>
                    </ul>
                    <SkillsIcons />
                </TextContainer>
                <Photo src={AboutMePhoto} />
        </AboutMeContainer>
    )
};

export default AboutMe;
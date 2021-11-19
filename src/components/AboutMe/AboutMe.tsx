import {
    Content,
    AboutMeContainer,
    TextContainer,
    Skill,
    ListTitle,
    Photo,
} from './styles';
import SectionTitle from '../SectionTitle/SectionTitle';
import AboutMePhoto from '../../images/AboutMePhoto.jpg';
import SkillsIcons from '../SkillsIcons/SkillsIcons';

const AboutMe = () => {
    return(
        <AboutMeContainer>
            <Content>
                <TextContainer>
                    <SectionTitle><span>1. </span>About Me</SectionTitle>
                    <p>I'm 22 years old student of gastronomy and hospitality Warsaw (Poland). Because of the gastronomy lockdown due to the covid-19 pandemic, I decided to change my carrier path and try myself in coding.</p>
                    <ul>
                        <ListTitle>In that time I learned this technologies:</ListTitle>
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
            </Content>
        </AboutMeContainer>
    )
};

export default AboutMe;
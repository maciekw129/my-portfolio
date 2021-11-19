import { IconsContainer } from './styles';
import { Html5 } from '@styled-icons/boxicons-logos/Html5';
import { Css3 } from '@styled-icons/boxicons-logos/Css3';
import { Sass } from '@styled-icons/boxicons-logos/Sass';
import { Javascript } from '@styled-icons/simple-icons/Javascript';
import { Typescript } from '@styled-icons/simple-icons/Typescript';
import { GitSquare } from '@styled-icons/fa-brands/GitSquare';
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo';
import { Adobexd } from '@styled-icons/simple-icons/Adobexd';

const SkillsIcons = () => {
    return(
        <IconsContainer>
            <Html5 />
            <Css3 />
            <Sass />
            <Javascript />
            <Typescript />
            <ReactLogo />
            <Adobexd />
            <GitSquare />
        </IconsContainer>
    )
}

export default SkillsIcons;
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
            <Html5 title='HTML5' />
            <Css3 title='CSS3' />
            <Sass title='SASS' />
            <Javascript title='JavaScript' />
            <Typescript title='TypeScript' />
            <ReactLogo title='React' />
            <Adobexd title='Adobe Xd' />
            <GitSquare title='Git' />
        </IconsContainer>
    )
}

export default SkillsIcons;
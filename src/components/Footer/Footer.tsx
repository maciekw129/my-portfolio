import {
    FooterContainer,
    MediaIcons,
} from './styles';
import { Facebook } from '@styled-icons/bootstrap/Facebook';
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';
import { Github } from '@styled-icons/bootstrap/Github';

const Footer = () => {
    return(
        <FooterContainer>
            <MediaIcons>
                <a href="https://www.facebook.com/maciek.walecki.7" target="_blank"><Facebook /></a>
                <a href="https://www.linkedin.com/in/maciej-walecki-51b76a1b7/" target="_blank"><Linkedin /></a>
                <a href="https://github.com/maciekw129" target="_blank"><Github /></a>
            </MediaIcons>
            <h5>©2021 Copyright - All rights Reserved</h5>
        </FooterContainer>
    )
}

export default Footer;
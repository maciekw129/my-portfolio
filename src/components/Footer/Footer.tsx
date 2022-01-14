import {
    FooterContainer,
} from './styles';
import { Facebook } from '@styled-icons/bootstrap/Facebook';
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';
import { Github } from '@styled-icons/bootstrap/Github';

const Footer = () => {
    return(
        <FooterContainer>
            <Facebook />
            <Linkedin />
            <Github />
        </FooterContainer>
    )
}

export default Footer;
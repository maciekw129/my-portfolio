import {
    MenuContainer,
    MenuButton,
} from './styles';
import { ArrowUpCircleFill } from '@styled-icons/bootstrap/ArrowUpCircleFill';

type Props = {
    isScrollTop: boolean,
}

const Menu = ({isScrollTop}: Props) => {

    const handleClick = () => {
        window.scrollTo(0, 0);
    }

    return(
        <MenuContainer>
            <MenuButton 
                isScrollTop={isScrollTop}
                onClick={handleClick}
            >
                <ArrowUpCircleFill/>
            </MenuButton>
        </MenuContainer>
    )
};

export default Menu;
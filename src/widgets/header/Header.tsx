import './Header.scss'
import logo from './img/logo image.svg'
import { MyModal } from '../MyModal';
type HeaderProps = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}
const Header = ({isOpen, onOpen, onClose} : HeaderProps) => {
    return (
        <header className='header'>
            <div className='head'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <nav className='head__links'>
                    <a href="#">О нас</a>
                    <div className="head__links-line"></div>
                    <a href="#">Преимущества</a>
                    <div className="head__links-line"></div>
                    <a href="#">Услуги</a>
                </nav>
                <button onClick={onOpen} className='head__button'>Оставить заявку</button>
            </div>
            <MyModal isOpen={isOpen} onClose={onClose} />
        </header>
    )
}

export default Header;
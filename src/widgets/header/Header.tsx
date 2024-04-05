import './Header.scss'
import logo from './img/logo image.svg'
import Button from '../../shared/button/Button';
const Header = () => {
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
                <Button className='head__button'>Оставить заявку</Button>
            </div>
        </header>
    )
}

export default Header;
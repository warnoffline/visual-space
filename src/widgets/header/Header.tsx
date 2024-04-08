import './Header.scss'
import logo from './img/logo image.svg'
import { MyModal } from '../MyModal';
import {motion} from 'framer-motion'
import { useState } from 'react';
import menu from './img/Menu.svg'
import close from './img/Close.svg'
import telegram from './img/Property 1=Default.svg'
type HeaderProps = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onReadyOpen: () => void;
}
const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  }
const Header = ({isOpen, onOpen, onClose, onReadyOpen} : HeaderProps) => {
    return (
        <header className='header'>
            <div className='header_fixed'>
            <div className='head'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                {window.screen.width > 600 ? 
                (<>
                    <nav className='head__links'>
                        <a href="#second">О нас</a>
                        <div className="head__links-line"></div>
                        <a href="#advantage">Преимущества</a>
                        <div className="head__links-line"></div>
                        <a href="#services">Услуги</a>
                    </nav>
                    <button onClick={onOpen} className='head__button'>Оставить заявку</button>
                </>) :
                ((<NavBurger isOpen={isOpen} onOpen={onOpen} onClose={onClose} onReadyOpen={onReadyOpen}/>))
                }
            </div>
            </div>
            <MyModal isOpen={isOpen} onClose={onClose} onReadyOpen={onReadyOpen}/>
        </header>
    )
}

function NavBurger({onOpen} : HeaderProps){
    const [menuOpen, setMenuOpen] = useState(false)
    const closeMenu = () => {
        setMenuOpen(menuOpen => !menuOpen)
    }
    return(
        <>
        <motion.div
        className='mob__links'
        initial={false}
            animate={menuOpen ? "open" : "closed"}
            variants={variants}
        >
            <div className='mob__btn-close'>
                <button className='hamburger__close' onClick={closeMenu}><img src={close} alt='close'/></button>
            </div>
            <nav className='mob__nav'>
                <a href="#second" onClick={closeMenu}>О нас</a>
                <a href="#advantage" onClick={closeMenu}>Преимущества</a>
                <a href="#services" onClick={closeMenu}>Услуги</a>
            </nav>
            <div className="mob__nav-buttons">
                <p>Оставьте заявку для дальнейшей консультации</p>
                <button onClick={onOpen} className='head__button'>Оставить заявку</button>
            </div>
            <div className="mob__nav-buttons">
                <p>Свяжитесь с нами через соцсети</p>
                <button className='head__button'>
                    Telegram
                    <img src={telegram} alt="" />
                </button>
            </div>
        </motion.div>
        <button className='hamburger' onClick={closeMenu}><img src={menu} alt='menu'/></button>
        </>
    )
}

export default Header;
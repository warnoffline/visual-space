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
}
const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -100 },
  }
const Header = ({isOpen, onOpen, onClose} : HeaderProps) => {
    return (
        <header className='header'>
            <div className='head'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                {window.screen.width > 600 ? 
                (<>
                    <nav className='head__links'>
                        <a href="#">О нас</a>
                        <div className="head__links-line"></div>
                        <a href="#">Преимущества</a>
                        <div className="head__links-line"></div>
                        <a href="#">Услуги</a>
                    </nav>
                    <button onClick={onOpen} className='head__button'>Оставить заявку</button>
                </>) :
                (<NavBurger isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>)
                }
            </div>
            <MyModal isOpen={isOpen} onClose={onClose} />
        </header>
    )
}

function NavBurger({isOpen, onOpen, onClose} : HeaderProps){
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
            <nav className='mob__nav'>
                <a href="#" onClick={closeMenu}>О нас</a>
                <a href="#" onClick={closeMenu}>Преимущества</a>
                <a href="#" onClick={closeMenu}>Услуги</a>
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
        <button className='hamburger' onClick={closeMenu}><img src={menuOpen ? close : menu} alt='menu'/></button>
        </>
    )
}

export default Header;
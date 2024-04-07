import './Footer.scss'
import logo from './img/logo image.svg'
const Footer = () => {
    return (
        <footer className='footer'> 
            <div className="footer__center">
                <div className="footer__logo">
                    <img src={logo} alt="" />
                    <p>© Visual Space 2024. <br/> Использование сайта, в том числе подача заявок, означает согласие с пользовательским соглашением</p>
                </div>
                <div className="footer__links">
                    <a href="#second">О нас</a>
                    <a href="#advantage">Преимущества</a>
                    <a href="#services">Услуги</a>
                   </div>
                <div className="social__media">
                    <p>Соцсети для связи: </p>
                    {window.screen.width > 600 ? 
                        <a href='#' className='social__img'></a> : 
                        <a className="telegram">
                            <p>Telegram</p>
                            <div className="social__img"></div>
                        </a>
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer;
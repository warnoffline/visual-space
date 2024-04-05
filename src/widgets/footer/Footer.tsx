import './Footer.scss'
import logo from './img/logo image.svg'
import telegram from './img/Property 1=Default.svg'
const Footer = () => {
    return (
        <footer className='footer'> 
            <div className="footer__center">
                <div className="footer__logo">
                    <img src={logo} alt="" />
                    <p>© Visual Space 2024. <br/> Использование сайта, в том числе подача заявок, означает согласие с пользовательским соглашением</p>
                </div>
                <div className="footer__links">
                    <a href="#">О нас</a>
                    <a href="#">Преимущества</a>
                    <a href="#">Услуги</a>
                </div>
                <div className="social__media">
                    <p>Соцсети для связи: </p>
                    <img src={telegram} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
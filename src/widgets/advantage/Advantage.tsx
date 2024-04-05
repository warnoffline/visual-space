import star from './img/advantages_star.png'
import './Advantage.scss'
const Advantage = () => {
    return (
        <div className="advantage">
            <div className="advantage__center">
                <h1 className='advantage__h'>Преимущества</h1>
                <div className='advantage__center__blocks'>
                    <div className="advantage__center__block">
                        <div className="block__txt">
                            <h2>Индивидуальный подход</h2>
                            <p>Стремимся к тому, чтобы наше сотрудничество точно отражало ваши индивидуальные требования и предпочтения, обговариваемые в процессе онлайн встречи.</p>
                        </div>
                        <div className="block__number">
                            <img src={star} alt="" />
                            <p>01</p>
                        </div>
                    </div>
                    <div className="advantage__center__blocks__line"></div>
                    <div className="advantage__center__block">
                        <div className="block__txt">
                            <h2>Сэкономленное время</h2>
                            <p>Сотрудничество с нами позволяет заказчику сосредоточиться на своем бизнесе, не тратя время на создание и поддержку веб-сайта.</p>
                        </div>
                        <div className="block__number">
                            <img src={star} alt="" />
                            <p>02</p>
                        </div>
                    </div>
                    <div className="advantage__center__blocks__line"></div>
                    <div className="advantage__center__block">
                        <div className="block__txt">
                            <h2>Качество исполнения</h2>
                            <p>Предлагаем лучшее соотношение цены и качества. Создаем продукт доступный для стартапов на разных этапах развития.</p>
                        </div>
                        <div className="block__number">
                            <img src={star} alt="" />
                            <p>03</p>
                        </div>
                    </div>
                    <div className="advantage__center__blocks__line"></div>
                    <div className="advantage__center__block">
                        <div className="block__txt">
                            <h2>Технологичность</h2>
                            <p>Используем современный технологии для создания интерактивных и масштабируемых сайтов, сосредоточенных на адаптацию под ваши потребности. </p>
                        </div>
                        <div className="block__number">
                            <img src={star} alt="" />
                            <p>04</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Advantage;
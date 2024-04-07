import star from './img/advantages_star.png'
import './Advantage.scss'
import {motion} from 'framer-motion'
const animation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1.5 }
}
const Advantage = () => {
    return (
        <div id='advantage' className="advantage">
            <div className="advantage__center">
                <motion.h1
                    {...animation}
                    className='advantage__h'
                >
                    Преимущества
                </motion.h1>
                <div className='advantage__center__blocks'>
                    <motion.div 
                        {...animation}
                        className="advantage__center__block"
                    >
                        <div className="block__txt">
                            <h2>Индивидуальный подход</h2>
                            <p>Стремимся к тому, чтобы наше сотрудничество точно отражало ваши индивидуальные требования и предпочтения, обговариваемые в процессе онлайн встречи.</p>
                        </div>
                        <div className="block__number">
                            <img src={star} alt="" />
                            <p>01</p>
                        </div>
                    </motion.div>
                    <motion.div 
                        {...animation}
                        className="advantage__center__blocks__line"
                    ></motion.div>
                    <motion.div 
                        {...animation}
                        className="advantage__center__block"
                    >
                        <div className="block__txt">
                            <h2>Сэкономленное время</h2>
                            <p>Сотрудничество с нами позволяет заказчику сосредоточиться на своем бизнесе, не тратя время на создание и поддержку веб-сайта.</p>
                        </div>
                        <div className="block__number">
                            <img src={star} alt="" />
                            <p>02</p>
                        </div>
                    </motion.div>
                    <motion.div 
                        {...animation}
                        className="advantage__center__blocks__line"
                    ></motion.div>
                    <motion.div 
                        {...animation}
                        className="advantage__center__block"
                    >
                        <div className="block__txt">
                            <h2>Качество исполнения</h2>
                            <p>Предлагаем лучшее соотношение цены и качества. Создаем продукт доступный для стартапов на разных этапах развития.</p>
                        </div>
                        <div className="block__number">
                            <img src={star} alt="" />
                            <p>03</p>
                        </div>
                    </motion.div>
                    <motion.div 
                        {...animation}
                        className="advantage__center__blocks__line"
                    ></motion.div>
                    <motion.div 
                        {...animation}
                        className="advantage__center__block"
                    >
                        <div className="block__txt">
                            <h2>Технологичность</h2>
                            <p>Используем современный технологии для создания интерактивных и масштабируемых сайтов, сосредоточенных на адаптацию под ваши потребности. </p>
                        </div>
                        <div className="block__number">
                            <img src={star} alt="" />
                            <p>04</p>
                        </div>
                    </motion.div>
                </div>
                
            </div>
        </div>
    )
}

export default Advantage;
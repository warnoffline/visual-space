import './SecondBlock.scss'
import img1 from './img/1.svg'
import img2 from './img/2.svg'
import img3 from './img/3.svg'
import {motion} from 'framer-motion'
const animation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1.5 }
}
const SecondBlock = () => {
    return(
        <div className="second">
            <div className="second__center">
                <img className='img1' src={img1} alt="" />
                <motion.h1 {...animation} className='section__first'>Молодая креативная студия</motion.h1>
                <motion.p {...animation} className='section__second'>Мы - участники программы ФСИ, понимаем ваши потребности и помогаем с их закрытием </motion.p>
                <img className='img2' src={img2} alt="" />
                <motion.p {...animation} className='section__third'>Разрабатываем сайты понимая ваши проблемы и решая их доступными способом </motion.p>
                <motion.h1 {...animation} className='section__fourth'>Развиваем вас и ваш бренд</motion.h1>
                <img className='img3' src={img3} alt="" />
            </div>
        </div>
    )
}

export default SecondBlock;
import Button from '../../shared/button/Button';
import {motion} from 'framer-motion'
import { MyModal } from '../MyModal';
import './FirstBlock.scss'
type FirstBlockProps = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}
const animation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1.5 }
}

const FirstBlock = ({onOpen, isOpen, onClose}: FirstBlockProps) => {
    return (
        <div className='first'>
            <div className='first__center'>
                <img className='first__image first__image--left' src={window.screen.width > 600 ? "./blur-stars.png" : "./mob_stars.png"}  alt="" />
                <img className='first__image first__image--right' src={window.screen.width > 600 ? "./star.png" : "./mobile_star.png"}  alt="" />
                <motion.h1 {...animation}>Web Studio helping startup's</motion.h1>
                <motion.div {...animation }className='first__center-down'>
                    <h2 {...animation}>Команда, понимающая ваши проблемы</h2>
                    <div className='modal_btn'>
                        <Button onClick={onOpen}>Оставить заявку</Button>
                    </div>
                </motion.div>
            </div>
            <MyModal isOpen={isOpen} onClose={onClose}/>
        </div>
    )
}

export default FirstBlock;
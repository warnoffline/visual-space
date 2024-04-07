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
                <img src="./blur-stars.png" alt="#" className='first__image first__image--left' />
                <img src="./star.png" alt="#" className='first__image first__image--right' />
                <motion.h1 {...animation}>Web Studio helping startup's</motion.h1>
                <motion.div {...animation }className='first__center-down'>
                    <h2 {...animation}>Команда, понимающая ваши проблемы</h2>
                    <div>
                        <Button onClick={onOpen}>Оставить заявку</Button>
                    </div>
                </motion.div>
            </div>
            <MyModal isOpen={isOpen} onClose={onClose}/>
        </div>
    )
}

export default FirstBlock;
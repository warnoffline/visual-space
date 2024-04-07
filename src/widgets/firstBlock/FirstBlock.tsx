import Button from '../../shared/button/Button';
import { MyModal } from '../MyModal';
import './FirstBlock.scss'
type FirstBlockProps = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}
const FirstBlock = ({onOpen, isOpen, onClose}: FirstBlockProps) => {
    return (
        <div className='first'>
            <div className='first__center'>
                <img src="./blur-stars.png" alt="#" className='first__image first__image--left' />
                <img src="./star.png" alt="#" className='first__image first__image--right' />
                <h1>Web Studio helping startup's</h1>
                <div className='first__center-down'>
                    <h2>Команда, понимающая ваши проблемы</h2>
                    <div>
                        <Button onClick={onOpen}>Оставить заявку</Button>
                    </div>
                </div>
            </div>
            <MyModal isOpen={isOpen} onClose={onClose}/>
        </div>
    )
}

export default FirstBlock;
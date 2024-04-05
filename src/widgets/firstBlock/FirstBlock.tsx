import './FirstBlock.scss'
import Button from '../../shared/button/Button';
const FirstBlock = () => {
    return (
        <div className='first'>
            <div className='first__center'>
                <h1>Web Studio helping startup's</h1>
                <div className='first__center-down'>
                    <h2>Команда, понимающая ваши проблемы</h2>
                    <div>
                        <Button>Оставить заявку</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstBlock;
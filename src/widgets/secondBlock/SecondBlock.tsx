import './SecondBlock.scss'
import img1 from './img/1.svg'
import img2 from './img/2.svg'
import img3 from './img/3.svg'
const SecondBlock = () => {
    return(
        <div className="second">
            <div className="second__center">
                <img className='img1' src={img1} alt="" />
                <h1 className='section__first'>Молодая креативная студия</h1>
                <p className='section__second'>Мы - участники программы ФСИ, понимаем ваши потребности и помогаем с их закрытием </p>
                <img className='img2' src={img2} alt="" />
                <p className='section__third'>Разрабатываем сайты понимая ваши проблемы и решая их доступными способом </p>
                <h1 className='section__fourth'>Развиваем вас и ваш бренд</h1>
                <img className='img3' src={img3} alt="" />
            </div>
        </div>
    )
}

export default SecondBlock;
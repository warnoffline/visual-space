import Header from "../../widgets/header/Header"
import FirstBlock from "../../widgets/firstBlock/FirstBlock"
import SecondBlock from "../../widgets/secondBlock/SecondBlock"
import Advantage from "../../widgets/advantage/Advantage"
import Services from "../../widgets/services/Services"
import Footer from "../../widgets/footer/Footer"
import './Main.scss'
const Main = () => {
    return(
        <div className="main">
            <Header />
            <FirstBlock />
            <SecondBlock /> 
            <Advantage />
            <Services />
            <Footer />
        </div>
    )
}

export default Main
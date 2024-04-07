import Header from "../../widgets/header/Header"
import FirstBlock from "../../widgets/firstBlock/FirstBlock"
import SecondBlock from "../../widgets/secondBlock/SecondBlock"
import Advantage from "../../widgets/advantage/Advantage"
import Services from "../../widgets/services/Services"
import Footer from "../../widgets/footer/Footer"
import './Main.scss'
import { useDisclosure } from "@chakra-ui/react"
const Main = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return(
        <div className="main">
            <Header isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
            <FirstBlock isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
            <SecondBlock/> 
            <Advantage />
            <Services />
            <Footer />
        </div>
    )
}
export default Main
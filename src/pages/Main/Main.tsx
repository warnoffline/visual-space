import Header from "../../widgets/header/Header"
import FirstBlock from "../../widgets/firstBlock/FirstBlock"
import SecondBlock from "../../widgets/secondBlock/SecondBlock"
import Advantage from "../../widgets/advantage/Advantage"
import Services from "../../widgets/services/Services"
import Footer from "../../widgets/footer/Footer"
import { ReadyModal } from "../../widgets/ReadyModal"
import './Main.scss'
import { useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
const Main = () => {
    const [readyOpen, setReadyOpen] = useState(false)
    const onReadyClose = () => {
        setReadyOpen(false)
    }
    const onReadyOpen = () => {
        setReadyOpen(true)
    }
    const {isOpen, onOpen, onClose} = useDisclosure();
    return(
        <div className="main">
            <Header isOpen={isOpen} onOpen={onOpen} onClose={onClose} onReadyOpen={onReadyOpen}/>
            <FirstBlock isOpen={isOpen} onOpen={onOpen} onClose={onClose} onReadyOpen={onReadyOpen}/>
            <SecondBlock/> 
            <Advantage />
            <Services />
            <Footer />
            <ReadyModal isOpen={readyOpen} onClose={onReadyClose}></ReadyModal>
        </div>
    )
}
export default Main
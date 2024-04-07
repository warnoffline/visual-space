
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { SendPersonalForm } from "../../../features/send-personal-data";
import "./MyModal.scss"
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
}
export function MyModal({isOpen, onClose}: ModalProps) {
    return <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnEsc>
    <ModalOverlay />  
    <ModalContent className="modal" bg="#0F0F0F" borderRadius={50} py={5} px={2}>
      <ModalHeader className="modal__header" fontSize={40} fontWeight={900}>Оставить заявку</ModalHeader>
      <ModalCloseButton w={50} h={50} color="#e6e6e6" size="xl"/>
      <ModalBody display="flex" flexDir="column" gap={5}>
      <p className="modal__text">Заполните форму и наши сотрудники свяжутся с вами для консультации</p>
      <SendPersonalForm onClose={onClose}/>
      </ModalBody>

    </ModalContent>
  </Modal>

}
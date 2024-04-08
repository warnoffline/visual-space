
import { Modal, ModalBody, ModalCloseButton, ModalContent,  ModalOverlay, Heading } from "@chakra-ui/react";
import "./ReadyModal.scss"

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
}
export function ReadyModal({isOpen, onClose}: ModalProps) {
    return <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnEsc>
    <ModalOverlay />  
    <ModalContent className="modal" bg="#0F0F0F" borderRadius={50} py={5} px={2}>
      <ModalCloseButton w={50} h={50} color="#e6e6e6" size="xl"/>
      <ModalBody display="flex" flexDir="column" gap={5}>
        <Heading fontSize="xxx-large" fontWeight={900} fontFamily="Unbounded" className="ready-personal__heading">Заявка отправлена</Heading>
        <p className="ready-personal__txt">Свяжемся с вами в ближайшее время для предоставления консультации</p>
      </ModalBody>
    </ModalContent>
  </Modal>
}
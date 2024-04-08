
import { Modal, ModalBody, ModalCloseButton, ModalContent,  ModalOverlay } from "@chakra-ui/react";
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
      <ModalCloseButton w={50} h={50} color="#e6e6e6" size="xl"/>
      <ModalBody display="flex" flexDir="column" gap={5}>
      <SendPersonalForm/>
      </ModalBody>

    </ModalContent>
  </Modal>

}
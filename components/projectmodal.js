import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,

} from '@chakra-ui/react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  const { name, description } = project;
  console.log("hi", name)

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>{description}</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;

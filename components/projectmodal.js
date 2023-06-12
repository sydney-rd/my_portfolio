import { Modal, ModalContent, ModalHeader, Box, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionModal = motion(Modal);
const MotionModalContent = motion(ModalContent);

const ProjectModal = ({ isOpen, onClose, project }) => {
  const { name, description } = project;

  return (
      <MotionModal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4 }}
       
      >
      <MotionModalContent
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        textAlign="center"
        fontSize="2rem"

      >
        <ModalHeader
          sx={{
            fontFamily: 'Ailerons',
            fontSize: '9rem',
            textAlign: "center"
          }}
        >
          {name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{description}</ModalBody>
      
      </MotionModalContent>
    </MotionModal>
  );
};

export default ProjectModal;

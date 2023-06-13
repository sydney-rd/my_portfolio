import { Modal, ModalContent, ModalHeader, Box, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import { motion } from 'framer-motion';
// import { projects} from '../utilities/projects.js'

const MotionModal = motion(Modal);
const MotionModalContent = motion(ModalContent);

const ProjectModal = ({ isOpen, onClose, project }) => {
  const { name, description, projectBg } = project;
  console.log(projectBg)
    // // Find the project in the projects array
    // const selectedProject = projects.find((proj) => proj.name === name);
    // const backgroundImage = require(`../asset/background${selectedProject.projectBg}`).default;  
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
        backgroundImage={projectBg}
        style={{
          backgroundSize: "cover", // Adjust the background size here
          backgroundPosition: "center", // Adjust the background position if needed
        }}
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

import {
  Modal,
  ModalContent,
  ModalHeader,
  Box,
  ModalCloseButton,
  ModalBody,
  ModalOverlay
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionModal = motion(Modal)
const MotionModalContent = motion(ModalContent)

const ProjectModal = ({ isOpen, onClose, project }) => {
  const { name, description, projectBg, color } = project

  return (
    <MotionModal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4 }}
      height="100vh"
      width="100vw"
      position="fixed"
    >
      <ModalOverlay />
      <MotionModalContent
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        textAlign="center"
        fontSize="2rem"
        backgroundColor="orange"
        background="orange"
      >
        <ModalHeader
          sx={{
            fontFamily: 'Ailerons',
            fontSize: '9rem',
            textAlign: 'center',
            color: color
          }}
        >
          {name}
        </ModalHeader>
        <ModalCloseButton  />
        <ModalBody>{description}</ModalBody>

        <Box display="flex" justifyContent="center">
          <Box
            sx={{
              backgroundImage: `url(${projectBg})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '45vh',
              width: '45vw',
              mb: '5rem',
              borderRadius: '2rem' // not sure to keep ?
            }}
          />
        </Box>
      </MotionModalContent>
    </MotionModal>
  )
}

export default ProjectModal

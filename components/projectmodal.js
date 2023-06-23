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
  const { name, description, projectBg, color, github, link } = project

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
        transition={{ duration: 0.3, delay: 0.1 }}
        textAlign="center"
        fontSize="2rem"
        backgroundColor="transparent"
        border="2px solid"
        borderColor={color}
        borderRadius="2rem"
        zIndex={1}
        position="relative"
      >
        <ModalHeader
          sx={{
            fontFamily: 'Ailerons',
            fontSize: '9rem',
            textAlign: 'center',
            color: 'transparent',
            WebkitTextStroke: '1px',
            WebkitTextStrokeColor: color
          }}
        >
          {name}
        </ModalHeader>
        <ModalCloseButton
          sx={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center', // Add this line to vertically center the button
            top: '2rem', // Adjust the top position to center vertically
            right: '50%',
            transform: 'translateY(-50%)', // Add this line to properly center vertically
            size: 'xl',
            color: color,
            zIndex: 10,
            '&:focus': {
              boxShadow: 'none'
            }
          }}
        />
        {/* gif */}
        <Box display="flex" justifyContent="center" overflow="hidden">
          <Box
            sx={{
              backgroundImage: `url(${projectBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '45vh',
              width: '45vw',
              borderRadius: "2rem",
              filter: `drop-shadow(0 10 10px ${color})`,
              zIndex: 2
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              bottom: '-5px',
              left: '-5px',
              zIndex: 1,
            }}
          />
        </Box>
        <ModalBody>{description}
        {github}
        {link}
        </ModalBody>
      </MotionModalContent>
    </MotionModal>
  )
}

export default ProjectModal

import React, { useState } from 'react'
import { projects } from '../utilities/projects'
import {
  Flex,
  Box,
  useDisclosure,
  VStack,
  Link as ChakraLink
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import ProjectCategories from '../components/ProjectCategories'
import ProjectModal from '../components/ProjectModal'

const MotionChakraLink = motion(ChakraLink)

export default function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState('WEB')
  const [hoveredItem, setHoveredItem] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)
  const [tint, setTint] = useState({ color: '', opacity: '0' })

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleHover = (color, text) => {
    setTint({ color, opacity: '0.4' })
    setHoveredItem(text)
  }

  const handleHoverLeave = () => {
    setTint({ opacity: '0', color: '' })
    setHoveredItem('')
  }

  const handleClick = project => {
    setSelectedProject(project)
    onOpen()
  }

  const filteredProjects = projects.filter(
    project => project.category === selectedCategory
  )

  const getBackgroundImage = () => {
    switch (selectedCategory) {
      case 'WEB':
        return "url('https://i.pinimg.com/originals/90/09/ec/9009ecc79e92b8ba207b43c7e56bfb41.gif')"
      case 'C++':
        return "url('https://rare-gallery.com/mocahbig/434051-road-mist-dark-night-rain-nature.jpg')"
      case 'PYTHON':
        return "url('https://i.pinimg.com/474x/5b/df/93/5bdf937fbc9174341ce59c72be420db6.jpg')"
      case 'FULLSTACK':
        return "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40cab845-8738-49c2-aef8-25770e405eae/dd9hxuf-ea275591-d328-4302-bc74-54151cde0cd4.png/v1/fill/w_1600,h_686,q_80,strp/the_academy___rooftop___blackout_by_tamagochikun_dd9hxuf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njg2IiwicGF0aCI6IlwvZlwvNDBjYWI4NDUtODczOC00OWMyLWFlZjgtMjU3NzBlNDA1ZWFlXC9kZDloeHVmLWVhMjc1NTkxLWQzMjgtNDMwMi1iYzc0LTU0MTUxY2RlMGNkNC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RN2GkbNr8jUxKJkiMiZYodYtUnrm0dW9xHi-A6NZfWk')"
      default:
        return ''
    }
  }

  const backgroundStyle = {
    backgroundImage: getBackgroundImage(),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100vw',
    transition: 'opacity 0.7s'
  }

  return (
    <Flex style={backgroundStyle}>
      <Box
        w="100vw"
        h="100vh"
        position="absolute"
        zIndex="1"
        bg={tint.color}
        opacity={tint.opacity}
        transition="opacity 0.7s"
        brightness="100%"
        filter="auto"
      ></Box>
      <ProjectCategories
        selectedCategory={selectedCategory}
        onCategoryClick={setSelectedCategory}
        position="fixed"
      />
      <VStack
        align="flex-end"
        flexGrow={1}
        pt="3rem"
        pr="8rem"
        zIndex="2"
        overflowY="scroll"
        spacing={-1}
        style={{ scrollBehavior: 'smooth' }}
        maxH="100vh"
      >
        {filteredProjects.map((project, index) => (
          <MotionChakraLink
            key={index}
            onMouseEnter={() => handleHover(project.color, project.name)}
            onMouseLeave={handleHoverLeave}
            sx={{
              opacity: '1',
              fontFamily: 'Ailerons',
              fontSize: '9rem',
              whiteSpace: 'nowrap',
              textAlign: 'right',
              transition: 'none',
              filter: 'brightness(150%)',
              color:
                hoveredItem === project.name ? project.color : 'transparent',
              WebkitTextStroke: '2px',
              WebkitTextStrokeColor: project.color,
              _hover: {
                color: project.color,
                textShadow: `0px 0px 8px ${project.color}`
              }
            }}
            onClick={() => handleClick(project)}
          >
            {project.name}
          </MotionChakraLink>
        ))}
      </VStack>
      {selectedProject && (
        <ProjectModal
          isOpen={isOpen}
          onClose={onClose}
          project={selectedProject}
        />
      )}
    </Flex>
  )
}

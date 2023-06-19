import React, { useState } from 'react'
import { projects } from '../utilities/projects'
import {
  Flex,
  useDisclosure,
  VStack,
  Link as ChakraLink
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import ProjectCategories from '../components/ProjectCategories'
import ProjectModal from '../components/projectmodal'
import StarrySky from '../components/three-scenes/StarrySky.js'

const MotionChakraLink = motion(ChakraLink)

export default function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState('WEB')
  const [hoveredItem, setHoveredItem] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)
  const [tint, setTint] = useState({ color: '', opacity: '0' }) // put in main

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleHover = (color, text) => {
    setTint({ color, opacity: '0.1' })
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

  return (
    <Flex
      minHeight="100vh"
      width="100vw"
      transition="opacity 0.9s"
      position="relative"
    >
      <StarrySky />

      <ProjectCategories
        selectedCategory={selectedCategory}
        onCategoryClick={setSelectedCategory}
        position="fixed"
      />
      <VStack
        align="flex-end"
        flexGrow={1}
        pt="3rem"
        pr={['4rem', '8rem']}
        zIndex="1"
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
              fontSize: ['3rem', '9rem'],
              whiteSpace: ['normal', 'nowrap'],
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

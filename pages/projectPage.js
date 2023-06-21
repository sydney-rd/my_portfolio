import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky, Stars, Html } from '@react-three/drei'
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

const MotionChakraLink = motion(ChakraLink)

export default function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState('WEB')
  const [hoveredItem, setHoveredItem] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)

  const { isOpen, onOpen, onClose } = useDisclosure()

  // Modal
  const handleClick = project => {
    setSelectedProject(project)
    onOpen()
  }

  const filteredProjects = projects.filter(
    project => project.category === selectedCategory
  )

  return (
    <Flex minHeight="100vh" width="100vw" position="relative">
      <ProjectCategories
        selectedCategory={selectedCategory}
        onCategoryClick={setSelectedCategory}
      />

      <Canvas
        camera={{ position: [0, 0, 20] }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <OrbitControls autoRotate autoRotateSpeed={0.2} maxDistance={60} />
        <Sky sunPosition={[0, 0, 0]} />
        <Stars />
        <Html fullscreen transform >
          {selectedProject && (
            <ProjectModal
              isOpen={isOpen}
              onClose={onClose}
              project={selectedProject}
            />
          )}
          <VStack
            align="flex-end"
            flexGrow={1}
            pr={['4rem', '7rem']}
            zIndex="1"
            spacing={-1}
            maxH="100vh"
            position="relative"
            visibility= {isOpen ? 'hidden' : 'visible'}
            userSelect="none"
          >
            {filteredProjects.map((project, index) => (
              <MotionChakraLink
                key={index}
                sx={{
                  opacity: '1',
                  fontFamily: 'Ailerons',
                  fontSize: ['3rem', '9rem'],
                  whiteSpace: ['normal', 'nowrap'],
                  textAlign: 'right',
                  filter: 'brightness(150%)',
                  color:
                    hoveredItem === project.name
                      ? project.color
                      : 'transparent',
                  WebkitTextStroke: '2px',
                  WebkitTextStrokeColor: project.color,
                  _hover: {
                    color: project.color,
                    textShadow: `1px 1px 7px ${project.color}`,
                    transition: 'text-shadow 0.5s ease' // no work
                  }
                }}
                onClick={() => handleClick(project)}
              >
                {project.name}
              </MotionChakraLink>
            ))}
          </VStack>
        </Html>
      </Canvas>
    </Flex>
  )
}

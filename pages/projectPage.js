import React, { useState, useEffect } from 'react'
import { projects } from '../utilities/projects'
import { Flex, Box, VStack, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ProjectCategories from '../components/ProjectCategories'

const MotionChakraLink = motion(ChakraLink)

export default function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState('WEB')
  const [hoveredItem, setHoveredItem] = useState('')
  const [tint, setTint] = useState({ color: '', opacity: '0' })



  const LinkItem = ({
    path,
    target,
    href,
    onHover,
    onHoverLeave,
    color,
    text,
    ...props
  }) => {
    const isHovered = hoveredItem === text

    return (
      <MotionChakraLink
        as={Link}
        onMouseEnter={() => onHover(color, text)}
        onMouseLeave={onHoverLeave}
        href={href}
        target={target}
        sx={{
          opacity: '1',
          fontFamily: 'Ailerons',
          fontSize: '9rem',
          whiteSpace: 'nowrap',
          textAlign: 'right',
          transition: 'none',
          filter: 'brightness(150%)',
          color: isHovered ? color : 'transparent',
          WebkitTextStroke: '2px',
          WebkitTextStrokeColor: color,
          _hover: { color: color, textShadow: `0px 0px 8px ${color}` }
        }}
        {...props}
      >
        {text}
      </MotionChakraLink>
    )
  }

  const handleCategoryClick = category => {
    setSelectedCategory(category)
  }

  const filteredProjects = projects.filter(
    (project) => project.category === selectedCategory
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

  const hover = (color, text) => {
    if (color) {
      setTint({ color, opacity: '0.4' })
      setHoveredItem(text)
    }
  }

  const hoverLeave = () => {
    setTint({
      opacity: '0',
      color: ''
    })
    setHoveredItem('')
  }


  const backgroundStyle = {
    backgroundImage: getBackgroundImage(),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100vw',
    transition: "opacity 0.7s"
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
        onCategoryClick={handleCategoryClick}
      />
      <VStack align="flex-end" flexGrow={1} pt="5rem" pr="8rem" zIndex="2">
        {filteredProjects.map((project, index) => (
          <LinkItem
            href={project.href}
            text={project.name}
            key={index}
            color={project.color}
            onHover={hover}
            onHoverLeave={hoverLeave}
          />
        ))}
      </VStack>
    </Flex>
  )
}

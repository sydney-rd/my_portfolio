import React from 'react'
import { Box, VStack, Link } from '@chakra-ui/react'
import IndexScene from '../components/three-scenes/indexScene'

export default function Index() {
  return (
    <Box position="relative" height="100vh">
      <IndexScene />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "4",
          pointerEvents: "none" // Disable pointer events on the container box
        }}
      >
        <VStack spacing="2" alignItems="flex-start" pointerEvents="auto">
          <Link href="https://www.linkedin.com/">LinkedIn</Link>
          <Link href="https://github.com/">GitHub</Link>
          <Link href="mailto:sydneydavid56@gmail.com">Email</Link>
        </VStack>
        <Box
          flex="2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          pointerEvents="auto"
        >
          Events &rarr; Fullstack Developer
        </Box>
      </Box>
    </Box>
  )
}

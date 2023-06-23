import { Box, Link, VStack } from '@chakra-ui/react';
import AboutScene from '../components/three-scenes/AboutScene';
// make links open to a new tab 
export default function About() {
  return (
    <Box position="relative" height="100vh">
      <AboutScene />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '4',
          pointerEvents: 'none', // Disable pointer events on the container box
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
  );
}



// // test for three.js

// import React from 'react'
// import { Canvas } from '@react-three/fiber'
// import { Suspense } from 'react'
// import Terrain from '../components/three-scenes/Terrain'
// import { Cloud, OrbitControls, Sky, Stars, Sparkle } from '@react-three/drei'
// import { Box } from '@chakra-ui/react'

// export default function About() {
//   return (
//     <Box direction="column" align="center" justify="center" h="100vh" w="100vw">
//       <Canvas>
//         <fog attach="fog" args={['white', 0, 26]} />
//         <OrbitControls autoRotate />
//         <pointLight intensity={2} position={[7, 5, 1]} />
//         <Sky sunPosition={[7, 5, 1]} />
//         <Suspense fallback={null}>
//           <Stars />
//           <Terrain />
//         </Suspense>
//       </Canvas>
//     </Box>
//   )
// }


// import { Box, Link, VStack } from '@chakra-ui/react';
// import Snowfall from './test';

// export default function About() {
//   return (
//     <Box display="flex">
//       <Box width="20%" padding="4">
//         <VStack spacing="2" alignItems="flex-start">
//           <Link href="https://www.linkedin.com/">LinkedIn</Link>
//           <Link href="https://github.com/">GitHub</Link>
//           <Link href="mailto:sydneydavid56@gmail.com">Email</Link>
//         </VStack>
//       </Box>
//       <Box flex="2">
//         Events &rarr; Fullstack Developer
//       </Box>
//       {/* <Snowfall /> */}
//     </Box>
//   );
// }

// // test for three.js

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Terrain from '../components/three-scenes/Terrain'
import { OrbitControls, Sky } from '@react-three/drei'
import { Box } from '@chakra-ui/react'

export default function About() {
  return (
    <Box direction="column" align="center" justify="center" h="100vh" w="100vw">
      <Canvas>
        <fog attach="fog" args={['white', 0, 26]} />
        <OrbitControls autoRotate />
        <pointLight intensity={2} position={[7, 5, 1]} />
        <Sky sunPosition={[7, 5, 1]} />
        <Suspense fallback={null}>
          <Terrain />
        </Suspense>
      </Canvas>
    </Box>
  )
}

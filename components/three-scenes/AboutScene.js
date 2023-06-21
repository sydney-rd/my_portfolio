import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Terrain from './Terrain';
import { OrbitControls, Sky, Stars, Preload, Loader, AsyncModels } from '@react-three/drei';
import { Box } from '@chakra-ui/react';
import { CustomLoader } from '../loader';

export default function AboutScene() {
  return (
    <Box direction="column" align="center" justify="center" h="100vh" w="100vw">
      <Canvas>
        <fog attach="fog" args={['white', 0, 26]} />
        <OrbitControls autoRotate />
        <pointLight intensity={2} position={[7, 5, 1]} />
        <Sky sunPosition={[7, 5, 1]} />
        <Suspense fallback={null}>
          <Stars />
          <Terrain />
          <Preload all/>
        </Suspense>
      <CustomLoader />
      </Canvas>
    </Box>
  );
}


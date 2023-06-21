import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Sky, Stars } from '@react-three/drei';
import { Box } from '@chakra-ui/react';
import Ocean from './ocean';

export default function indexScene() {
  return (
    <Box direction="column" align="center" justify="center" h="100vh" w="100vw">
      <Canvas>
        <fog attach="fog" args={['white', 0, 26]} />
        <Suspense fallback={null}>
          <Ocean />
          <OrbitControls autoRotate />
          <Sky
            distance={450000}
            sunPosition={[0, 0, 1]}
            inclination={10}
            azimuth={0.25}
            turbidity={1}
            rayleigh={3}
            mieCoefficient={0.005}
            mieDirectionalG={0.8}
            luminance={2}
            sun={false}
          />
        </Suspense>
      </Canvas>
    </Box>
  );
}
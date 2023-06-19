import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Sky, Stars } from '@react-three/drei';
import { Box } from '@chakra-ui/react';

export default function IndexScene() {
  return (
    <Box direction="column" align="center" justify="center" h="100vh" w="100vw">
      <Canvas camera={{ position: [0, 10, 50] }}>
        <Suspense fallback={null}>
          {/* <Ocean /> */}
          <OrbitControls autoRotate />
          <Sky
            sunPosition={[0, 0, 0]}

          />
          <Stars />
        </Suspense>
      </Canvas>
    </Box>
  );
}

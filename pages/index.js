// first page you will see
// homepage with navbar

// import { Container, Box, Heading } from "@chakra-ui/react";
// const HomePage = () => {
//   return <Box className="idc"> hi tg</Box>;
  
// };
// export default HomePage;

import React from 'react';
// import { Box } from '@chakra-ui/react';
// import WebScene from '../three-scenes/WebScene';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Plane } from '@react-three/drei';

export default function HomePage() {
  return (
    <Canvas>
    <Suspense fallback={null}>
    <Plane args={[5, 5]} position={[0, 0, 0]}>
        <meshStandardMaterial color={'hotpink'} />
      </Plane>
      </Suspense>
  </Canvas>
  )
}

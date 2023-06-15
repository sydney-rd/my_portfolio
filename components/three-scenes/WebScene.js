import { Canvas } from '@react-three/fiber';
import React from "react";
import Terrain from './Terrain';


const WebScene = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Terrain />
       </Suspense>
    </Canvas>
  );
};

export default WebScene;

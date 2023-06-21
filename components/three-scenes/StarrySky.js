import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky, Stars } from "@react-three/drei";

export default function StarrySky() {
  return (
      <Canvas
        style={{ width: "100vw", height: "100vh" }}
      >
        <OrbitControls
          // enableZoom
          // enablePan
          // enableRotate
          // zoomSpeed={0.5}
          // panSpeed={0.5}
          // rotateSpeed={0.5}
          // autoRotate
          // autoRotateSpeed={0.1}
        />
        <Sky sunPosition={[0, 0, 0]} />
        <Stars rotationSpeed={0.001} />
      </Canvas>
  );
}

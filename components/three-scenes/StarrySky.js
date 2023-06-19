import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky, Stars } from "@react-three/drei";

export default function StarrySky() {
  return (
      <Canvas
        camera={{ position: [0, 1, 1] }}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zindex: "-1" }}
      >
        <OrbitControls
          enableZoom
          enablePan
          enableRotate
          zoomSpeed={0.5}
          panSpeed={0.5}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.1}
        />
        <Sky sunPosition={[0, 0, 0]} />
        <Stars rotationSpeed={0.001} />
      </Canvas>
  );
}

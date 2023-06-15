import React from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Plane } from "@react-three/drei";

const Terrain = () => {
  const height = useLoader(THREE.TextureLoader, "/assets/elevation.png");
  const normals = useLoader(THREE.TextureLoader, "/assets/normals.png");
  const colors = useLoader(THREE.TextureLoader, "/assets/colors.png");

  return (
      <Plane
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3, 0]}
        args={[64, 64, 1024, 1024]}      >
        <meshStandardMaterial
          attach="material"
          color="white"
          map={colors}
          metalness={0.2}
          normalMap={normals}
          displacementMap={height}
        />
      </Plane>
  );
};

export default Terrain;
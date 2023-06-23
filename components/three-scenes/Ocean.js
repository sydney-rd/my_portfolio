import React, { useRef, useMemo } from 'react'
import { extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import { Water } from 'three/examples/jsm/objects/Water.js'

extend({ Water })

function Ocean() {
  const ref = useRef()
  const gl = useThree(state => state.gl)
  const waterNormals = useLoader(
    THREE.TextureLoader,
    'https://t4.ftcdn.net/jpg/01/83/14/47/360_F_183144766_dbGaN37u6a4VCliXQ6wcarerpYmuLAto.jpg'
  )

  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(90000, 90000), [])
  const config = useMemo(
    () => ({
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xeb8934,
      waterColor: 0x0064b5,
      fog: false,
      format: gl.encoding
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [waterNormals]
  )
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  )
  return (
    <water
      ref={ref}
      args={[geom, config]}
      rotation-x={-Math.PI / 2}
      position={[10, 0, 0]}
    />
  )
}

export default Ocean
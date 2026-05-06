import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
const STEP  = 8
const COUNT = isMobile ? 4 : 7
const SIZE  = isMobile ? 30 : 60
const DIV   = isMobile ? 15 : 30

function MovingGrid() {
  const ref = useRef<THREE.Group>(null!)

  useFrame((_, dt) => {
    ref.current.position.z += dt * 5
    if (ref.current.position.z >= STEP) ref.current.position.z -= STEP
  })

  return (
    <group ref={ref}>
      {Array.from({ length: COUNT }).map((_, i) => (
        <gridHelper
          key={i}
          args={[SIZE, DIV, '#00e5ff', '#1e1060']}
          position={[0, 0, -i * STEP]}
        />
      ))}
    </group>
  )
}

function FloatingShape() {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((_, dt) => {
    ref.current.rotation.x += dt * 0.25
    ref.current.rotation.y += dt * 0.4
    ref.current.position.y = Math.sin(Date.now() * 0.001) * 0.3 + 0.5
  })

  return (
    <mesh ref={ref} position={[0, 0.5, -8]}>
      <octahedronGeometry args={[1.8, 0]} />
      <meshBasicMaterial color="#00e5ff" wireframe />
    </mesh>
  )
}

function Scene() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 8, 12)
    camera.lookAt(0, 0, -20)
  }, [camera])

  return (
    <>
      <fog attach="fog" args={['#09090b', 5, 55]} />
      <MovingGrid />
      {!isMobile && <FloatingShape />}
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <Scene />
    </Canvas>
  )
}

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import { Timer } from 'three'
import type * as THREE from 'three'

// r3f v9.x calls `new THREE.Clock()` internally before onCreated fires.
// THREE.Clock emits a deprecation warning in its constructor since r183.
// Patch console.warn at module load time to suppress only that message.
if (typeof window !== 'undefined') {
  const _warn = console.warn.bind(console)
  console.warn = (...args: Parameters<typeof console.warn>) => {
    if (typeof args[0] === 'string' && args[0].includes('THREE.Clock')) return
    _warn(...args)
  }
}

// Adapts THREE.Timer to the THREE.Clock interface expected by r3f.
class TimerClock {
  private _t = new Timer()
  running = true

  start()  { this._t.reset(); this.running = true }
  stop()   { this.running = false }

  getDelta() {
    if (!this.running) return 0
    this._t.update(performance.now())
    return this._t.getDelta()
  }

  getElapsedTime() {
    return this._t.getElapsed()
  }
}

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
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      onCreated={(state) => { state.clock = new TimerClock() as unknown as THREE.Clock }}
    >
      <Scene />
    </Canvas>
  )
}

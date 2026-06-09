'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Generate seeded random values at module level (not during render)
function makePositions(count: number) {
  let seed = 12345
  const rng = () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
  const pos = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (rng() - 0.5) * 40
    pos[i * 3 + 1] = (rng() - 0.5) * 40
    pos[i * 3 + 2] = (rng() - 0.5) * 40
  }
  return pos
}

function makeSizes(count: number) {
  let seed = 67890
  const rng = () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
  const s = new Float32Array(count)
  for (let i = 0; i < count; i++) {
    s[i] = rng() * 3 + 1
  }
  return s
}

const PARTICLE_COUNT = 2000
const POSITIONS = makePositions(PARTICLE_COUNT)
const SIZES = makeSizes(PARTICLE_COUNT)

function Particles() {
  const meshRef = useRef<THREE.Points>(null!)

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime * 0.05
    const pos = meshRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      const offset = i * 0.01
      pos[i3 + 1] += Math.sin(time + offset + pos[i3] * 0.1) * 0.002
      pos[i3] += Math.cos(time + offset + pos[i3 + 1] * 0.1) * 0.002
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[POSITIONS, 3]}
          count={PARTICLE_COUNT}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[SIZES, 1]}
          count={PARTICLE_COUNT}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#3b82f6"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

export function ParticleField() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Particles />
      </Canvas>
    </div>
  )
}

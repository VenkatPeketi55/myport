import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import type { Group, Mesh } from 'three'

function seededValue(seed: number) {
  return Math.abs(Math.sin(seed * 12.9898) * 43758.5453) % 1
}

function StarField() {
  const positions = useMemo(() => {
    const values: number[] = []

    for (let index = 0; index < 480; index += 1) {
      const radius = 10 + seededValue(index + 1) * 26
      const theta = seededValue(index + 11) * Math.PI * 2
      const phi = Math.acos(2 * seededValue(index + 21) - 1)

      values.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi),
      )
    }

    return new Float32Array(values)
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#7dd3fc" size={0.08} sizeAttenuation transparent opacity={0.75} />
    </points>
  )
}

function GlobeMesh() {
  const groupRef = useRef<Group>(null)
  const shellRef = useRef<Mesh>(null)
  const coreRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18
      groupRef.current.rotation.x += delta * 0.05
      groupRef.current.position.y = Math.sin(performance.now() * 0.0011) * 0.08
    }

    if (shellRef.current) {
      shellRef.current.rotation.y -= delta * 0.08
    }

    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.12
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={shellRef}>
        <sphereGeometry args={[1.32, 48, 48]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#22d3ee"
          emissiveIntensity={0.24}
          metalness={0.25}
          roughness={0.3}
          wireframe
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.98, 48, 48]} />
        <meshStandardMaterial
          color="#111827"
          emissive="#7c3aed"
          emissiveIntensity={0.18}
          metalness={0.18}
          roughness={0.36}
          transparent
          opacity={0.92}
        />
      </mesh>
    </group>
  )
}

export function GlobeCanvas() {
  return (
    <div className="h-[320px] w-full overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_52%)]">
      <Canvas camera={{ position: [0, 0, 4.4], fov: 46 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[2, 2, 3]} intensity={1.3} />
        <pointLight position={[-2, -1, 2]} intensity={0.8} color="#22d3ee" />
        <StarField />
        <GlobeMesh />
      </Canvas>
    </div>
  )
}

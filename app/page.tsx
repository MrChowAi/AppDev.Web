'use client';

import { Canvas } from '@react-three/fiber';

type Position = [number, number, number];

function ShaderPlane({ position, color1, color2 }: { position?: Position; color1: string; color2: string }) {
  return (
    <mesh position={position}>
      <planeGeometry args={[4, 4]} />
      <meshBasicMaterial color={color1} emissive={color2} />
    </mesh>
  );
}

function EnergyRing({ radius, position }: { radius: number; position?: Position }) {
  return (
    <mesh position={position}>
      <torusGeometry args={[radius, 0.05, 16, 64]} />
      <meshBasicMaterial color="#00e5ff" wireframe />
    </mesh>
  );
}

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ShaderPlane position={[0, 0, 0]} color1="#ff5722" color2="#ffffff" />
        <EnergyRing radius={1.5} position={[0, 0, 0.5]} />
      </Canvas>
    </main>
  );
}
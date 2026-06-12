'use client';

import { Canvas } from '@react-three/fiber';
import { ShaderPlane, EnergyRing } from '@/components/ShaderPlane';

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
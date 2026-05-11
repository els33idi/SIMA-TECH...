// @ts-nocheck
'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
  const count = 5000;
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  const { mouse } = useThree();

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      particle.mx += (mouse.x * 10 - particle.mx) * 0.01;
      particle.my += (mouse.y * 10 - particle.my) * 0.01;

      dummy.position.set(
        (particle.mx / 10) + a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) + b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) + b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.current?.setMatrixAt(i, dummy.matrix);
    });
    if (mesh.current) {
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#a855f7" transparent opacity={0.6} />
    </instancedMesh>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[4, 2, -5]}>
          <octahedronGeometry args={[1, 0]} />
          <meshPhongMaterial color="#60a5fa" wireframe transparent opacity={0.3} />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[-5, -1, -8]}>
          <torusKnotGeometry args={[1, 0.3, 100, 16]} />
          <meshPhongMaterial color="#a855f7" wireframe transparent opacity={0.2} />
        </mesh>
      </Float>
    </>
  );
}

export default function InteractiveScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#60a5fa" />
        <directionalLight position={[-10, -10, 5]} intensity={1} color="#a855f7" />
        <Particles />
        <FloatingShapes />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
}

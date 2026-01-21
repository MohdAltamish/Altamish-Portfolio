/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Environment, Text } from '@react-three/drei';
import * as THREE from 'three';

const TechParticle = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      const t = state.clock.getElapsedTime();
      mesh.current.position.y = position[1] + Math.sin(t + position[0]) * 0.1;
      mesh.current.rotation.x = t * 0.2;
      mesh.current.rotation.z = t * 0.1;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <octahedronGeometry args={[0.3, 0]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

const ConnectionLines = ({ count = 15 }) => {
  const lines = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
        const start = [
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 5
        ];
        const end = [
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 5
        ];
        temp.push({ start, end });
    }
    return temp;
  }, [count]);

  return (
    <group>
      {lines.map((l, i) => (
        <Line key={i} start={l.start as [number,number,number]} end={l.end as [number,number,number]} />
      ))}
    </group>
  )
}

const Line = ({ start, end }: { start: [number, number, number], end: [number, number, number] }) => {
    const ref = useRef<THREE.Line>(null);
    const geometry = useMemo(() => {
        const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
        return new THREE.BufferGeometry().setFromPoints(points);
    }, [start, end]);

    useFrame((state) => {
        if(ref.current) {
             ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    })

    return (
        <lineSegments ref={ref as any} geometry={geometry}>
            <lineBasicMaterial color="#4f46e5" transparent opacity={0.15} />
        </lineSegments>
    )
}

interface HeroSceneProps {
    isDark?: boolean;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ isDark = false }) => {
  const bgColor = isDark ? '#020617' : '#f8fafc'; // slate-950 vs slate-50

  return (
    <div className="absolute inset-0 z-0 opacity-100 pointer-events-none transition-colors duration-1000">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={isDark ? 0.3 : 0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color={isDark ? "#818cf8" : "#ec4899"} />
        
        {isDark && <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />}

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
           <group rotation={[0, 0, Math.PI / 6]}>
             {Array.from({ length: 25 }).map((_, i) => (
               <TechParticle 
                  key={i} 
                  position={[
                    (Math.random() - 0.5) * 14,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 6
                  ]} 
                  color={Math.random() > 0.5 ? "#4f46e5" : (isDark ? "#38bdf8" : "#0ea5e9")} 
               />
             ))}
           </group>
        </Float>
        
        <ConnectionLines count={25} />

        <Environment preset="city" />
        <color attach="background" args={[bgColor]} /> 
        <fog attach="fog" args={[bgColor, 5, 20]} />
      </Canvas>
    </div>
  );
};

export const QuantumComputerScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0">
       <div className="w-full h-full bg-slate-50 opacity-50"></div>
    </div>
  );
}
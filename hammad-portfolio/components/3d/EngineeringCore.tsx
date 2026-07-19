"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Text, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const NODE_LABELS = ["Java", "Python", "AI", "SQL", "Web"];

function Ring({
  radius,
  color,
  speed,
  tilt,
  thickness = 0.02,
}: {
  radius: number;
  color: string;
  speed: number;
  tilt: [number, number, number];
  thickness?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed;
  });
  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, thickness, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        metalness={0.7}
        roughness={0.25}
      />
    </mesh>
  );
}

function CoreSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.scale.setScalar(1 + Math.sin(t * 1.4) * 0.04);
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.55, 2]} />
      <meshStandardMaterial
        color="#ffb000"
        emissive="#ff8a00"
        emissiveIntensity={1.1}
        metalness={0.4}
        roughness={0.15}
        wireframe
      />
    </mesh>
  );
}

function OrbitNode({
  label,
  radius,
  angleOffset,
  speed,
  color,
}: {
  label: string;
  radius: number;
  angleOffset: number;
  speed: number;
  color: string;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + angleOffset;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = Math.sin(t * 1.3) * 0.25;
    }
  });
  return (
    <group ref={ref}>
      <mesh>
        <octahedronGeometry args={[0.09, 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
      </mesh>
      <Text
        position={[0, 0.22, 0]}
        fontSize={0.13}
        color="#f7f4ee"
        anchorX="center"
        anchorY="middle"
        font={undefined}
      >
        {label}
      </Text>
    </group>
  );
}

function Rig({ mobile }: { mobile: boolean }) {
  const { camera, pointer } = useThree();
  useFrame(() => {
    if (mobile) return;
    // Mutating the R3F camera object inside useFrame is the standard,
    // documented react-three-fiber pattern: `camera` is an imperative
    // three.js object driving the render loop, not React state.
    /* eslint-disable react-hooks/immutability */
    camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.03;
    camera.position.y += (pointer.y * 0.35 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
    /* eslint-enable react-hooks/immutability */
  });
  return null;
}

export default function EngineeringCore({ mobile = false }: { mobile?: boolean }) {
  const nodeRadius = mobile ? 1.15 : 1.35;
  const nodes = useMemo(
    () =>
      NODE_LABELS.map((label, i) => ({
        label,
        angleOffset: (i / NODE_LABELS.length) * Math.PI * 2,
        speed: 0.18 + i * 0.02,
        color: [
          "#ff8a00",
          "#ff4d3d",
          "#f5c76b",
          "#30d6a3",
          "#ffb000",
        ][i % 5],
      })),
    []
  );

  return (
    <Canvas
      dpr={mobile ? [1, 1.2] : [1, 2]}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} color="#f5c76b" />
      <pointLight position={[3, 2, 3]} intensity={2} color="#ff8a00" />
      <pointLight position={[-3, -2, -2]} intensity={1.2} color="#ff4d3d" />
      <Suspense fallback={null}>
        <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
          <CoreSphere />
          <Ring radius={0.95} color="#ff8a00" speed={0.25} tilt={[Math.PI / 2.4, 0, 0]} />
          <Ring radius={1.2} color="#ff4d3d" speed={-0.18} tilt={[Math.PI / 1.6, Math.PI / 6, 0]} />
          {!mobile && (
            <Ring radius={1.45} color="#f5c76b" speed={0.12} tilt={[Math.PI / 3, Math.PI / 3, 0]} />
          )}
          {nodes.map((n) => (
            <OrbitNode key={n.label} radius={nodeRadius} {...n} />
          ))}
        </Float>
        {!mobile && <Sparkles count={40} scale={4} size={2} speed={0.3} color="#f5c76b" opacity={0.5} />}
      </Suspense>
      <Rig mobile={mobile} />
    </Canvas>
  );
}

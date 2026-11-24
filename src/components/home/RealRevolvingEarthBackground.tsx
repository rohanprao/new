import { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import earthDayMap from '@/assets/earth/earth_atmos_2048.jpg';
import earthCloudsMap from '@/assets/earth/earth_clouds_1024.png';
import earthSpecularMap from '@/assets/earth/earth_specular_2048.jpg';
import earthLightsMap from '@/assets/earth/earth_lights_2048.png';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function EarthSphere({ mousePos }: { mousePos: { x: number; y: number } }) {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const systemRef = useRef<THREE.Group>(null);

  // Load NASA photorealistic texture maps
  const [dayTexture, cloudsTexture, specularTexture, lightsTexture] = useLoader(
    THREE.TextureLoader,
    [earthDayMap, earthCloudsMap, earthSpecularMap, earthLightsMap]
  );

  // Optimize texture filtering
  dayTexture.colorSpace = THREE.SRGBColorSpace;
  cloudsTexture.colorSpace = THREE.SRGBColorSpace;

  useFrame((_, delta) => {
    // Realistic slow axial rotation of Earth
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.04;
    }
    // Atmospheric clouds rotate independently at slightly different rate
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.052;
    }

    // Subtle responsive tilt with mouse motion
    if (systemRef.current) {
      systemRef.current.rotation.x = THREE.MathUtils.lerp(
        systemRef.current.rotation.x,
        0.25 + mousePos.y * 0.08,
        0.05
      );
      systemRef.current.rotation.y = THREE.MathUtils.lerp(
        systemRef.current.rotation.y,
        mousePos.x * 0.1,
        0.05
      );
    }
  });

  return (
    <group ref={systemRef} position={[1.4, 0, 0]} rotation={[0.25, 0, -0.15]}>
      {/* 1. Real Earth Sphere with NASA Day Texture, Specular & Emissive City Lights */}
      <mesh ref={earthRef} castShadow receiveShadow>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial
          map={dayTexture}
          roughnessMap={specularTexture}
          roughness={0.65}
          metalness={0.15}
          emissiveMap={lightsTexture}
          emissive={new THREE.Color('#ffdfa0')}
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* 2. Real Cloud Layer (Swirling translucent clouds above surface) */}
      <mesh ref={cloudsRef} scale={[1.018, 1.018, 1.018]}>
        <sphereGeometry args={[2.5, 48, 48]} />
        <meshStandardMaterial
          map={cloudsTexture}
          transparent
          opacity={0.45}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* 3. Soft Atmospheric Cyan/Blue Limb Glow Halo */}
      <mesh ref={glowRef} scale={[1.18, 1.18, 1.18]}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial
          color="#00A3FF"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 4. Secondary Outer Ionosphere Shimmer */}
      <mesh scale={[1.28, 1.28, 1.28]}>
        <sphereGeometry args={[2.5, 24, 24]} />
        <meshBasicMaterial
          color="#06B6D4"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function FallbackBackdrop() {
  return (
    <div className="absolute inset-0 bg-[#0B1B3A]" />
  );
}

export default function RealRevolvingEarthBackground() {
  const prefersReducedMotion = useReducedMotion();
  const mousePosRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    mousePosRef.current = { x, y };
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none"
    >
      <Suspense fallback={<FallbackBackdrop />}>
        <Canvas
          camera={{ position: [0, 0, 5.8], fov: 48 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="w-full h-full"
        >
          {/* Ambient space light */}
          <ambientLight intensity={0.45} color="#D8E8F8" />

          {/* Sunlight source illuminating day side of Earth from top-right */}
          <directionalLight
            position={[8, 4, 6]}
            intensity={2.6}
            color="#FFF8E8"
          />

          {/* Subtle blue earth bounce light from below */}
          <directionalLight
            position={[-5, -4, -3]}
            intensity={0.35}
            color="#06B6D4"
          />

          <EarthSphere mousePos={mousePosRef.current} />
        </Canvas>
      </Suspense>

      {/* Cinematic Overlays to guarantee WCAG AA Text Contrast across the entire hero */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3A] via-[#0B1B3A]/85 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3A] via-transparent to-[#0B1B3A]/70 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,transparent_40%,#0B1B3A_90%)] pointer-events-none" />
    </div>
  );
}

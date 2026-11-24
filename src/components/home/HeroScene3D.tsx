import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Activity, Cpu, ShieldCheck } from 'lucide-react';

// Procedural 3D Industrial Machine Model (Rotary Screw Compressor + IoT Gateway)
function IndustrialCompressorModel({ mousePos }: { mousePos: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  const rotorRef = useRef<THREE.Mesh>(null);
  const fanRef = useRef<THREE.Group>(null);
  const pulseRing1 = useRef<THREE.Mesh>(null);
  const pulseRing2 = useRef<THREE.Mesh>(null);

  // Animation frame
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Gentle continuous rotation
    groupRef.current.rotation.y += delta * 0.2;

    // Subtle mouse tilt
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      0.35 + mousePos.y * 0.15,
      0.05
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      mousePos.x * 0.15,
      0.05
    );

    // High-speed rotor rotation inside chamber
    if (rotorRef.current) {
      rotorRef.current.rotation.x += delta * 4;
    }

    // Cooling fan rotation
    if (fanRef.current) {
      fanRef.current.rotation.z += delta * 6;
    }

    // Pulsing cyan sensor telemetry rings
    const time = state.clock.getElapsedTime();
    if (pulseRing1.current) {
      const scale = 1 + Math.sin(time * 3) * 0.15;
      pulseRing1.current.scale.set(scale, scale, scale);
      (pulseRing1.current.material as THREE.MeshBasicMaterial).opacity = 0.4 + Math.sin(time * 3) * 0.3;
    }
    if (pulseRing2.current) {
      const scale = 1 + Math.sin(time * 3 + 1.5) * 0.15;
      pulseRing2.current.scale.set(scale, scale, scale);
      (pulseRing2.current.material as THREE.MeshBasicMaterial).opacity = 0.4 + Math.sin(time * 3 + 1.5) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]} rotation={[0.35, -0.6, 0]}>
      {/* Heavy Industrial Cast Base Plate */}
      <mesh position={[0, -1.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.2, 0.25, 2.6]} />
        <meshStandardMaterial color="#0E1E38" metalness={0.85} roughness={0.3} />
      </mesh>
      {/* Base mounting bevels */}
      <mesh position={[0, -1.35, 0]}>
        <boxGeometry args={[4.4, 0.08, 2.8]} />
        <meshStandardMaterial color="#081326" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Main Motor Housing (Heavy Electric Motor) */}
      <mesh position={[-1.1, -0.3, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.75, 0.75, 1.8, 32]} />
        <meshStandardMaterial color="#162B4D" metalness={0.7} roughness={0.35} />
      </mesh>

      {/* Motor Cooling Fins Ring */}
      {[-1.6, -1.4, -1.2, -1.0, -0.8, -0.6].map((x, i) => (
        <mesh key={i} position={[x, -0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.82, 0.82, 0.04, 32]} />
          <meshStandardMaterial color="#0A182F" metalness={0.9} roughness={0.2} />
        </mesh>
      ))}

      {/* Rear Fan Housing with wireframe grill */}
      <group ref={fanRef} position={[-2.05, -0.3, 0]}>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.7, 0.7, 0.15, 24]} />
          <meshStandardMaterial color="#061224" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Fan blades */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <mesh key={i} rotation={[0, 0, (angle * Math.PI) / 180]}>
            <boxGeometry args={[0.08, 0.6, 0.02]} />
            <meshStandardMaterial color="#06B6D4" metalness={0.8} roughness={0.3} />
          </mesh>
        ))}
      </group>

      {/* Flexible Shaft Coupling Collar */}
      <mesh position={[0.0, -0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.45, 0.45, 0.45, 24]} />
        <meshStandardMaterial color="#2563EB" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Rotary Screw Air-End Compression Chamber */}
      <mesh position={[1.1, -0.3, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.68, 0.68, 1.6, 32]} />
        <meshStandardMaterial color="#1C355E" metalness={0.8} roughness={0.25} />
      </mesh>

      {/* Inspection Window Glass (Shows rotating screw) */}
      <mesh position={[1.1, -0.3, 0.7]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.8, 0.35, 0.05]} />
        <meshPhysicalMaterial
          color="#06B6D4"
          transmission={0.85}
          opacity={1}
          transparent
          roughness={0.1}
          ior={1.5}
        />
      </mesh>
      <mesh ref={rotorRef} position={[1.1, -0.3, 0.55]}>
        <cylinderGeometry args={[0.15, 0.15, 0.7, 8]} />
        <meshStandardMaterial color="#06B6D4" wireframe />
      </mesh>

      {/* Heavy Discharge Pipe / High Pressure Air Manifold */}
      <mesh position={[1.3, 0.7, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 1.2, 24]} />
        <meshStandardMaterial color="#3B82F6" metalness={0.85} roughness={0.2} />
      </mesh>
      <mesh position={[0.9, 1.3, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.2, 0.2, 0.8, 24]} />
        <meshStandardMaterial color="#3B82F6" metalness={0.85} roughness={0.2} />
      </mesh>

      {/* Cittagent Edge-Sentinel IoT Gateway Mounted Unit */}
      <group position={[0.2, 0.65, 0.65]}>
        {/* Gateway Enclosure */}
        <mesh castShadow>
          <boxGeometry args={[0.7, 0.6, 0.25]} />
          <meshStandardMaterial color="#08162B" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Front Glass Status Panel */}
        <mesh position={[0, 0, 0.13]}>
          <planeGeometry args={[0.62, 0.52]} />
          <meshStandardMaterial color="#0B1B3A" emissive="#042F4D" emissiveIntensity={0.6} />
        </mesh>
        {/* Gateway Blinking Status LEDs */}
        <mesh position={[-0.2, 0.16, 0.14]}>
          <circleGeometry args={[0.025, 16]} />
          <meshBasicMaterial color="#10B981" />
        </mesh>
        <mesh position={[-0.1, 0.16, 0.14]}>
          <circleGeometry args={[0.025, 16]} />
          <meshBasicMaterial color="#06B6D4" />
        </mesh>
        <mesh position={[0.0, 0.16, 0.14]}>
          <circleGeometry args={[0.025, 16]} />
          <meshBasicMaterial color="#F59E0B" />
        </mesh>
        {/* Gateway Antenna */}
        <mesh position={[0.25, 0.35, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 0.3, 8]} />
          <meshStandardMaterial color="#94A3B8" metalness={0.9} />
        </mesh>
      </group>

      {/* Sensor 1: Tri-Axial Vibration Puck on Motor Bearing (Front) */}
      <group position={[-0.3, -0.3, 0.8]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.1, 16]} />
          <meshStandardMaterial color="#F59E0B" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Telemetry Pulse Ring */}
        <mesh ref={pulseRing1} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.05]}>
          <ringGeometry args={[0.15, 0.22, 24]} />
          <meshBasicMaterial color="#06B6D4" transparent opacity={0.6} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* Sensor 2: High-Frequency Acoustic Leak Sensor on Air Discharge */}
      <group position={[1.3, 1.1, 0.2]}>
        <mesh rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 0.12, 16]} />
          <meshStandardMaterial color="#06B6D4" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Telemetry Pulse Ring */}
        <mesh ref={pulseRing2} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.08]}>
          <ringGeometry args={[0.12, 0.18, 24]} />
          <meshBasicMaterial color="#38BDF8" transparent opacity={0.6} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* Cable Harness (Connecting Sensor Pucks to Gateway) */}
      <mesh position={[0.0, 0.2, 0.72]} rotation={[0, 0, 0.8]}>
        <cylinderGeometry args={[0.02, 0.02, 0.8, 12]} />
        <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[0.7, 0.8, 0.4]} rotation={[0.4, 0, -0.6]}>
        <cylinderGeometry args={[0.02, 0.02, 0.7, 12]} />
        <meshStandardMaterial color="#38BDF8" emissive="#38BDF8" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
}

// Data Stream Particles along Pipelines
function DataStreamParticles() {
  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i < 40; i++) {
      const t = i / 40;
      pts.push([
        -1.5 + t * 3.2,
        Math.sin(t * Math.PI * 2) * 0.4 + 0.2,
        Math.cos(t * Math.PI) * 0.5 + 0.4
      ]);
    }
    return pts;
  }, []);

  return (
    <group>
      {points.map((pt, i) => (
        <mesh key={i} position={pt}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshBasicMaterial color={i % 2 === 0 ? '#06B6D4' : '#38BDF8'} />
        </mesh>
      ))}
    </group>
  );
}

// 2D Technical Schematic Fallback for Mobile / Low Power / Reduced Motion
function FallbackSchematic() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-[#0B1B3A]/80 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md">
      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 w-full max-w-md space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            <span className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
              ROTARY COMPRESSOR • UNIT #04-C
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[11px] font-bold">
            25.6 kHz ACTIVE
          </span>
        </div>

        {/* Isometric SVG Schematic */}
        <div className="relative aspect-video w-full rounded-xl bg-[#081326] border border-cyan-500/30 p-4 flex items-center justify-center shadow-inner">
          <svg className="w-full h-full text-cyan-400/80" viewBox="0 0 320 180" fill="none">
            {/* Base platform */}
            <path d="M 40 130 L 160 170 L 280 130 L 160 90 Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" fill="rgba(6,182,212,0.04)" />
            {/* Motor Cylinder */}
            <path d="M 60 100 L 120 120 L 120 70 L 60 50 Z" stroke="#3B82F6" strokeWidth="2" fill="rgba(37,99,235,0.15)" />
            {/* Compressor Chamber */}
            <path d="M 140 125 L 240 95 L 240 45 L 140 75 Z" stroke="#06B6D4" strokeWidth="2" fill="rgba(6,182,212,0.2)" />
            {/* High Pressure Manifold */}
            <path d="M 210 55 L 210 25 L 250 25" stroke="#F59E0B" strokeWidth="2" />
            {/* Sensor nodes */}
            <circle cx="120" cy="95" r="5" fill="#10B981" />
            <circle cx="120" cy="95" r="9" stroke="#10B981" strokeWidth="1" opacity="0.6" />
            <circle cx="210" cy="35" r="5" fill="#06B6D4" />
            <circle cx="210" cy="35" r="9" stroke="#06B6D4" strokeWidth="1" opacity="0.6" />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-3 text-left">
          <div className="p-3 rounded-lg bg-white/5 border border-white/5">
            <span className="block text-[10px] font-mono text-slate-400 uppercase">Acoustic Leak Detection</span>
            <span className="text-sm font-bold text-white">0.0 bar Delta</span>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/5">
            <span className="block text-[10px] font-mono text-slate-400 uppercase">ISO 10816 Vibration</span>
            <span className="text-sm font-bold text-emerald-400">Class 1 Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroScene3D() {
  const prefersReducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setMousePos({ x, y });
  };

  if (prefersReducedMotion || isMobile) {
    return <FallbackSchematic />;
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[480px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0F244C]/40 to-[#0B1B3A]/80 shadow-2xl backdrop-blur-sm group"
    >
      {/* Telemetry HUD Overlays */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B1B3A]/90 border border-cyan-500/30 text-white font-mono text-[11px] backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="font-semibold text-cyan-400">FACTORYOPS TWIN</span>
        <span className="text-slate-400">|</span>
        <span className="text-slate-300">SCREW-COMPRESSOR-04</span>
      </div>

      <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B1B3A]/90 border border-white/10 text-slate-300 font-mono text-[11px] backdrop-blur-md">
        <Activity className="w-3.5 h-3.5 text-cyan-400" />
        <span>SAMPLING: 25.6 kHz</span>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [3.8, 2.4, 4.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[6, 8, 5]} intensity={1.8} castShadow />
        <pointLight position={[-4, 2, -2]} intensity={0.8} color="#06B6D4" />
        <pointLight position={[3, 4, 3]} intensity={1.2} color="#38BDF8" />
        <pointLight position={[0, -1, 2]} intensity={0.6} color="#F59E0B" />

        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
          <IndustrialCompressorModel mousePos={mousePos} />
          <DataStreamParticles />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>

      {/* Bottom Telemetry Strip */}
      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#08162B]/85 border border-white/10 text-xs font-mono backdrop-blur-md">
        <div className="flex items-center gap-4 text-slate-300">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>BEARING VIB: 0.82 mm/s</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>LEAK PROB: 0.02%</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-cyan-400 text-[11px] font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>IEC 62443 AIR-GAPPED</span>
        </div>
      </div>
    </div>
  );
}
